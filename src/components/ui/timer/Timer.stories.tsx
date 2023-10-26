import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { MTimer } from "./Timer";
import { Box, Grid } from "@mui/material";
import { TimerBreakpoint } from "./Timer.types";
import { MColours } from "../../../theme";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Timer",
  component: MTimer,
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    expiryTime: {
      type: {
        name: "number",
      },
    },
    size: {
      type: {
        name: "number",
      },
    },
    breakpoints: {
      control: {
        type: "object",
      },
      description: "Specifies the color breakpoints of the timer.",
    },
  },
} as Meta<typeof MTimer>;

const getExpiryTime = (minutes: number) => {
  return new Date().getTime() + minutes * 60 * 1000;
};

export const Default = {
  args: {
    expiryTime: getExpiryTime(5),
    size: 120,
    breakpoints: [],
  },
};

export const BusinessCases = {
  render: (args) => {
    const standardBreakpoint: TimerBreakpoint[] = [
      {
        startTime: 1,
        color: MColours.teal,
        unit: "hour",
      },
    ];
    const warningBreakpoint: TimerBreakpoint[] = [
      {
        startTime: 1,
        color: MColours.orange,
        unit: "minute",
      },
    ];
    const criticalBreakpoint: TimerBreakpoint[] = [
      {
        startTime: 30,
        color: MColours.red,
        unit: "second",
      },
    ];
    const multipleBreakpoints: TimerBreakpoint[] = [
      ...criticalBreakpoint,
      ...standardBreakpoint,
      ...warningBreakpoint,
    ];

    return (
      <Box sx={{ width: "100%", margin: "auto", marginTop: 5 }}>
        <Grid container spacing={2}>
          <Grid container item xs={12}>
            <Grid item xs={3}>
              <strong>Normal</strong>
            </Grid>
            <Grid item xs={3}>
              <strong>Warning</strong>
            </Grid>
            <Grid item xs={3}>
              <strong>Critical</strong>
            </Grid>
            <Grid item xs={3}>
              <strong>Timed out</strong>
            </Grid>
          </Grid>

          <Grid container item xs={12}>
            <Grid item container xs={3}>
              <MTimer {...args} expiryTime={getExpiryTime(120)} />
              <MTimer
                {...args}
                expiryTime={getExpiryTime(60)}
                breakpoints={standardBreakpoint}
              />
            </Grid>
            <Grid item container xs={3}>
              <MTimer
                {...args}
                expiryTime={getExpiryTime(1)}
                breakpoints={warningBreakpoint}
              />
            </Grid>
            <Grid item container xs={3}>
              <MTimer
                {...args}
                expiryTime={getExpiryTime(0.5)}
                breakpoints={criticalBreakpoint}
              />
            </Grid>
            <Grid item container xs={3}>
              <MTimer {...args} expiryTime={getExpiryTime(0)} />
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <strong>Multiple breakpoints</strong>
          </Grid>
          <Grid container item xs={12}>
            <MTimer
              {...args}
              expiryTime={getExpiryTime(1.5)}
              breakpoints={multipleBreakpoints}
            />
          </Grid>
        </Grid>
      </Box>
    );
  },

  args: { size: 80, breakpoints: [] },
};
