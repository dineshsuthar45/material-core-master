import { useTheme } from "@mui/material";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { MTooltip } from "../../tooltip";
import "./FormControlLabel.scss";
import { FormControlLabelProps } from "./FormControlLabel.types";

/**
 * Further properties can be found in MUI website at https://mui.com/material-ui/api/form-label/
 */
export const MFormControlLabel = ({
  children,
  tooltipProps,
  label = "",
  labelPlacement = "top",
  disabled = false,
}: FormControlLabelProps) => {
  const theme = useTheme();
  const [tooltipPlacement, setTooltipPlacement] = useState(
    tooltipProps.placement ?? "top"
  );

  useEffect(() => {
    setTooltipPlacement(tooltipProps.placement ?? "top");
  }, [tooltipProps.placement]);

  return (
    <div
      className={classNames("m-form-control-label", labelPlacement, {
        disabled,
        dark: theme.palette.mode === "dark",
      })}
    >
      <MTooltip
        className={classNames("tooltip-label")}
        placement={tooltipPlacement}
        {...tooltipProps}
      >
        <label>{label}</label>
      </MTooltip>
      <div className="label-children">{children}</div>
    </div>
  );
};

MFormControlLabel.defaultProps = {
  label: "",
  labelPlacement: "top",
  disabled: false,
};
