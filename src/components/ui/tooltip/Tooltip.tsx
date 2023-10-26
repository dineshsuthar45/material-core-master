import MuiTooltip from "@mui/material/Tooltip";
import { useCallback, useEffect, useRef, useState } from "react";
import { TooltipProps } from "./Tooltip.types";

import "./Tooltip.scss";

/**
 * Further properties can be found in MUI website at https://mui.com/material-ui/api/tooltip/
 */
export const MTooltip = ({
  children,
  title,
  arrow = true,
  showAlways = false,
  placement = "bottom",
  ...props
}: TooltipProps) => {
  const tooltipContainerRef = useRef<HTMLDivElement>(null);
  const [tooltipTitle, setTooltipTitle] = useState(title);
  const [showTooltip, setShowtooltip] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [hoverStatus, setHover] = useState(false);

  const checkOverflown = useCallback(() => {
    if (tooltipContainerRef.current) {
      setHasOverflow(
        tooltipContainerRef.current.scrollWidth >
          tooltipContainerRef.current.clientWidth
      );
    }
  }, [
    tooltipContainerRef.current,
    tooltipContainerRef.current?.scrollWidth,
    tooltipContainerRef.current?.clientWidth,
  ]);

  useEffect(() => {
    setShowtooltip(showAlways || hasOverflow);
  }, [showAlways, hasOverflow]);

  useEffect(() => {
    if (showTooltip) {
      setTooltipTitle(title);
    } else {
      setTooltipTitle("");
    }
  }, [showTooltip, title]);

  return (
    <MuiTooltip
      title={tooltipTitle}
      open={hoverStatus && (hasOverflow || showAlways)}
      arrow={arrow}
      placement={placement}
      {...props}
      className={`m-tooltip-root ${props.className ?? ""}`.trim()}
      onMouseEnter={(e) => {
        setHover(true);
        checkOverflown();
        if (props.onMouseEnter) {
          props.onMouseEnter(e);
        }
      }}
      onMouseLeave={(e) => {
        setHover(false);
        if (props.onMouseLeave) {
          props.onMouseLeave(e);
        }
      }}
    >
      <div ref={tooltipContainerRef} className="tooltip-container">
        {children}
      </div>
    </MuiTooltip>
  );
};

MTooltip.defaultProps = {
  arrow: true,
  placement: "bottom",
  showAlways: false,
};
