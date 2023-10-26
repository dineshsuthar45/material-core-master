import { useTheme } from "@mui/material";
import classNames from "classnames";
import debounce from "lodash.debounce";
import React, {
  ChangeEvent,
  ClipboardEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePrevious } from "../../../hooks";
import { MButton } from "../button";
import { MFormControlLabel } from "../internal/formControlLabel";
import "./FinanceInput.dark.scss";
import "./FinanceInput.light.scss";
import "./FinanceInput.scss";
import { Feedback, FinanceInputProps } from "./FinanceInput.types";

/**
 * Valid amount will be considered with shape of 12345.6789 where 6789 are decimals.
 * Additions and subtructions is subject to the component user via 'handleAddition' and 'handleSubtraction'.
 * Please check number precision at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type.
 */
export const MFinanceInput = React.forwardRef(
  (
    {
      allowDecrease = true,
      allowIncrease = true,
      allowCopyToClipboard = false,
      label,
      labelPlacement = "top",
      tooltipTitle = "",
      feedbackMessages = {
        maximumDecimalMessage: "Maximum of {decimals} decimals reached.",
        invalidNumberMessage: "Please enter a valid number. i.e. {validNumber}",
        copyToClipboardMessage: "Number copied to clipboard.",
      },
      integrationMode = false,
      displayTrailingZeros = false,
      placeholder = "Size",
      decimals = 2,
      decimalSeparator = ".",
      disabled = false,
      errors = [],
      invalidInputs = [],
      thousandSeparator = ",",
      preTextOnViewMode = () => "",
      postTextOnViewMode = () => "",
      showThousandSeperator = true,
      autoFeedback = false,
      debounceOnAutoFeedback = 300,
      ...props
    }: FinanceInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const {
      amount = "",
      updateErrors,
      handleChange,
      handleSubtraction,
      handleAddition,
      onEditModeOn,
      onEditModeOff,
      onKeyEvent,
    } = props;

    const editInputRef = useRef<HTMLTextAreaElement | null>(null);

    const debouncedAutoFeedback = useRef(
      debounce(handleChange, debounceOnAutoFeedback)
    ).current;

    const [isInitialised, setIsInitialised] = useState<boolean>(false);
    const [amountAllSelected, setAmountAllSelected] = useState<boolean>(false);
    const [feedback, setFeedback] = useState<string[]>(errors);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const [nonFormattedAmount, setNonFormattedAmount] = useState<string>("");
    const [formattedAmount, setFormattedAmount] = useState<string>("");
    const previousThousandSeparator = usePrevious(thousandSeparator);
    const previousDecimalSeparator = usePrevious(decimalSeparator);

    const [internalTooltipTitle, setInternalTooltipTitle] = useState(
      tooltipTitle || label || ""
    );
    const [showAlwaysTooltip, setShowAlwaysTooltip] = useState(false);

    const [internalFeedbackMessages, setInternalFeedbackMessages] =
      useState<Feedback>(feedbackMessages);

    const theme = useTheme();

    const maxDecimalsReached = (input: string): boolean => {
      return decimals < (input.split(".")[1] ?? "").length;
    };

    const isValidAmount = (input: string): boolean => {
      return /^-?\d*(\.\d*)?$/.test(input);
    };

    const isValidInput = (input: string): boolean => {
      return isValidAmount(input) && !maxDecimalsReached(input);
    };

    const isValidInputKey = (keyboardInput: string): boolean => {
      return (
        !invalidInputs.includes(keyboardInput) &&
        /-|\d|\./.test(keyboardInput) &&
        !(keyboardInput === "." && decimals === 0)
      );
    };

    const formatAmount = (amount: string): string => {
      if (amount) {
        const isNegative = amount[0] === "-";
        const sign = isNegative ? "-" : "";
        amount = isNegative ? amount.slice(1) : amount;
        const [wholePart, decimalPart] = amount.split(".");
        let formattedWholePart = wholePart
          .replaceAll(thousandSeparator, "")
          .split("")
          .reverse()
          .reduce((acc: string[], next, index) => {
            if (index % 3 === 0) {
              acc.push(next);
            } else {
              acc[acc.length - 1] = next + acc[acc.length - 1];
            }

            return acc;
          }, [])
          .reverse()
          .join(thousandSeparator);
        if (!showThousandSeperator) {
          formattedWholePart = formattedWholePart.replaceAll(
            thousandSeparator,
            ""
          );
        }
        const truncatedDecimalPart = (decimalPart ?? "").slice(0, decimals);
        const formattedTruncatedDecimalPart = displayTrailingZeros
          ? truncatedDecimalPart.padEnd(decimals, "0")
          : (() => {
              let copyAllNumbers = false;
              return truncatedDecimalPart
                .split("")
                .reverse()
                .reduce((acc: string[], next) => {
                  if (copyAllNumbers || next !== "0") {
                    copyAllNumbers = true;
                    acc.push(next);
                  }

                  return acc;
                }, [])
                .reverse()
                .join("");
            })();
        const fullDecimalPart =
          formattedTruncatedDecimalPart === ""
            ? ""
            : `${decimalSeparator}${formattedTruncatedDecimalPart}`;

        const result = `${sign}${formattedWholePart}${fullDecimalPart}`;

        return result;
      }

      return "";
    };

    const handlePaste = (event: ClipboardEvent<HTMLTextAreaElement>) => {
      const newAmount = event.clipboardData.getData("text");
      let newErrors: string[] = [];

      if (!isValidAmount(newAmount)) {
        newErrors = feedback.filter(
          (x) => x !== internalFeedbackMessages.invalidNumberMessage
        );
        newErrors.unshift(internalFeedbackMessages.invalidNumberMessage);
      }

      if (maxDecimalsReached(newAmount)) {
        newErrors =
          newErrors.length > 0
            ? newErrors.filter(
                (x) => x !== internalFeedbackMessages.maximumDecimalMessage
              )
            : feedback.filter(
                (x) => x !== internalFeedbackMessages.maximumDecimalMessage
              );
        newErrors.unshift(internalFeedbackMessages.maximumDecimalMessage);
      }

      if (newErrors.length > 0) {
        updateErrors(newErrors);
        event.preventDefault();
        return;
      }

      updateErrors([]);
    };

    const handleNonFormattedAmount = (
      event: ChangeEvent<HTMLTextAreaElement>
    ) => {
      if (autoFeedback) {
        debouncedAutoFeedback.cancel();
        debouncedAutoFeedback(event.target.value);
      }

      if (isValidInput(event.target.value)) {
        setNonFormattedAmount(event.target.value);
        updateErrors(
          feedback.filter(
            (x) =>
              ![
                internalFeedbackMessages.invalidNumberMessage,
                internalFeedbackMessages.maximumDecimalMessage,
              ].includes(x)
          )
        );
      } else {
        event.preventDefault();
      }
    };

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handlePreAndPostText = useCallback(
      (amount: string) => {
        if (amount) {
          const preAndPostText = `${preTextOnViewMode(
            amount
          )}${amount}${postTextOnViewMode(amount)}`;
          setFormattedAmount(preAndPostText);
        } else {
          setFormattedAmount("");
        }
      },
      [postTextOnViewMode, preTextOnViewMode]
    );

    const handleBlur = () => {
      const formattedAmount = formatAmount(nonFormattedAmount);
      setAmountAllSelected(false);
      setIsFocused(false);

      handleChange(
        formattedAmount
          .replaceAll(thousandSeparator, "")
          .replace(decimalSeparator, ".")
      );
      handlePreAndPostText(formattedAmount);
    };

    const validateInputKey = (event: KeyboardEvent<HTMLTextAreaElement>) => {
      onKeyEvent && onKeyEvent(event);

      if (event.ctrlKey || event.altKey || event.shiftKey) {
        return;
      }

      switch (event.key) {
        case "ArrowUp":
        case "ArrowRight":
        case "ArrowDown":
        case "ArrowLeft":
        case "Delete":
        case "Backspace":
        case "Home":
        case "End":
          return;
        case "Esc":
        case "Escape":
          event.preventDefault();
          setAmountAllSelected(false);
          setIsFocused(false);
          return;
        case "Tab":
        case "Enter":
          event.preventDefault();
          handleBlur();
          return;
        default:
          const textToValidate =
            nonFormattedAmount.slice(
              0,
              editInputRef.current?.selectionStart ?? 0
            ) +
            event.key +
            nonFormattedAmount.slice(editInputRef.current?.selectionEnd ?? 0);

          if (
            !isValidInputKey(event.key) ||
            (!amountAllSelected && maxDecimalsReached(textToValidate))
          ) {
            event.preventDefault();
            return;
          }
      }

      setAmountAllSelected(false);
    };

    const handleDoubleClick = () => {
      if (allowCopyToClipboard && nonFormattedAmount) {
        if ("clipboard" in navigator) {
          navigator.clipboard.writeText(nonFormattedAmount);
        } else {
          return document.execCommand("copy", true, nonFormattedAmount);
        }
        setTemporaryFeedback(internalFeedbackMessages.copyToClipboardMessage);
      }
    };

    const setTemporaryFeedback = (
      message: string,
      removeAfter: number = 1500
    ): void => {
      setFeedback([message, ...feedback]);
      setTimeout(
        () => setFeedback(feedback.filter((x) => x !== message)),
        removeAfter
      );
    };

    const generateValidNumber = (): string => {
      return `12345${
        decimals > 0
          ? `.${Array.from(Array(decimals), (x, i) => i + 1).join("")}`
          : ""
      }`;
    };

    useEffect(() => {
      setFeedback(errors);
    }, [errors]);

    useEffect(() => {
      setInternalTooltipTitle(tooltipTitle || label || "");
    }, [tooltipTitle, label]);

    useEffect(() => {
      setShowAlwaysTooltip(!!tooltipTitle && tooltipTitle !== label);
    }, [label, tooltipTitle]);

    useEffect(() => {
      handlePreAndPostText(formattedAmount);
    }, [decimals]);

    useEffect(() => {
      if (isValidInput(amount)) {
        setNonFormattedAmount(amount);
        const formattedAmount = formatAmount(amount);
        handlePreAndPostText(formattedAmount);

        const newErrors = feedback.filter(
          (x) =>
            ![
              internalFeedbackMessages.invalidNumberMessage,
              internalFeedbackMessages.maximumDecimalMessage,
            ].includes(x)
        );
        if (newErrors.length !== feedback.length) {
          updateErrors(newErrors);
        }
      } else {
        updateErrors(
          feedback.filter(
            (x) => x !== internalFeedbackMessages.invalidNumberMessage
          )
        );
      }
    }, [amount]);

    useEffect(() => {
      if (thousandSeparator) {
        handlePreAndPostText(
          formattedAmount.replaceAll(
            previousThousandSeparator,
            thousandSeparator
          )
        );
      }
    }, [thousandSeparator]);

    useEffect(() => {
      if (decimalSeparator) {
        handlePreAndPostText(
          formattedAmount.replaceAll(previousDecimalSeparator, decimalSeparator)
        );
      }
    }, [decimalSeparator]);

    useEffect(() => {
      handlePreAndPostText(formattedAmount);
    }, [displayTrailingZeros]);

    useEffect(() => {
      setInternalFeedbackMessages({ ...feedbackMessages });
    }, [feedbackMessages, decimals]);

    useEffect(() => {
      if (isInitialised) {
        if (isFocused) {
          onEditModeOn && onEditModeOn();
        } else {
          onEditModeOff && onEditModeOff();
        }
      }
    }, [isInitialised, isFocused, onEditModeOn, onEditModeOff]);

    useEffect(() => {
      return () => {
        debouncedAutoFeedback.cancel();
      };
    }, [debouncedAutoFeedback]);

    useEffect(() => {
      if (isValidInput(amount)) {
        if (isFocused) {
          updateErrors([]);
        }
        setNonFormattedAmount(amount);
      }
    }, [isFocused]);

    useEffect(() => {
      setIsInitialised(true);
      if (isValidInput(amount)) {
        setNonFormattedAmount(amount);
        handlePreAndPostText(formatAmount(amount));
      } else {
        handlePreAndPostText(amount);
        setFeedback([internalFeedbackMessages.invalidNumberMessage]);
      }
    }, []);

    return (
      <div
        className={classNames("finance-input-root", theme.palette.mode, {
          disabled,
          "integration-mode": integrationMode,
          "no-decrease": !allowDecrease,
          "no-increase": !allowIncrease,
        })}
        ref={ref}
      >
        <MFormControlLabel
          label={label}
          labelPlacement={labelPlacement}
          tooltipProps={{
            title: internalTooltipTitle,
            showAlways: showAlwaysTooltip,
          }}
          disabled={disabled}
        >
          <>
            <div
              className={classNames("container", {
                "is-focused": isFocused,
                "middle-hovered": isHovered,
                feedback: feedback.length > 0,
              })}
            >
              <MButton
                className="button left"
                color="primary"
                onClick={handleSubtraction}
                label="-"
              />
              <div
                className="middle"
                onClick={handleFocus}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isFocused && (
                  <textarea
                    ref={editInputRef}
                    autoFocus={true}
                    rows={1}
                    className="edit-input-mode"
                    placeholder={placeholder}
                    value={nonFormattedAmount}
                    onBlur={handleBlur}
                    onChange={handleNonFormattedAmount}
                    onDoubleClick={handleDoubleClick}
                    onFocus={(event) => {
                      setAmountAllSelected(true);
                      event.target.select();
                    }}
                    onKeyDown={validateInputKey}
                    onPaste={handlePaste}
                  />
                )}
                {!isFocused && (
                  <textarea
                    className="readonly-input"
                    readOnly
                    rows={1}
                    placeholder={placeholder}
                    value={formattedAmount}
                  />
                )}
              </div>
              <MButton
                className="button right"
                color="primary"
                onClick={handleAddition}
                label="+"
              />
            </div>
            {!integrationMode && feedback.length > 0 && (
              <div className="feedback">
                <ul>
                  {feedback.map((feedback, index) => (
                    <li key={index}>
                      {feedback
                        .replace("{decimals}", decimals.toString())
                        .replace("{validNumber}", generateValidNumber())}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        </MFormControlLabel>
      </div>
    );
  }
);

MFinanceInput.defaultProps = {
  allowDecrease: true,
  allowIncrease: true,
  allowCopyToClipboard: false,
  tooltipTitle: "",
  labelPlacement: "top",
  feedbackMessages: {
    maximumDecimalMessage: "Maximum of {decimals} decimals reached.",
    invalidNumberMessage: "Please enter a valid number. i.e. {validNumber}",
    copyToClipboardMessage: "Number copied to clipboard.",
  },
  integrationMode: false,
  displayTrailingZeros: false,
  placeholder: "Size",
  decimals: 2,
  decimalSeparator: ".",
  disabled: false,
  thousandSeparator: ",",
  errors: [],
  invalidInputs: [],
  preTextOnViewMode: () => "",
  postTextOnViewMode: () => "",
  showThousandSeperator: true,
  autoFeedback: false,
  debounceOnAutoFeedback: 300,
};
