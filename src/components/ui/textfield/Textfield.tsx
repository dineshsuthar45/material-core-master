import { IconButton, InputAdornment, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import classNames from "classnames";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MIconEye, MIconEyeClosed, MIconEyeClosedO, MIconEyeO } from "../icons";
import "./Textfield.scss";
import { TextfieldProps } from "./Textfield.types";

/**
 * Further properties can be found in MUI website at https://mui.com/material-ui/api/text-field/
 */
export const MTextfield = ({
  autoFocus = false,
  color = "primary",
  disabled = false,
  error = false,
  fullWidth = false,
  id = uuidv4(),
  margin = "none",
  required = false,
  size = "medium",
  type = "text",
  variant = "outlined",
  startAdornment,
  endAdornment,
  ...props
}: TextfieldProps) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const openEyeIcon =
    theme.palette.mode === "light" ? <MIconEye /> : <MIconEyeO />;
  const closedEyeIcon =
    theme.palette.mode === "light" ? <MIconEyeClosed /> : <MIconEyeClosedO />;

  const endAdornmentComponent =
    endAdornment ??
    (type === "password" && (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {showPassword ? openEyeIcon : closedEyeIcon}
        </IconButton>
      </InputAdornment>
    ));

  return (
    <TextField
      className={classNames("textfield-root", theme.palette.mode)}
      autoFocus={autoFocus}
      color={color}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      id={id}
      margin={margin}
      required={required}
      size={size}
      type={type === "password" && showPassword ? "text" : type}
      variant={variant}
      InputProps={{
        startAdornment: startAdornment,
        endAdornment: endAdornmentComponent,
      }}
      {...props}
    />
  );
};

MTextfield.defaultProps = {
  autoFocus: false,
  color: "primary",
  disabled: false,
  error: false,
  fullWidth: false,
  id: uuidv4(),
  margin: "none",
  required: false,
  size: "medium",
  type: "text",
  variant: "outlined",
};
