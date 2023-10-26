import { Box, Grid } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { MIconAngleDown } from "../icons";
import { MSelect } from "./Select";
import { SelectProps } from "./Select.types";

export default {
  title: "Components/Select",
  component: MSelect,
  tags: ["autodocs"],
  argTypes: {
    label: {
      type: "string",
    },
    autoWidth: {
      type: "boolean",
    },
    defaultOpen: {
      type: "boolean",
    },
    disabled: {
      type: "boolean",
    },
    error: {
      type: "boolean",
    },
    feedback: {
      type: "string",
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium"],
    },
    variant: {
      control: "inline-radio",
      options: ["standard", "outlined", "filled"],
    },
  },
  parameters: {
    actions: {
      argTypesRegex: "!^on.*",
    },
    controls: {
      exclude:
        /displayEmpty|IconComponent|id|MenuProps|onChange|onClose|onOpen|open|renderValue|SelectDisplayProps|sx|value/g,
    },
  },
} as Meta<typeof MSelect>;

const Template: StoryFn<typeof MSelect> = (args) => {
  const [state, setState] = useState<Option | undefined>(args.value);

  const onChangeHandler = (selectedOption: Option) => {
    setState(selectedOption);
  };
  return <MSelect<Option> {...args} value={state} onChange={onChangeHandler} />;
};

interface Option {
  label: string;
  value: string;
}

const options: Option[] = [
  {
    label: "0.5 MM",
    value: "0.5",
  },
  {
    label: "1 MM",
    value: "1",
  },
  {
    label: "2 MM",
    value: "2",
  },
  {
    label: "3 MM",
    value: "3",
  },
];

const args: SelectProps<Option> = {
  label: "Price",
  options: options,
  autoWidth: false,
  defaultOpen: false,
  disabled: false,
  displayEmpty: false,
  error: false,
  IconComponent: MIconAngleDown,
  size: "small",
  variant: "standard",
  onChange: () => {},
};

export const Default = {
  render: Template,
  args: args,
};

export const BusinessCases = {
  render: (args) => {
    const [value, setValue] = useState<Option | undefined>(args.value);
    const [value1, setValue1] = useState<Option | undefined>(args.value);
    const [value2, setValue2] = useState<Option | undefined>(args.value);
    const [value3, setValue3] = useState<Option | undefined>(args.value);

    useEffect(() => {
      setValue(args.value);
      setValue1(args.value);
      setValue2(args.value ?? args.options[1]);
      setValue3(args.value);
    }, [args.value]);

    return (
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
              <strong>Select with helper text</strong>
            </Grid>
            <Grid item xs={3}>
              <strong>Select with error</strong>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item container xs={3}>
              <MSelect
                value={value}
                {...args}
                type="text"
                variant="standard"
                onChange={(option) => setValue(option)}
              />
            </Grid>
            <Grid item container xs={3}>
              <MSelect
                value={value1}
                {...args}
                disabled
                variant="standard"
                onChange={(option) => setValue1(option)}
              />
            </Grid>
            <Grid item container xs={3}>
              <MSelect
                value={value2}
                {...args}
                feedback="Stock price"
                variant="standard"
                onChange={(option) => setValue2(option)}
              />
            </Grid>
            <Grid item container xs={3}>
              <MSelect
                value={value3}
                {...args}
                feedback="Feedback message."
                variant="standard"
                error
                onChange={(option) => setValue3(option)}
              />
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item container xs={3}>
              <MSelect
                value={value}
                {...args}
                variant="filled"
                onChange={(option) => setValue(option)}
              />
            </Grid>
            <Grid item container xs={3}>
              <MSelect
                value={value1}
                {...args}
                disabled
                variant="filled"
                onChange={(option) => setValue1(option)}
              />
            </Grid>
            <Grid item container xs={3}>
              <MSelect
                value={value2}
                {...args}
                feedback="Stock price"
                variant="filled"
                onChange={(option) => setValue2(option)}
              />
            </Grid>
            <Grid item container xs={3}>
              <MSelect
                value={value3}
                {...args}
                feedback="Feedback message."
                variant="filled"
                error
                onChange={(option) => setValue3(option)}
              />
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item container xs={3}>
              <MSelect
                value={value}
                {...args}
                variant="outlined"
                onChange={(option) => setValue(option)}
              />
            </Grid>
            <Grid item container xs={3}>
              <MSelect
                value={value1}
                {...args}
                disabled
                variant="outlined"
                onChange={(option) => setValue1(option)}
              />
            </Grid>
            <Grid item container xs={3}>
              <MSelect
                value={value2}
                {...args}
                feedback="Stock price"
                variant="outlined"
                onChange={(option) => setValue2(option)}
              />
            </Grid>
            <Grid item container xs={3}>
              <MSelect
                value={value3}
                {...args}
                feedback="Feedback message."
                variant="outlined"
                error
                onChange={(option) => setValue3(option)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  },

  args: { ...Default.args },
};
