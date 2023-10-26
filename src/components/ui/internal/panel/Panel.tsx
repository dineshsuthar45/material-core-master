import { Box } from "@mui/material";
import "./Panel.scss";
import { PanelProps } from "./Panel.types";

/**
 * Tab component
 */
export const MPanel = ({ children, value, index }: PanelProps) => (
  <div className="panel-root" hidden={value !== index} id={`${index}`}>
    {value === index && <Box>{children}</Box>}
  </div>
);

MPanel.defaultProps = {};
