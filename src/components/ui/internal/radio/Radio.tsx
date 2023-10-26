import { Radio } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { MFormControlLabel } from "../formControlLabel";
import "./Radio.scss";
import { RadioProps } from "./Radio.types";

/**
 * Further properties can be found in MUI website at https://mui.com/material-ui/api/radio/
 */
export const MRadio = ({
  checked = false,
  color = "secondary",
  disabled = false,
  disableRipple = false,
  id = uuidv4(),
  name = uuidv4(),
  labelPlacement = "end",
  required = false,
  size = "medium",
  value,
  ...props
}: RadioProps) => {
  const { label, onChange } = props;

  const computedValue = value && value.trim() !== "" ? value : label;

  return (
    <div
      className="m-radio-root"
      onClick={() => {
        if (!disabled && onChange) {
          onChange(true);
        }
      }}
    >
      <MFormControlLabel
        labelPlacement={labelPlacement}
        label={label}
        disabled={disabled}
        tooltipProps={{
          title: label,
        }}
      >
        <Radio
          id={id}
          color={color}
          checked={checked}
          disabled={disabled}
          disableRipple={disableRipple}
          name={name}
          required={required}
          size={size}
          value={computedValue}
          {...props}
          onChange={() => {}}
        />
      </MFormControlLabel>
    </div>
  );
};

MRadio.defaultProps = {
  checked: false,
  color: "secondary",
  disabled: false,
  disableRipple: false,
  id: uuidv4(),
  name: uuidv4(),
  labelPlacement: "end",
  required: false,
  size: "medium",
};
