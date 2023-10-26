import { useTheme } from "@mui/material";
import classNames from "classnames";
import { format } from "date-fns";
import * as Locales from "date-fns/locale";
import { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useClickOutsideMultipleRefs } from "../../../hooks/";
import { MColours } from "../../../theme/colours";
import { MIconAngleDown, MIconAngleUp } from "../icons";
import { MFormControlLabel } from "../internal/formControlLabel";
import { MTooltip } from "../tooltip";
import "./DateRange.dark.scss";
import "./DateRange.light.scss";
import "./DateRange.scss";
import { DateRangeProps } from "./DateRange.types";

/**
 * Further properties can be found in react-date-range website at https://hypeserver.github.io/react-date-range/
 */
export const MDateRange = ({
  label,
  tooltipTitle = "",
  disabled = false,
  locale = "enGB",
  placeholder = "Select",
  range,
  onMenuChange,
  ...props
}: DateRangeProps) => {
  const theme = useTheme();
  const selectedRef = useRef<HTMLDivElement | null>(null);
  const dateFormat = "dd MMM yyyy";

  const [internalTooltipTitle, setInternalTooltipTitle] = useState(
    tooltipTitle || label || ""
  );
  const [showAlwaysTooltip, setShowAlwaysTooltip] = useState(false);
  const [initializationDone, setInitializationDone] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [color, setColor] = useState(
    theme.palette.mode === "light" ? MColours.blue : MColours.lightBlue
  );

  const calendarRef = useClickOutsideMultipleRefs<HTMLDivElement>(
    [selectedRef],
    () => setIsMenuOpen(false)
  );

  // todo it does work on second attempt
  // useEffect(() => {
  //   setRef(selectedRef.current);
  // }, [selectedRef.current]);

  // const [setRef, size] = useElementSize();

  // useEffect(() => {
  //   if (calendarRef.current) {
  //     (
  //       calendarRef.current.firstChild as HTMLDivElement
  //     ).style.width = `${size.width}px`;
  //   }
  // }, [calendarRef.current, size]);

  useEffect(() => {
    setInternalTooltipTitle(tooltipTitle || label || "");
  }, [tooltipTitle, label]);

  useEffect(() => {
    setShowAlwaysTooltip(!!tooltipTitle && tooltipTitle !== label);
  }, [label, tooltipTitle]);

  useEffect(() => {
    setInitializationDone(true);
  }, []);

  useEffect(() => {
    setColor(
      theme.palette.mode === "light" ? MColours.blue : MColours.lightBlue
    );
  }, [theme.palette.mode]);

  useEffect(() => {
    if (initializationDone) {
      const startDateFormatted = format(
        range.startDate ?? new Date(),
        dateFormat
      );
      const endDateFormatted = format(range.endDate ?? new Date(), dateFormat);

      setSelectedDate(`${startDateFormatted} - ${endDateFormatted}`);
    }
  }, [range.startDate, range.endDate, initializationDone]);

  useEffect(() => {
    onMenuChange && onMenuChange(isMenuOpen);
  }, [isMenuOpen, onMenuChange]);

  const handleSelectedClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={classNames("date-range-root", theme.palette.mode)}>
      <MFormControlLabel
        label={label}
        tooltipProps={{
          title: internalTooltipTitle,
          showAlways: showAlwaysTooltip,
        }}
        disabled={disabled}
      >
        <>
          <div
            className={classNames("selected", {
              "menu-open": isMenuOpen,
              disabled,
            })}
            ref={selectedRef}
            onClick={handleSelectedClick}
          >
            <MTooltip title={selectedDate}>
              <span className="selected-date">
                {!selectedDate && (
                  <span className={classNames("placeholder", { disabled })}>
                    {placeholder}
                  </span>
                )}
                {selectedDate}
              </span>
            </MTooltip>
            <div className={classNames("chevron", { disabled })}>
              {!isMenuOpen && <MIconAngleDown />}
              {isMenuOpen && <MIconAngleUp />}
            </div>
          </div>

          <div ref={calendarRef} className="calendar-menu">
            {isMenuOpen && (
              <DateRangePicker
                color={color}
                rangeColors={[color]}
                ranges={[range]}
                locale={Locales[locale]}
                inputRanges={[]}
                months={2}
                direction="horizontal"
                {...props}
                onChange={props.onChange}
              />
            )}
          </div>
        </>
      </MFormControlLabel>
    </div>
  );
};

MDateRange.defaultProps = {
  tooltipTitle: "",
  disabled: false,
  locale: "enGB",
  placeholder: "Select",
};
