import { Box, Grid } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { MMultiline } from "./Multiline";

export default {
  title: "Components/Multiline",
  component: MMultiline,
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
    maxRows: {
      type: {
        name: "number",
      },
    },
    minRows: {
      type: {
        name: "number",
      },
    },
    placeholder: {
      type: { name: "string" },
    },
    required: {
      type: "boolean",
    },
    rows: {
      type: {
        name: "number",
      },
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium"],
    },
    value: {
      type: { name: "string" },
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
        /autoComplete|autoFocus|classes|defaultValue|FormHelperTextProps|helperText|InputLabelProps|inputProps|InputProps|inputRef|name|onChange|sx/g,
    },
  },
} as Meta<typeof MMultiline>;

const Template: StoryFn<typeof MMultiline> = (args) => {
  const [value, setValue] = useState<string>(args.value ?? "");

  useEffect(() => {
    setValue(args.value ?? "");
  }, [args.value]);

  return (
    <MMultiline
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
    variant: "outlined",
  },
};

export const BusinessCases = {
  render: (args) => {
    const [value, setValue] = useState<string>(args.value ?? "material");
    const [value1, setValue1] = useState<string>(args.value ?? "");
    const [value2, setValue2] = useState<string>(args.value ?? "");
    const [value3, setValue3] = useState<string>(args.value ?? "Row 1\nRow 2");
    const [value4, setValue4] = useState<string>(
      args.value ?? "Row 1\nRow 2\nRow 3\nRow 4"
    );

    useEffect(() => {
      setValue(args.value);
      setValue1(args.value);
      setValue2(args.value);
      setValue3(args.value);
      setValue4(args.value);
    }, [args.value]);

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
              <strong>Fixed to 3 rows display</strong>
            </Grid>
            <Grid item xs={2}>
              <strong>Multiline with helper text</strong>
            </Grid>
            <Grid item xs={2}>
              <strong>3 Max rows before scrolling</strong>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item container xs={2}>
              <MMultiline
                value={value}
                {...args}
                variant="standard"
                onChange={(event) => setValue(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MMultiline
                value={value1}
                {...args}
                disabled
                variant="standard"
                onChange={(event) => setValue1(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MMultiline
                value={value2}
                {...args}
                rows={3}
                variant="standard"
                onChange={(event) => setValue2(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MMultiline
                value={value3}
                helperText="Stock price"
                {...args}
                variant="standard"
                onChange={(event) => setValue3(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MMultiline
                value={value4}
                {...args}
                maxRows={3}
                variant="standard"
                onChange={(event) => setValue4(event.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item container xs={2}>
              <MMultiline
                value={value}
                {...args}
                variant="filled"
                onChange={(event) => setValue(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MMultiline
                value={value1}
                {...args}
                disabled
                variant="filled"
                onChange={(event) => setValue1(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MMultiline
                value={value2}
                {...args}
                rows={3}
                variant="filled"
                onChange={(event) => setValue2(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MMultiline
                value={value3}
                helperText="Stock price"
                {...args}
                variant="filled"
                onChange={(event) => setValue3(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MMultiline
                value={value4}
                {...args}
                maxRows={3}
                variant="filled"
                onChange={(event) => setValue4(event.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item container xs={2}>
              <MMultiline
                value={value}
                {...args}
                variant="outlined"
                onChange={(event) => setValue(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MMultiline
                value={value1}
                {...args}
                disabled
                variant="outlined"
                onChange={(event) => setValue1(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MMultiline
                value={value2}
                {...args}
                rows={3}
                variant="outlined"
                onChange={(event) => setValue2(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MMultiline
                value={value3}
                helperText="Stock price"
                {...args}
                variant="outlined"
                onChange={(event) => setValue3(event.target.value)}
              />
            </Grid>
            <Grid item container xs={2}>
              <MMultiline
                value={value4}
                {...args}
                maxRows={3}
                variant="outlined"
                onChange={(event) => setValue4(event.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  },

  args: { ...Default.args },
};
