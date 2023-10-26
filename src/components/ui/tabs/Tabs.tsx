import { Box, Tabs as MuiTabs, useTheme } from "@mui/material";
import classNames from "classnames";
import SwipeableViews from "react-swipeable-views";
import { MPanel } from "../internal/panel";
import { MTab } from "../internal/tab";
import "./Tabs.scss";
import { TabsProps } from "./Tabs.types";

/**
 * Tabs component
 */
export const MTabs = ({
  centered = false,
  color = "primary",
  disabled = false,
  orientation = "horizontal",
  scrollButtons = "auto",
  selectionFollowsFocus = false,
  size = "medium",
  variant = "standard",
  visibleScrollbar = false,
  verticalFlip = false,
  maxHeight,
  ...props
}: TabsProps) => {
  const theme = useTheme();
  const { options, value, onChange } = props;

  const tabOptions = options.map((option, index) => {
    return (
      <MTab key={index} {...option} color={color} disabled={disabled}></MTab>
    );
  });

  const tabPanels = options.map((option, index) => {
    return (
      <MPanel value={value} index={index} key={index}>
        {option.view}
      </MPanel>
    );
  });

  return (
    <Box
      className={classNames("tabs-root", theme.palette.mode, {
        vertical: orientation === "vertical",
        flip: orientation === "vertical" && verticalFlip,
      })}
      sx={{ height: maxHeight }}
    >
      <MuiTabs
        className={classNames(size)}
        disabled={disabled}
        variant={variant}
        centered={centered}
        indicatorColor={color}
        orientation={orientation}
        textColor={color}
        value={value}
        {...props}
        onChange={(event, value) => onChange(Number(value))}
      >
        {tabOptions}
      </MuiTabs>
      <SwipeableViews index={value}>{tabPanels}</SwipeableViews>
    </Box>
  );
};

MTabs.defaultProps = {
  centered: false,
  color: "primary",
  disabled: false,
  orientation: "horizontal",
  scrollButtons: "auto",
  selectionFollowsFocus: false,
  size: "medium",
  variant: "standard",
  visibleScrollbar: false,
  verticalFlip: false,
};
