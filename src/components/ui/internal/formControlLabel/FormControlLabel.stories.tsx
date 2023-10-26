import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { MFormControlLabel } from "./FormControlLabel";

export default {
  title: "Internal/Components/FormControlLabel",
  component: MFormControlLabel,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      type: {
        name: "boolean",
      },
    },
    labelPlacement: {
      control: "inline-radio",
      options: ["end", "start", "bottom", "top"],
    },
  },
} as Meta<typeof MFormControlLabel>;

const Template: StoryFn<typeof MFormControlLabel> = (args) => (
  <div>
    <p>Example where there is a limit of 90px width.</p>
    <div style={{ width: "90px", border: "dashed 1px gray" }}>
      <MFormControlLabel {...args} />
    </div>
  </div>
);

const CustomComponent = () => <span>Custom component</span>;

export const Default = {
  render: Template,

  args: {
    label: "A very long component label",
    tooltipProps: {
      title: "Tooltip text sample here",
    },
    children: CustomComponent(),
  },
};
