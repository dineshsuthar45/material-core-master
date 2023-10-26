import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { MButton } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: MButton,
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      control: "inline-radio",
      options: [
        "inherit",
        "primary",
        "secondary",
        "success",
        "error",
        "info",
        "warning",
        "pending",
        "buy",
        "sell",
        "engaged",
        "inactive",
      ],
    },
    disabled: {
      type: {
        name: "boolean",
      },
    },
    disableElevation: {
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
    fullWidth: {
      type: {
        name: "boolean",
      },
    },
    href: {
      type: {
        name: "string",
      },
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large", "grid"],
    },
    variant: {
      control: "inline-radio",
      options: ["text", "outlined", "contained"],
    },
  },
  // More on paremeters: https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  parameters: {
    actions: {
      argTypesRegex: "!^on.*",
    },
    controls: {
      exclude: /classes|endIcon|startIcon|sx/g,
    },
  },
} as Meta<typeof MButton>;

export const Default = {
  args: {
    label: "Button",
    color: "secondary",
    disabled: false,
    disableElevation: false,
    disableFocusRipple: false,
    disableRipple: false,
    fullWidth: false,
    href: "",
    size: "medium",
    variant: "outlined",
  },
};
