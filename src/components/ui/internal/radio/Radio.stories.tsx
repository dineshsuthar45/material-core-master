import { Meta, StoryFn } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {  MRadio } from "./Radio";

export default {
  title: "Internal/Components/Radio",
  component: MRadio,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "inline-radio",
      options: [
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning",
        "default",
      ],
    },
    disabled: {
      type: {
        name: "boolean",
      },
    },
    labelPlacement: {
      control: "inline-radio",
      options: ["end", "start"],
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
  },
  parameters: {
    actions: {
      argTypesRegex: "!^on.*",
    },
    controls: {
      exclude:
        /checkedIcon|classes|checked|disableRipple|icon|id|inputProps|inputRef|onChange|sx|required|name|value/g,
    },
  },
} as Meta<typeof MRadio>;

const Template: StoryFn<typeof MRadio> = (args) => {
  const [internalCheck, setInternalCheck] = useState<boolean>(
    args.checked ?? false
  );

  useEffect(() => {
    setInternalCheck(args.checked ?? false);
  }, [args.checked]);

  return (
    <div>
      <MRadio
        {...args}
        checked={internalCheck}
        onChange={(value) => setInternalCheck(value)}
      />
    </div>
  );
};

export const Default = {
  render: Template,

  args: {
    color: "secondary",
    disabled: false,
    disableRipple: false,
    id: uuidv4(),
    label: "Radio button label",
    name: uuidv4(),
    labelPlacement: "end",
    required: false,
    size: "medium",
  },
};
