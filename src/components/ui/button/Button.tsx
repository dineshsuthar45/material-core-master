import MuiButton from "@mui/material/Button";
import { ButtonProps } from "./Button.types";
import classNames from "classnames";
import { useTheme } from "@mui/material";

/**
 * Further properties can be found in MUI website at https://mui.com/material-ui/api/button/
 */
export const MButton = ({
  label,
  color = "secondary",
  disabled = false,
  disableElevation = false,
  disableFocusRipple = false,
  disableRipple = false,
  fullWidth = false,
  href = "",
  size = "medium",
  variant = "outlined",
  className,
  ...props
}: ButtonProps) => {
  const theme = useTheme();

  return (
    <MuiButton
      className={classNames("button-root", theme.palette.mode, className)}
      type="button"
      color={color}
      disabled={disabled}
      disableElevation={disableElevation}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      fullWidth={fullWidth}
      href={href}
      size={size}
      variant={variant}
      {...props}
    >
      {label}
    </MuiButton>
  );
};

MButton.defaultProps = {
  color: "secondary",
  disabled: false,
  disableElevation: false,
  disableFocusRipple: false,
  disableRipple: false,
  fullWidth: false,
  href: "",
  size: "medium",
  variant: "outlined",
};
