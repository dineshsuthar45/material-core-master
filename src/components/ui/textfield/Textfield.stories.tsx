import { Box, Grid, InputAdornment } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MTextfield } from "./Textfield";

export default {
  title: "Components/Textfield",
  component: MTextfield,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "inline-radio",
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
    disabled: {
      type: "boolean",
    },
    error: {
      type: "boolean",
    },
    fullWidth: {
      type: "boolean",
    },
    helperText: {
      control: false,
    },
    id: {
      type: { name: "string" },
    },
    label: {
      type: { name: "string" },
    },
    margin: {
      control: "inline-radio",
      options: ["dense", "none", "normal"],
    },
    placeholder: {
      type: { name: "string" },
    },
    required: {
      type: "boolean",
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium"],
    },
    type: {
      control: "inline-radio",
      options: ["text", "tel", "number", "password", "url"],
    },
    value: {
      type: { name: "string", required: false },
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
    variant: {
      control: "inline-radio",
      options: ["outlined", "standard", "filled"],
    },
  },
  parameters: {
    actions: {
      argTypesRegex: "!^on.*",
    },
    controls: {
      exclude:
        /autoComplete|autoFocus|classes|defaultValue|endAdornment|FormHelperTextProps|helperText|inputProps|InputProps|InputLabelProps|inputRef|name|onChange|startAdornment|sx/g,
    },
  },
} as Meta<typeof MTextfield>;

const Template: StoryFn<typeof MTextfield> = (args) => {
  const [value, setValue] = useState<string>(args.value ?? "");

  useEffect(() => {
    setValue(args.value ?? "");
  }, [args.value]);

  return (
    <MTextfield
      {...args}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

export const Default = {
  render: Template,

  args: {
    autoFocus: false,
    color: "primary",
    disabled: false,
    error: false,
    fullWidth: false,
    id: uuidv4(),
    label: "Label",
    margin: "none",
    required: false,
    size: "medium",
    type: "text",
    variant: "outlined",
  },
};

export const BusinessCases = {
  render: (args) => {
    const [value, setValue] = useState<string>(args.value ?? "material");
    const [value1, setValue1] = useState<string>(args.value ?? "");
    const [value2, setValue2] = useState<string>(args.value ?? "Secret");
    const [value3, setValue3] = useState<string>(args.value ?? "");
    const [value4, setValue4] = useState<string>(args.value ?? "5.2");
    const [value5, setValue5] = useState<string>(args.value ?? "Test123");

    useEffect(() => {
      setValue(args.value);
      setValue1(args.value);
      setValue2(args.value);
      setValue3(args.value);
      setValue4(args.value);
      setValue5(args.value);
    }, [args.value]);

    const startAdornment = <InputAdornment position="start">kg</InputAdornment>;

    return (
      <Box sx={{ width: "100%", margin: "auto", marginTop: 5 }}>
        <Grid container spacing={2}>
          <Grid container item xs={12}>
            <Grid item xs={2}>
              <strong>Standard</strong>
            </Grid>
            <Grid item xs={2}>
              <strong>Disabled</strong>
            </Grid>
            <Grid item xs={2}>
              <strong>Password</strong>
            </Grid>
            <Grid item xs={2}>
              <strong>Textfield with helper text</strong>
            </Grid>
            <Grid item xs={2}>
              <strong>Measure unit</strong>
            </Grid>
            <Grid item xs={2}>
              <strong>Textfield with error</strong>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item container xs={2}>
              <MTextfield
                value={value}
                {...args}
                type="text"
                variant="standard"
                onChange={(event) => setValue(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MTextfield
                value={value1}
                {...args}
                disabled
                variant="standard"
                onChange={(event) => setValue1(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MTextfield
                label="Password"
                value={value2}
                {...args}
                type="password"
                variant="standard"
                onChange={(event) => setValue2(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MTextfield
                value={value3}
                helperText="Stock price"
                {...args}
                variant="standard"
                onChange={(event) => setValue3(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MTextfield
                value={value4}
                {...args}
                variant="standard"
                startAdornment={startAdornment}
                onChange={(event) => setValue4(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MTextfield
                value={value5}
                helperText="Only numbers"
                {...args}
                variant="standard"
                error
                onChange={(event) => setValue5(event.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item container xs={2}>
              <MTextfield
                value={value}
                {...args}
                variant="filled"
                onChange={(event) => setValue(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MTextfield
                value={value1}
                {...args}
                disabled
                variant="filled"
                onChange={(event) => setValue1(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MTextfield
                label="Password"
                value={value2}
                {...args}
                type="password"
                variant="filled"
                onChange={(event) => setValue2(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MTextfield
                value={value3}
                helperText="Stock price"
                {...args}
                variant="filled"
                onChange={(event) => setValue3(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MTextfield
                value={value4}
                {...args}
                variant="filled"
                startAdornment={startAdornment}
                onChange={(event) => setValue4(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MTextfield
                value={value5}
                helperText="Only numbers"
                {...args}
                variant="filled"
                error
                onChange={(event) => setValue5(event.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item container xs={2}>
              <MTextfield
                value={value}
                {...args}
                variant="outlined"
                onChange={(event) => setValue(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MTextfield
                value={value1}
                {...args}
                disabled
                variant="outlined"
                onChange={(event) => setValue1(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MTextfield
                label="Password"
                value={value2}
                {...args}
                type="password"
                variant="outlined"
                onChange={(event) => setValue2(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MTextfield
                value={value3}
                helperText="Stock price"
                {...args}
                variant="outlined"
                onChange={(event) => setValue3(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MTextfield
                value={value4}
                {...args}
                variant="outlined"
                startAdornment={startAdornment}
                onChange={(event) => setValue4(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MTextfield
                value={value5}
                helperText="Only numbers"
                {...args}
                variant="outlined"
                error
                onChange={(event) => setValue5(event.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  },

  args: { ...Default.args },
};
