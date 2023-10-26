import { useTheme } from "@mui/material";
import MuiSwitch from "@mui/material/Switch";
import classNames from "classnames";
import { ChangeEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MFormControlLabel } from "../internal/formControlLabel";
import "./Switch.scss";
import { SwitchProps } from "./Switch.types";

/**
 * Further properties can be found in MUI website at https://mui.com/material-ui/api/switch/
 */
export const MSwitch = ({
  label,
  labelPlacement = "end",
  tooltipTitle = "",
  checked = false,
  color = "secondary",
  disabled = false,
  disableRipple = false,
  edge = false,
  id = uuidv4(),
  required = false,
  size = "medium",
  ...props
}: SwitchProps) => {
  const theme = useTheme();
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
      className={classNames("switch-root", theme.palette.mode)}
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
        <MuiSwitch
          id={id}
          checked={checked}
          color={color}
          disabled={disabled}
          size={size}
          {...props}
          onChange={() => {}}
        />
      </MFormControlLabel>
    </div>
  );
};

MSwitch.defaultProps = {
  labelPlacement: "end",
  tooltipTitle: "",
  checked: false,
  color: "secondary",
  disabled: false,
  disableRipple: false,
  edge: false,
  id: uuidv4(),
  required: false,
  size: "medium",
};
