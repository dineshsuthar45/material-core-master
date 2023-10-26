import { Box, Grid } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MSearch } from "./Search";

export default {
  title: "Components/Search",
  component: MSearch,
  tags: ["autodocs"],
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    debounceOnSearch: {
      type: "number",
    },
    disabled: {
      type: "boolean",
    },
    placeholder: {
      type: "string",
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
    onSearch: {
      action: "search",
      table: {
        disable: true,
      },
    },
    onReset: {
      action: "reset",
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    actions: {
      argTypesRegex: "!^on.*",
    },
  },
} as Meta<typeof MSearch>;

const Template: StoryFn<typeof MSearch> = (args) => {
  const [value, setValue] = useState<string>(args.value ?? "");

  useEffect(() => {
    setValue(args.value ?? "");
  }, [args.value]);

  return (
    <MSearch
      {...args}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onReset={() => setValue("")}
    />
  );
};

export const Default = {
  render: Template,

  args: {
    debounceOnSearch: 250,
    disabled: false,
    id: uuidv4(),
    placeholder: "Search",
    variant: "filled",
  },
};

export const BusinessCases = {
  render: (args) => {
    const [value, setValue] = useState<string>(args.value ?? "");
    const [value1, setValue1] = useState<string>(args.value ?? "");
    const [value2, setValue2] = useState<string>(args.value ?? "");
    const [value3, setValue3] = useState<string>(args.value ?? "Searching");

    useEffect(() => {
      setValue(args.value ?? "");
      setValue1(args.value ?? "");
      setValue2(args.value ?? "");
      setValue3(args.value ?? "Searching");
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
              <strong>With placeholder</strong>
            </Grid>
            <Grid item xs={3}>
              <strong>Searching</strong>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item container xs={3}>
              <MSearch
                {...args}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onReset={() => setValue("")}
              />
            </Grid>
            <Grid item container xs={3}>
              <MSearch
                {...args}
                disabled
                value={value1}
                onChange={(event) => setValue1(event.target.value)}
                onReset={() => setValue1("")}
              />
            </Grid>
            <Grid item container xs={3}>
              <div>
                <MSearch
                  {...args}
                  value={value2}
                  placeholder="Search"
                  onChange={(event) => setValue2(event.target.value)}
                  onReset={() => setValue2("")}
                />
              </div>
            </Grid>
            <Grid item container xs={3}>
              <MSearch
                {...args}
                value={value3}
                onChange={(event) => setValue3(event.target.value)}
                onReset={() => setValue3("")}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid container item xs={12}></Grid>
          <Grid container item xs={12}>
            <Grid item container xs={3}>
              <MSearch
                {...args}
                value={value}
                variant="outlined"
                onChange={(event) => setValue(event.target.value)}
                onReset={() => setValue("")}
              />
            </Grid>
            <Grid item container xs={3}>
              <MSearch
                {...args}
                variant="outlined"
                disabled
                value={value1}
                onChange={(event) => setValue1(event.target.value)}
                onReset={() => setValue1("")}
              />
            </Grid>
            <Grid item container xs={3}>
              <div>
                <MSearch
                  {...args}
                  value={value2}
                  variant="outlined"
                  placeholder="Search"
                  onChange={(event) => setValue2(event.target.value)}
                  onReset={() => setValue2("")}
                />
              </div>
            </Grid>
            <Grid item container xs={3}>
              <MSearch
                {...args}
                value={value3}
                variant="outlined"
                onChange={(event) => setValue3(event.target.value)}
                onReset={() => setValue3("")}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid container item xs={12}></Grid>
          <Grid container item xs={12}>
            <Grid item container xs={3}>
              <MSearch
                {...args}
                value={value}
                variant="standard"
                onChange={(event) => setValue(event.target.value)}
                onReset={() => setValue("")}
                sx={{ padding: "0 14px" }}
              />
            </Grid>
            <Grid item container xs={3}>
              <MSearch
                {...args}
                variant="standard"
                disabled
                value={value1}
                onChange={(event) => setValue1(event.target.value)}
                onReset={() => setValue1("")}
                sx={{ padding: "0 14px" }}
              />
            </Grid>
            <Grid item container xs={3}>
              <div>
                <MSearch
                  {...args}
                  value={value2}
                  variant="standard"
                  placeholder="Search"
                  onChange={(event) => setValue2(event.target.value)}
                  onReset={() => setValue2("")}
                  sx={{ padding: "0 14px" }}
                />
              </div>
            </Grid>
            <Grid item container xs={3}>
              <MSearch
                {...args}
                value={value3}
                variant="standard"
                onChange={(event) => setValue3(event.target.value)}
                onReset={() => setValue3("")}
                sx={{ padding: "0 14px" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  },

  args: {
    ...Default.args,
    placeholder: "",
  },
};
