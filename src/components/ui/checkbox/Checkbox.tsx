import MuiCheckbox from "@mui/material/Checkbox";
import { ChangeEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MFormControlLabel } from "../internal/formControlLabel";
import { CheckboxProps } from "./Checkbox.types";

/**
 * Further properties can be found in MUI website at https://mui.com/material-ui/api/checkbox/
 */
export const MCheckbox = ({
  label,
  labelPlacement = "end",
  tooltipTitle = "",
  checked = false,
  className = "",
  color = "secondary",
  disabled = false,
  disableRipple = false,
  id = uuidv4(),
  indeterminate = false,
  required = false,
  size = "small",
  ...props
}: CheckboxProps) => {
  const [internalTooltipTitle, setInternalTooltipTitle] = useState(
    tooltipTitle || label || ""
  );
  const [showAlwaysTooltip, setShowAlwaysTooltip] = useState(false);

  useEffect(() => {
    setInternalTooltipTitle(tooltipTitle || label || "");
  }, [tooltipTitle, label]);

  useEffect(() => {
    setShowAlwaysTooltip(!!tooltipTitle && tooltipTitle !== label);
  }, [label, tooltipTitle]);

  const handleClick = (event: unknown) => {
    if (!disabled && props.onChange) {
      props.onChange(event as ChangeEvent<HTMLInputElement>, !checked);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={Array.isArray(className) ? className.join(" ") : className}
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
        <MuiCheckbox
          id={id}
          checked={checked}
          color={color}
          disabled={disabled}
          disableRipple={disableRipple}
          indeterminate={indeterminate}
          required={required}
          size={size}
          {...props}
          onChange={() => {}}
        />
      </MFormControlLabel>
    </div>
  );
};

MCheckbox.defaultProps = {
  labelPlacement: "end",
  tooltipTitle: "",
  checked: false,
  className: "",
  color: "secondary",
  disabled: false,
  disableRipple: false,
  id: uuidv4(),
};
