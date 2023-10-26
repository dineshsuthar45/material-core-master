import { Box, Grid } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MRadioGroup } from "./RadioGroup";

export default {
  title: "Components/RadioGroup",
  component: MRadioGroup,
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
    disableRipple: {
      type: {
        name: "boolean",
      },
    },
    row: {
      type: {
        name: "boolean",
      },
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
    value: {
      type: "string",
    },
  },
  parameters: {
    actions: {
      argTypesRegex: "!^on.*",
    },
    controls: {
      exclude: /checked|onChange/g,
    },
  },
} as Meta<typeof MRadioGroup>;

interface OptionInterface {
  id: string;
  value: string;
  label: string;
}

const Template: StoryFn<typeof MRadioGroup> = (args) => {
  const [value, setValue] = useState<string>("");

  const onChange = (option: OptionInterface) => {
    setValue(option.value);
  };

  useEffect(() => {
    setValue(args.value ?? "");
  }, [args.value]);

  return <MRadioGroup {...args} value={value} onChange={onChange} />;
};

export const Default = {
  render: Template,

  args: {
    label: "Gender",
    disabled: false,
    disableRipple: false,
    color: "secondary",
    name: uuidv4(),
    row: false,
    size: "medium",
    options: [
      {
        id: "1",
        value: "female",
        label: "Female",
      },
      {
        id: "2",
        value: "male",
        label: "Male",
      },
      {
        id: "3",
        value: "other",
        label: "Other",
      },
    ],
  },
};

export const BusinessCases = {
  render: (args) => {
    const [value, setValue] = useState<string>("");
    const [value1, setValue1] = useState<string>("");
    const [value2, setValue2] = useState<string>("");

    const onChange = (option: OptionInterface) => {
      setValue(option.value);
    };
    const onChange1 = (option: OptionInterface) => {
      setValue1(option.value);
    };
    const onChange2 = (option: OptionInterface) => {
      setValue2(option.value);
    };

    useEffect(() => {
      setValue(args.value ?? "");
      setValue1(args.value ?? "");
      setValue2(args.value ?? "other");
    }, [args.value]);

    return (
      <Box sx={{ width: "100%", margin: "auto", marginTop: 5 }}>
        <Grid container spacing={2}>
          <Grid container item xs={12}>
            <Grid item xs={4}>
              <strong>Standard</strong>
            </Grid>
            <Grid item xs={4}>
              <strong>Disabled</strong>
            </Grid>
            <Grid item xs={4}>
              <strong>Preselected option</strong>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={2}>
            <Grid item container xs={4}>
              <MRadioGroup
                {...args}
                value={value}
                onChange={onChange}
                options={args.options.map((x) => ({ ...x }))}
              />
            </Grid>
            <Grid item container xs={4}>
              <MRadioGroup
                {...args}
                value={value1}
                onChange={onChange1}
                options={args.options.map((x) => ({ ...x }))}
                disabled
              />
            </Grid>
            <Grid item container xs={4}>
              <MRadioGroup
                {...args}
                value={value2}
                onChange={onChange2}
                options={args.options.map((x) => ({ ...x }))}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  },

  args: { ...Default.args },
};
