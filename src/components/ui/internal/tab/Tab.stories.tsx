import { Tabs } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { MTab } from "./Tab";
import "./Tab.scss";

export default {
  title: "Internal/Components/Tab",
  component: MTab,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "inline-radio",
      options: ["primary", "secondary"],
    },
    disabled: {
      type: {
        name: "boolean",
      },
    },
    disableFocusRipple: {
      type: {
        name: "boolean",
      },
    },
    disableRipple: {
      type: {
        name: "boolean",
      },
    },
    wrapped: {
      type: {
        name: "boolean",
      },
    },
  },
  parameters: {
    actions: {
      argTypesRegex: "!^on.*",
    },
    controls: {
      exclude: /classes|icon|iconPosition|sx|value/g,
    },
  },
} as Meta<typeof MTab>;

const Template: StoryFn<typeof MTab> = (args) => {
  const [value, setValue] = useState<number>(-1);

  return (
    <Tabs
      textColor={args.color}
      indicatorColor={args.color ?? "primary"}
      value={value}
      onClick={() => setValue(0)}
    >
      <MTab {...args} value={0} />
    </Tabs>
  );
};

export const Default = {
  render: Template,

  args: {
    label: "Tab",
    color: "primary",
    disabled: false,
    disableFocusRipple: false,
    disableRipple: false,
    iconPosition: "top",
    wrapped: false,
  },
};
