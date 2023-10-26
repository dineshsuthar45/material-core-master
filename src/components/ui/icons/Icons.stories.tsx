import { FormControl } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import React, { SVGProps } from "react";
import { MColours } from "../../../theme/colours";

import * as Icons from "./";
import { MLoadingLogo } from "./logo";

const AllIcons = (args: SVGProps<SVGSVGElement>) => {
  const icons = Object.values(Icons);
  const iconsMapped = icons.map((IconComponent, key) => (
    <FormControl
      sx={{ margin: "10px", alignItems: "center", width: "110px" }}
      key={key}
    >
      <IconComponent {...args} />
      <span style={{ paddingTop: "10px" }}>
        {IconComponent.name.replace("Svg", "")}
      </span>
    </FormControl>
  ));

  return <div>{iconsMapped}</div>;
};

export default {
  title: "Components/Icons",
  component: AllIcons,
  tags: ["autodocs"],
  argTypes: {
    fill: {
      control: "color",
      description: "Icon colour",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: MColours.greyScale[500] },
      },
    },
    width: {
      control: "number",
      description: "Icon width",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 10 },
      },
    },
    height: {
      control: "number",
      description: "Icon height",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 10 },
      },
    },
  },
} as Meta<typeof AllIcons>;

export const Default = {};

const LoadingLogoTemplate: StoryFn<typeof MLoadingLogo> = (args) => (
  <FormControl sx={{ margin: "10px", alignItems: "center", width: "110px" }}>
    <div style={{ width: "110px", height: "110px" }}>
      <MLoadingLogo {...args} />
    </div>
    <span style={{ paddingTop: "20px", color: args.fill }}>
      {MLoadingLogo.name.replace("Svg", "")}
    </span>
  </FormControl>
);

export const LoadingLogo = {
  render: LoadingLogoTemplate,

  argTypes: {
    fill: {
      description: "Background colour demostration purpose",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "N/A" },
      },
    },
    backgroundEffect: {
      control: "inline-radio",
      options: ["none", "blur", "greyScale", "dark"],
      description: "Background effect to apply",
      table: {
        type: { summary: "inline-radio" },
        defaultValue: { summary: "none" },
      },
    },
    width: {
      table: {
        defaultValue: { summary: 62 },
      },
    },
    height: {
      table: {
        defaultValue: { summary: 16 },
      },
    },
    message: {
      table: {
        defaultValue: { summary: "Loading message" },
      },
    },
  },

  args: {
    backgroundEffect: "none",
    fill: "teal",
    height: 60,
    width: 80,
    message: "Loading message",
  },
};
