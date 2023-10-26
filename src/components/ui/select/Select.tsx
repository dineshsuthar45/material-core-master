import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  useTheme,
} from "@mui/material";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";
import { MIconAngleDown } from "../icons";
import "./Select.scss";
import { SelectProps } from "./Select.types";

/**
 * Further properties can be found in MUI website at https://mui.com/material-ui/api/select/
 */
export const MSelect = <T extends { label: string; value: string }>({
  autoWidth = false,
  defaultOpen = false,
  disabled = false,
  displayEmpty = false,
  error = false,
  IconComponent = MIconAngleDown,
  id = uuidv4(),
  size = "small",
  variant = "standard",
  ...props
}: SelectProps<T>) => {
  const theme = useTheme();
  const { feedback, label, options, onChange } = props;

  const selectOptions = options.map((option, index) => (
    <MenuItem value={option.value} key={index}>
      {option.label}
    </MenuItem>
  ));

  const selectedValue = props.value !== undefined ? props.value.value : "";
  const labelId = `${id}-label`;

  return (
    <FormControl
      className={classNames("select-root", theme.palette.mode, {
        disabled,
        error: error,
      })}
      error={error}
      size={size}
      variant={variant}
    >
      <InputLabel id={labelId}>{label}</InputLabel>
      <MuiSelect
        {...props}
        label={label}
        labelId={labelId}
        id={id}
        value={selectedValue as "" | T | undefined}
        IconComponent={IconComponent}
        onChange={(event) =>
          onChange(
            options.find((x) => x.value === event.target.value) ?? ({} as T)
          )
        }
      >
        {selectOptions}
      </MuiSelect>
      <FormHelperText>{feedback}</FormHelperText>
    </FormControl>
  );
};

MSelect.defaultProps = {
  autoWidth: false,
  defaultOpen: false,
  disabled: false,
  displayEmpty: false,
  error: false,
  IconComponent: MIconAngleDown,
  id: uuidv4(),
  size: "small",
  variant: "standard",
};
