import MuiSlider from "@mui/material/Slider";
import { useTheme } from "@mui/material/styles";
import { SliderProps } from "./Slider.types";

/**
 * Further properties can be found in MUI website at https://mui.com/material-ui/api/slider/
 */
export const MSlider = ({
  color = "secondary",
  orientation = "horizontal",
  size = "medium",
  disabled = false,
  track = "normal",
  ...props
}: SliderProps) => {
  const theme = useTheme();

  return (
    <MuiSlider
      className={`slider-root ${theme.palette.mode}`}
      color={color}
      orientation={orientation}
      size={size}
      disabled={disabled}
      track={track}
      {...props}
    />
  );
};

MSlider.defaultProps = {
  color: "secondary",
  orientation: "horizontal",
  size: "medium",
  disabled: false,
  track: "normal",
};
