import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { MPanel as MPanel } from "./Panel";

export default {
  title: "Internal/Components/Panel",
  component: MPanel,
  tags: ["autodocs"],
  parameters: {
    actions: {
      argTypesRegex: "!^on.*",
    },
  },
} as Meta<typeof MPanel>;

const Template: StoryFn<typeof MPanel> = (args) => (
  <div>
    <p>Component surrounded by dashed border only for demo purposes.</p>
    <div style={{ border: "dashed 1px gray" }}>
      <MPanel {...args} />
    </div>
  </div>
);

export const Default = {
  render: Template,
  args: {},
};
