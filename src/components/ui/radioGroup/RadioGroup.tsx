import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";
import { MFormControlLabel } from "../internal/formControlLabel";
import { MRadio } from "../internal/radio";
import "./RadioGroup.scss";
import { Options, RadioGroupProps } from "./RadioGroup.types";

/**
 * Further properties can be found in MUI website at https://mui.com/material-ui/api/radio-group/
 */
export const MRadioGroup = <T extends Options>({
  color = "secondary",
  disabled = false,
  disableRipple = false,
  label,
  name = uuidv4(),
  row = false,
  size = "medium",
  value,
  ...props
}: RadioGroupProps<T>) => {
  const radioOptions = props.options.map((option, index) => (
    <MRadio
      {...option}
      name={name}
      disabled={disabled}
      disableRipple={disableRipple}
      checked={option.value === value}
      color={color}
      size={size}
      key={index}
      onChange={() => {
        props.onChange(option);
      }}
    ></MRadio>
  ));

  return (
    <div className={classNames("radio-group-root", { row })}>
      <MFormControlLabel
        labelPlacement="top"
        label={label}
        disabled={disabled}
        tooltipProps={{
          title: label,
        }}
      >
        <>{radioOptions}</>
      </MFormControlLabel>
    </div>
  );
};

MRadioGroup.defaultProps = {
  color: "secondary",
  disabled: false,
  disableRipple: false,
  name: uuidv4(),
  row: false,
  size: "medium",
};
