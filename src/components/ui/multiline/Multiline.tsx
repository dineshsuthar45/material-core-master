import { useTheme } from "@mui/material";
import MuiTextField from "@mui/material/TextField";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";
import { MultilineProps } from "./Multiline.types";

/**
 * Further properties can be found in MUI website at https://mui.com/material-ui/react-text-field/#multiline
 */
export const MMultiline = ({
  autoFocus = false,
  color = "primary",
  disabled = false,
  error = false,
  fullWidth = false,
  id = uuidv4(),
  margin = "none",
  required = false,
  size = "medium",
  variant = "outlined",
  ...props
}: MultilineProps) => {
  const theme = useTheme();

  return (
    <MuiTextField
      className={classNames("multiline-root", theme.palette.mode)}
      multiline
      autoFocus={autoFocus}
      color={color}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      id={id}
      margin={margin}
      required={required}
      size={size}
      variant={variant}
      {...props}
    />
  );
};

MMultiline.defaultProps = {
  color: "primary",
  autoFocus: false,
  disabled: false,
  error: false,
  fullWidth: false,
  id: uuidv4(),
  margin: "none",
  required: false,
  size: "medium",
  variant: "outlined",
};
