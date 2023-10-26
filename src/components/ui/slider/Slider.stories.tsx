import { Box, Grid } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { MSlider } from "./Slider";

export default {
  title: "Components/Slider",
  component: MSlider,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "inline-radio",
      options: ["primary", "secondary", "pending"],
    },
    disabled: {
      type: {
        name: "boolean",
      },
    },
    max: {
      type: {
        name: "number",
      },
    },
    min: {
      type: {
        name: "number",
      },
    },
    name: {
      type: {
        name: "string",
      },
    },
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium"],
    },
    step: {
      type: {
        name: "number",
      },
    },
    track: {
      control: "inline-radio",
      options: ["inverted", "normal"],
    },
    valueLabelDisplay: {
      control: "inline-radio",
      options: ["on", "auto", "off"],
    },
  },
  parameters: {
    actions: {
      argTypesRegex: "!^on.*",
    },
    controls: {
      exclude:
        /ariaLabel|ariaValuetext|classes|components|componentsProps|defaultValue|disableSwap|getAriaLabel|getAriaValueText|isRtl|marks|onChange|onChangeCommitted|scale|sx|tabIndex|value|valueLabelFormat/g,
    },
  },
} as Meta<typeof MSlider>;

const Template: StoryFn<typeof MSlider> = (args) => (
  <div
    style={{ width: 200, height: 200, display: "flex", alignItems: "center" }}
  >
    <MSlider defaultValue={20} {...args} />
  </div>
);

export const Default = {
  render: Template,

  args: {
    orientation: "horizontal",
    size: "medium",
    color: "secondary",
    track: "normal",
  },
};

export const BusinessCases = {
  render: (args) => (
    <Box sx={{ width: "100%", margin: "auto", marginTop: 5 }}>
      <Grid container spacing={2}>
        <Grid container item xs={12}>
          <Grid item xs={3}>
            <strong>Standard</strong>
          </Grid>
          <Grid item xs={3}>
            <strong>Disabled</strong>
          </Grid>
          <Grid item xs={3}>
            <strong>Discrete slider</strong>
          </Grid>
          <Grid item xs={3}>
            <strong>Range with label always visible</strong>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2} sx={{ height: 200 }}>
          <Grid item container xs={3}>
            <MSlider defaultValue={20} {...args} />
          </Grid>
          <Grid item container xs={3}>
            <MSlider defaultValue={40} {...args} disabled />
          </Grid>
          <Grid item container xs={3}>
            <MSlider
              marks={true}
              valueLabelDisplay="auto"
              step={10}
              defaultValue={30}
              {...args}
            />
          </Grid>
          <Grid item container xs={3}>
            <MSlider
              valueLabelDisplay="on"
              marks={true}
              step={10}
              defaultValue={[60, 80]}
              {...args}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  ),

  args: { ...Default.args },
};
