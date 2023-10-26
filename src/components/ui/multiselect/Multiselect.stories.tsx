import { Box, Grid } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { MMultiselect } from "./Multiselect";

export default {
  title: "Components/Multiselect",
  component: MMultiselect,
  tags: ["autodocs"],
  argTypes: {
    checkboxSize: {
      control: "inline-radio",
      options: ["small", "medium"],
    },
    debounceOnSearch: {
      type: "number",
    },
    disabled: {
      type: {
        name: "boolean",
      },
    },
    label: {
      type: {
        name: "string",
      },
    },
    labelPlacement: {
      control: "inline-radio",
      options: ["end", "start", "top", "bottom"],
    },
    optionVisibleItems: {
      type: {
        name: "number",
      },
    },
    placeholder: {
      type: {
        name: "string",
      },
    },
    selectAll: {
      type: {
        name: "boolean",
      },
    },
    visibleItems: {
      type: "number",
    },
    onChange: {
      action: "change",
      table: {
        disable: true,
      },
    },
    onOpen: {
      action: "menu open",
      table: {
        disable: true,
      },
    },
    onClose: {
      action: "menu close",
      table: {
        disable: true,
      },
    },
    onScroll: {
      action: "scroll",
      table: {
        disable: true,
      },
    },
    onSearch: {
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
  },
  parameters: {
    actions: {
      argTypesRegex: "!^on.*",
    },
  },
} as Meta<typeof MMultiselect>;

const Template: StoryFn<typeof MMultiselect> = (args) => (
  <div style={{ width: 200 }}>
    <MMultiselect {...args} />
  </div>
);

const options = [
  {
    label: "Juan Francisco Fernandez Rodriguez",
    value: "1",
  },
  {
    label: "Dave",
    value: "2",
  },
  {
    label: "Chris",
    value: "3",
  },
  {
    label: "Rinat",
    value: "4",
  },
  {
    label: "Artemis",
    value: "5",
  },
  {
    label: "Natali",
    value: "6",
  },
  {
    label: "Surpreet",
    value: "7",
  },
  {
    label: "Sebastian",
    value: "8",
  },
];

export const Default = {
  render: Template,

  args: {
    debounceOnSearch: 250,
    disabled: false,
    labelPlacement: "top",
    placeholder: "Select",
    selectAll: false,
    checkboxSize: "small",
    visibleItems: 10,
    label: "Dream team",
    options,
  },
};

const teams = [
  {
    label: "A",
    value: "1",
  },
  {
    label: "B",
    value: "2",
  },
  {
    label: "C",
    value: "3",
  },
];

const players = {
  A: [
    {
      label: "Paco",
      value: "1",
    },
    {
      label: "Natali",
      value: "2",
    },
  ],
  B: [
    {
      label: "Dave",
      value: "1",
    },
    {
      label: "Chris",
      value: "2",
    },
    {
      label: "Surpreet",
      value: "3",
    },
  ],
  C: [
    {
      label: "Aretmis",
      value: "1",
    },
    {
      label: "Ri",
      value: "2",
    },
  ],
};

export const BusinessCases = {
  render: (args) => {
    const [playerOptions, setPlayerOptions] = useState<any>([]);
    const [scrollingOptions, setScrollingOptions] = useState<any>(teams);

    return (
      <>
        <Box sx={{ width: "100%", margin: "auto", marginTop: 5 }}>
          <Grid container spacing={2}>
            <Grid container item xs={12}>
              <Grid item xs={3}>
                <strong>Standard with one selected</strong>
              </Grid>
              <Grid item xs={3}>
                <strong>Disabled</strong>
              </Grid>
              <Grid item xs={3}>
                <strong>Select all by default</strong>
              </Grid>
              <Grid item xs={3}>
                <strong>Items before scrollbar set to 6</strong>
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item container xs={3}>
                <div style={{ width: 150 }}>
                  <MMultiselect
                    {...args}
                    options={options.map((option: any, index) => {
                      if (index % 2 === 0) {
                        return {
                          ...option,
                          checked: true,
                        };
                      }
                      return option;
                    })}
                  />
                </div>
              </Grid>
              <Grid item container xs={3}>
                <div style={{ width: 150 }}>
                  <MMultiselect {...args} disabled />
                </div>
              </Grid>
              <Grid item container xs={3}>
                <div style={{ width: 150 }}>
                  <MMultiselect selectAll {...args} />
                </div>
              </Grid>
              <Grid item container xs={3}>
                <div style={{ width: 150 }}>
                  <MMultiselect {...args} visibleItems={6} />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ width: "100%", margin: "auto", marginTop: 5 }}>
          <Grid container spacing={2}>
            <Grid container item xs={12}>
              <Grid item xs={3}>
                <strong>Dynamic option changes</strong>
              </Grid>
              <Grid item xs={3}>
                <strong>Adding new options on scrolling</strong>
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={3}>
                <div style={{ width: 200 }}>
                  <MMultiselect
                    {...args}
                    label="Select team"
                    placeholder="Select team"
                    options={teams}
                    onChange={(options) => {
                      const selectedTeams = options.filter((x) => x.checked);
                      const newPlayerOptions =
                        selectedTeams && selectedTeams.length > 0
                          ? selectedTeams.map((x) => players[x.label]).flat()
                          : [];
                      setPlayerOptions(newPlayerOptions);
                    }}
                  />
                  <div style={{ marginTop: 10 }}>
                    <MMultiselect
                      {...args}
                      label="Select player based on team"
                      options={playerOptions}
                    />
                  </div>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div style={{ width: 150 }}>
                  <MMultiselect
                    {...args}
                    label="Select team"
                    placeholder="Select team"
                    options={scrollingOptions}
                    visibleItems={4}
                    onScroll={() => {
                      setScrollingOptions([
                        ...scrollingOptions,
                        { label: "Random", value: 1 },
                      ]);
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  },

  args: { ...Default.args, placeholder: "Select team member(s)" },
};
