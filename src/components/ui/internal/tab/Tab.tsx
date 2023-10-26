import { styled, useTheme } from "@mui/material";
import MuiTab from "@mui/material/Tab";
import classNames from "classnames";
import "./Tab.scss";
import { TabProps } from "./Tab.types";

const StyledTab = styled(MuiTab)<TabProps>((prop) => ({
  "&:hover:not(.Mui-selected)": {
    color: prop.theme.palette[prop.color ?? "primary"].main,
  },
}));

/**
 * Further properties can be found in MUI website at https://mui.com/material-ui/api/tab/
 */
export const MTab = ({
  color = "primary",
  disabled = false,
  disableFocusRipple = false,
  disableRipple = false,
  iconPosition = "top",
  wrapped = false,
  ...props
}: TabProps) => {
  const theme = useTheme();

  return (
    <StyledTab
      className={classNames("tab-root", theme.palette.mode)}
      color={color}
      disabled={disabled}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      iconPosition={iconPosition}
      wrapped={wrapped}
      {...props}
    />
  );
};

MTab.defaultProps = {
  color: "primary",
  disabled: false,
  disableFocusRipple: false,
  disableRipple: false,
  iconPosition: "top",
  wrapped: false,
};
