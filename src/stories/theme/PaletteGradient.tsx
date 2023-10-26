import { Box, Grid, useTheme } from "@mui/material";
import { MGradientColours, MGradients } from "../../theme/gradients";
import { useEffect, useState } from "react";

interface PaletteGradientProps {
  /**
   * Text
   */
  text: string;
}

/**
 * Primary UI component for user interaction
 */
export const PaletteGradient = ({ text }: PaletteGradientProps) => {
  const theme = useTheme();
  const [buyBackgroundColor, setBuyBackgroundColor] = useState(
    theme.palette.mode === "light" ? MGradients.buyLight : MGradients.buyDark
  );
  const [buyColor, setBuyColor] = useState(
    theme.palette.mode === "light"
      ? MGradientColours.buyLight.contrastText
      : MGradientColours.buyDark.contrastText
  );
  const [backgroundColor, setBackgroundColor] = useState(
    theme.palette.mode === "light"
      ? MGradients.inactiveLight
      : MGradients.inactiveDark
  );
  const [color, setColor] = useState(
    theme.palette.mode === "light"
      ? MGradientColours.inactiveLight.contrastText
      : MGradientColours.inactiveDark.contrastText
  );

  useEffect(() => {
    setBuyBackgroundColor(
      theme.palette.mode === "light" ? MGradients.buyLight : MGradients.buyDark
    );
    setBuyColor(
      theme.palette.mode === "light"
        ? MGradientColours.buyLight.contrastText
        : MGradientColours.buyDark.contrastText
    );
    setBackgroundColor(
      theme.palette.mode === "light"
        ? MGradients.inactiveLight
        : MGradients.inactiveDark
    );
    setColor(
      theme.palette.mode === "light"
        ? MGradientColours.inactiveLight.contrastText
        : MGradientColours.inactiveDark.contrastText
    );
  }, [theme.palette.mode]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={3}>
        <div>
          <Box
            sx={{
              color: MGradientColours.brand.contrastText,
              background: MGradients.brand,
              p: 2,
            }}
          >
            {text}
          </Box>
          <h3>Brand</h3>
        </div>
      </Grid>
      <Grid item xs={12} sm={3}>
        <div>
          <Box
            sx={{
              color: MGradientColours.lightBlue.contrastText,
              background: MGradients.lightBlue,
              p: 2,
            }}
          >
            {text}
          </Box>
          <h3>Light Blue</h3>
        </div>
      </Grid>
      <Grid item xs={12} sm={3}>
        <div>
          <Box
            sx={{
              color: MGradientColours.blue.contrastText,
              background: MGradients.blue,
              p: 2,
            }}
          >
            {text}
          </Box>
          <h3>Blue</h3>
        </div>
      </Grid>
      <Grid item xs={12} sm={3}>
        <div>
          <Box
            sx={{
              color: MGradientColours.pending.contrastText,
              background: MGradients.pending,
              p: 2,
            }}
          >
            {text}
          </Box>
          <h3>Pending</h3>
        </div>
      </Grid>
      <Grid item xs={12} sm={3}>
        <div>
          <Box
            sx={{
              color: buyColor,
              background: buyBackgroundColor,
              p: 2,
            }}
          >
            {text}
          </Box>
          <h3>Buy</h3>
        </div>
      </Grid>
      <Grid item xs={12} sm={3}>
        <div>
          <Box
            sx={{
              color: MGradientColours.sell.contrastText,
              background: MGradients.sell,
              p: 2,
            }}
          >
            {text}
          </Box>
          <h3>Sell</h3>
        </div>
      </Grid>
      <Grid item xs={12} sm={3}>
        <div>
          <Box
            sx={{
              color: MGradientColours.engaged.contrastText,
              background: MGradients.engaged,
              p: 2,
            }}
          >
            {text}
          </Box>
          <h3>Engaged</h3>
        </div>
      </Grid>
      <Grid item xs={12} sm={3}>
        <div>
          <Box
            sx={{
              color: color,
              background: backgroundColor,
              p: 2,
            }}
          >
            {text}
          </Box>
          <h3>Inactive</h3>
        </div>
      </Grid>
    </Grid>
  );
};
