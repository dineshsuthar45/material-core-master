import { Box, Grid } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { MTabs } from "./Tabs";

export default {
  title: "Components/Tabs",
  component: MTabs,
  tags: ["autodocs"],
  argTypes: {
    centered: {
      type: {
        name: "boolean",
      },
    },
    disabled: {
      type: {
        name: "boolean",
      },
    },
    maxHeight: {
      type: {
        name: "number",
      },
    },
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
    },
    color: {
      control: "inline-radio",
      options: ["primary", "secondary"],
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium"],
    },
    variant: {
      control: "inline-radio",
      options: ["fullWidth", "scrollable", "standard"],
    },
    visibleScrollbar: {
      type: {
        name: "boolean",
      },
    },
    verticalFlip: {
      type: "boolean",
    },
  },
  parameters: {
    actions: {
      argTypesRegex: "!^on.*",
    },
    controls: {
      exclude:
        /action|allowScrollButtonsMobile|ariaLabel|ariaLabelledby|children|classes|component|sx|TabIndicatorProps|TabScrollButtonProps|onChange|ScrollButtonComponent|scrollButtons|selectionFollowsFocus|visibleScrollbar|centered|value/g,
    },
  },
} as Meta<typeof MTabs>;

const Template: StoryFn<typeof MTabs> = (args) => {
  const [value, setValue] = useState<number>(0);

  const onChange = (selectedTab: number) => {
    setValue(selectedTab);
  };

  return <MTabs {...args} value={value} onChange={onChange} />;
};

export const Default = {
  render: Template,

  args: {
    centered: false,
    disabled: false,
    orientation: "horizontal",
    scrollButtons: "auto",
    selectionFollowsFocus: false,
    size: "medium",
    color: "primary",
    value: 0,
    variant: "standard",
    visibleScrollbar: false,
    verticalFlip: false,
    options: [
      {
        value: 0,
        label: "Tab one",
        view: <div className="content">Tab one</div>,
      },
      {
        value: 1,
        label: "Tab two",
        view: <div className="content">Tab two</div>,
      },
      {
        value: 2,
        label: "Tab three",
        view: <div className="content">Tab three</div>,
      },
    ],
  },
};

export const BusinessCases = {
  render: (args) => {
    const extraOptions = [
      {
        value: 3,
        label: "Tab four",
        view: "Tab four",
      },
      {
        value: 4,
        label: "Tab five",
        view: "Tab five",
      },
      {
        value: 5,
        label: "Tab six",
        view: "Tab six",
      },
      {
        value: 6,
        label: "Tab seven",
        view: "Tab seven",
      },
      {
        value: 7,
        label: "Tab eight",
        view: "Tab eight",
      },
      {
        value: 8,
        label: "Tab nine",
        view: "Tab nine",
      },
      {
        value: 9,
        label: "Tab ten",
        view: "Tab ten",
      },
    ];

    const [value, setValue] = useState<number | undefined>(args.value);
    const [value1, setValue1] = useState<number | undefined>(args.value);
    const [value2, setValue2] = useState<number | undefined>(4);

    const onChange = (selectedTab: number) => {
      setValue(selectedTab);
    };

    const onChange1 = (selectedTab: number) => {
      setValue1(selectedTab);
    };
    const onChange2 = (selectedTab: number) => {
      setValue2(selectedTab);
    };

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
              <strong>With scrolling bar</strong>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item container xs={4}>
              <MTabs {...args} value={value} onChange={onChange} />
            </Grid>
            <Grid item container xs={4}>
              <MTabs {...args} disabled value={value1} onChange={onChange1} />
            </Grid>
            <Grid item container xs={4}>
              <div style={{ maxWidth: 500, flexGrow: 1 }}>
                <MTabs
                  {...args}
                  variant="scrollable"
                  options={[...args.options, ...extraOptions]}
                  value={value2}
                  maxHeight={200}
                  onChange={onChange2}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  },

  args: {
    ...Default.args,
  },
};
