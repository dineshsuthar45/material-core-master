import { useTheme } from "@mui/material";
import classNames from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";
import { useClickOutsideMultipleRefs } from "../../../hooks";
import { MCheckbox } from "../checkbox/Checkbox";
import { MIconAngleDown, MIconAngleUp } from "../icons";
import { MFormControlLabel } from "../internal/formControlLabel";
import { MSearch } from "../search/Search";
import { MTooltip } from "../tooltip/Tooltip";
import "./Multiselect.scss";
import { MultiselectProps } from "./Multiselect.types";
import "./MultiselectDark.scss";
import "./MultiselectLight.scss";

/**
 * Multiselect component
 */
export const MMultiselect = <
  T extends { label: string; value: string; checked?: boolean }
>({
  debounceOnSearch = 250,
  disabled = false,
  label,
  labelPlacement = "top",
  optionsNotSupplied = "No options supplied.",
  placeholder = "Select",
  selectAll = false,
  checkboxSize = "small",
  visibleItems = 10,
  ...props
}: MultiselectProps<T>) => {
  const theme = useTheme();

  const optionsRef = useRef<HTMLDivElement>(null);
  const selectedTextRef = useRef<HTMLDivElement>(null);
  const MSearchRef = useRef<HTMLDivElement>(null);
  const [initializationDone, setInitializationDone] = useState(false);
  const [isSelectAllIndeterminate, setSelectAllIndeterminate] = useState(false);
  const [isSelectAll, setIsSelectAll] = useState(selectAll);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedText, setSelectedText] = useState("");
  const [options, setOptions] = useState<T[]>(props.options);
  const [displayOptions, setDisplayOptions] = useState<JSX.Element[]>([<></>]);
  const [themeMode, setThemeMode] = useState<"light" | "dark">(
    theme?.palette?.mode ?? "light"
  );

  useEffect(() => {
    setThemeMode(theme.palette.mode);
  }, [theme.palette.mode]);

  const doesItFit = (newTextContent: string): boolean => {
    if (
      selectedTextRef &&
      selectedTextRef.current &&
      selectedTextRef.current.parentElement
    ) {
      const selectCloned = selectedTextRef.current.cloneNode(true);

      if (selectCloned.firstChild && selectCloned.firstChild.firstChild) {
        (selectCloned as HTMLElement).style.visibility = "hidden";
        selectCloned.firstChild.firstChild.textContent = newTextContent;
        selectedTextRef.current.parentElement.appendChild(selectCloned);
        const scrollingActive = isHorizontalScrollingActive(
          selectCloned.firstChild as HTMLElement
        );
        selectedTextRef.current.parentElement.removeChild(selectCloned);
        return !scrollingActive;
      }
    }

    return false;
  };

  const isHorizontalScrollingActive = (e: HTMLElement): boolean => {
    return e.offsetWidth < e.scrollWidth;
  };

  const selectedOptions = useMemo(
    (): T[] => options.filter((option: T) => option.checked),
    [options]
  );

  const myElRef = useClickOutsideMultipleRefs<HTMLDivElement>(
    [MSearchRef],
    () => setIsMenuOpen(false)
  );

  const setAndSortOptions = (options: T[]): void => {
    if (options.find((option: T) => option.checked)) {
      setSelectAllIndeterminate(true);
    }

    setOptions(
      options
        .sort((a: T, b: T) => a.label.localeCompare(b.label))
        .sort((a: T, b: T) =>
          !(a.checked !== b.checked) ? 0 : a.checked ? -1 : 1
        )
    );
  };

  useEffect(() => {
    const allChecked = [...options]
      .sort((a: T, b: T) => a.label.localeCompare(b.label))
      .map((option) => ({ checked: false, ...option }));

    if (isSelectAll) {
      allChecked.forEach((option) => {
        option.checked = true;
      });
    }

    setAndSortOptions(allChecked);

    setInitializationDone(true);
  }, []);

  useEffect(() => {
    handleFilterOptions(searchText);

    if (props.onChange) {
      props.onChange(options);
    }
  }, [options]);

  useEffect(() => {
    setAndSortOptions(props.options);
  }, [props.options]);

  useEffect(() => {
    if (isMenuOpen && props.onOpen) {
      props.onOpen();
      MSearchRef.current!.getElementsByTagName("input")[0].focus();
    } else if (!isMenuOpen && props.onClose) {
      props.onClose();
      setSearchText("");
      handleFilterOptions("");
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (selectedOptions.length === options.length) {
      setSelectedText("All");
      setIsSelectAll(true);
      setSelectAllIndeterminate(false);
    } else if (selectedOptions.length === 0) {
      setIsSelectAll(false);
      setSelectedText("");
      setSelectAllIndeterminate(false);
    } else {
      const content = selectedOptions
        .map((option: T) => option.label)
        .join(", ")
        .trimEnd();

      if (doesItFit(content)) {
        setSelectedText(content);
      } else {
        setSelectedText(`(${selectedOptions.length}) ${content}`);
      }
    }
  }, [selectedOptions]);

  useEffect(() => {
    if (initializationDone) {
      handleSelectAllChange(selectAll);
    }
  }, [selectAll]);

  const handleOptionSelectedChange = (option: T) => {
    const newSelectedOptions = [...options];
    const optionIndexFound = newSelectedOptions.findIndex(
      (x: T) => x.value === option.value
    );
    const newCheckedStatus = !newSelectedOptions[optionIndexFound].checked;
    newSelectedOptions[optionIndexFound].checked = newCheckedStatus;

    setAndSortOptions(newSelectedOptions);
  };

  const handleSelectAllChange = (newValue: boolean) => {
    setIsSelectAll(newValue);
    let allChecked = options.map((option) => ({ ...option, checked: false }));
    if (newValue) {
      allChecked = options.map((option) => ({ ...option, checked: true }));
    }

    setAndSortOptions(allChecked);
  };

  const handleSelectedClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getOptionHeight = (): number => {
    const allOptions =
      optionsRef.current?.getElementsByClassName("option") ?? null;
    return allOptions && allOptions.length > 0
      ? allOptions[0].clientHeight
      : 20;
  };

  const handleFilterOptions = (searchBy: string) => {
    const filteredOptions = [...options]
      .filter((option) =>
        option.label.toLowerCase().includes(searchBy.toLowerCase())
      )
      .map((option: T, index: number) => {
        return (
          // todo Add disableInteractive to tooltip props
          <MCheckbox
            key={index}
            id={`option-${index}`}
            checked={option.checked}
            label={option.label}
            labelPlacement="end"
            size={checkboxSize}
            className="option"
            onChange={() => handleOptionSelectedChange(option)}
          />
        );
      });
    setDisplayOptions(filteredOptions);
  };

  useEffect(() => {
    if (!props.onSearch) {
      handleFilterOptions(searchText);
    }
  }, [searchText, options]);

  useEffect(() => {
    if (isMenuOpen && optionsRef.current) {
      if (
        visibleItems * getOptionHeight() <
        (options.length + 2) * getOptionHeight()
      ) {
        optionsRef.current.classList.add("scroll");
        optionsRef.current.style.height = `${
          visibleItems * getOptionHeight()
        }px`;
      } else {
        optionsRef.current.classList.remove("scroll");
        optionsRef.current.style.height = "";
      }
    }
  }, [visibleItems, options, isMenuOpen]);

  const noOptions = (
    <div className="option no-options">{optionsNotSupplied}</div>
  );

  /* todo scrollbar component */
  const menuOptions = isMenuOpen && (
    <div
      ref={optionsRef}
      className="options"
      onScroll={(e) => props.onScroll && props.onScroll(e)}
    >
      {options.length <= 0 && noOptions}
      <div className={classNames("toolbar", { hide: options.length <= 0 })}>
        <div className="search">
          <MSearch
            ref={MSearchRef}
            debounceOnSearch={debounceOnSearch}
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onReset={() => setSearchText("")}
            onSearch={(searchBy) => {
              if (props.onSearch) {
                props.onSearch(searchBy);
              }
            }}
          />
        </div>
        <MCheckbox
          id="select-all"
          checked={isSelectAll}
          indeterminate={isSelectAllIndeterminate}
          label="All"
          labelPlacement="end"
          size={checkboxSize}
          className="option option-all"
          onChange={() => handleSelectAllChange(!isSelectAll)}
        />
      </div>
      {displayOptions}
    </div>
  );

  const select = (
    <div className="m-select">
      <div
        ref={selectedTextRef}
        className={classNames("selected", {
          "menu-open": isMenuOpen,
          disabled,
        })}
        onClick={handleSelectedClick}
      >
        <MTooltip title={selectedText}>
          <span className="selected-text">
            {selectedOptions.length === 0 && (
              <span className={classNames("placeholder", { disabled })}>
                {placeholder}
              </span>
            )}
            {selectedOptions.length > 0 && selectedText}
          </span>
        </MTooltip>
        <div className={classNames("chevron", { disabled })}>
          <MIconAngleDown className={classNames({ hide: isMenuOpen })} />
          <MIconAngleUp className={classNames({ hide: !isMenuOpen })} />
        </div>
      </div>
      {menuOptions}
    </div>
  );

  return (
    <div
      ref={myElRef}
      className={classNames("multiselect-root", `m-theme-${themeMode}`, {
        disabled,
      })}
    >
      <MFormControlLabel
        label={label}
        labelPlacement={labelPlacement}
        tooltipProps={{
          title: "internalTooltipTitle",
          showAlways: false,
        }}
        disabled={disabled}
      >
        {select}
      </MFormControlLabel>
    </div>
  );
};

MMultiselect.defaultProps = {
  debounceOnSearch: 250,
  disabled: false,
  labelPlacement: "top",
  optionsNotSupplied: "No options supplied.",
  placeholder: "Select",
  selectAll: false,
  checkboxSize: "small",
  visibleItems: 10,
};
