import { Box, Grid } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { MCheckbox as MCheckbox } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: MCheckbox,
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
    disableRipple: {
      type: {
        name: "boolean",
      },
    },
    checked: {
      type: {
        name: "boolean",
      },
    },
    defaultChecked: {
      type: {
        name: "boolean",
      },
    },
    disabled: {
      type: {
        name: "boolean",
      },
    },
    id: {
      type: {
        name: "string",
      },
    },
    indeterminate: {
      type: {
        name: "boolean",
      },
    },
    labelPlacement: {
      control: "inline-radio",
      options: ["end", "start"],
    },
    required: {
      type: {
        name: "boolean",
      },
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
    tooltipTitle: {
      type: {
        name: "string",
      },
    },
  },
  parameters: {
    actions: {
      argTypesRegex: "!^on.*",
    },
    controls: {
      exclude:
        /checkedIcon|classes|defaultChecked|icon|indeterminateIcon|inputProps|inputRef|onChange|sx|value/g,
    },
  },
} as Meta<typeof MCheckbox>;

const Template: StoryFn<typeof MCheckbox> = (args) => {
  const [internalChecked, setInternalChecked] = useState<boolean>(
    args.checked ?? false
  );

  useEffect(() => {
    setInternalChecked(args.checked ?? false);
  }, [args.checked]);

  return (
    <MCheckbox
      label="Checkbox label"
      {...args}
      checked={internalChecked}
      onChange={() => setInternalChecked(!internalChecked)}
    />
  );
};

export const Default = {
  render: Template,

  args: {
    labelPlacement: "end",
    checked: false,
    color: "secondary",
    disabled: false,
    disableRipple: false,
    indeterminate: false,
    required: false,
    size: "small",
  },
};

export const BusinessCases = {
  render: (args) => {
    const [internalChecked1, setInternalChecked1] = useState<boolean>(
      args.checked ?? false
    );
    const [internalChecked2, setInternalChecked2] = useState<boolean>(
      args.checked ?? false
    );
    const [internalChecked3, setInternalChecked3] = useState<boolean>(
      args.checked ?? false
    );
    const [internalChecked4, setInternalChecked4] = useState<boolean>(
      args.checked ?? false
    );

    useEffect(() => {
      setInternalChecked1(args.checked);
      setInternalChecked2(args.checked);
      setInternalChecked3(args.checked);
      setInternalChecked4(args.checked);
    }, [args.checked]);

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
              <strong>Long label</strong>
            </Grid>
            <Grid item xs={3}>
              <strong>Tooltip with different information</strong>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item container xs={3}>
              <MCheckbox
                label="Checkox label"
                {...args}
                checked={internalChecked1}
                onChange={() => setInternalChecked1(!internalChecked1)}
              />
            </Grid>
            <Grid item container xs={3}>
              <MCheckbox
                label="Checkbox label"
                {...args}
                disabled
                checked={internalChecked2}
                onChange={() => setInternalChecked2(!internalChecked2)}
              />
            </Grid>
            <Grid item container xs={3}>
              <div style={{ width: 100 }}>
                <MCheckbox
                  label="Checkbox label with a very long text"
                  {...args}
                  checked={internalChecked3}
                  onChange={() => setInternalChecked3(!internalChecked3)}
                />
              </div>
            </Grid>
            <Grid item container xs={3}>
              <MCheckbox
                label="Checkbox label"
                {...args}
                tooltipTitle="Different tooltip info"
                checked={internalChecked4}
                onChange={() => setInternalChecked4(!internalChecked4)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  },

  args: { ...Default.args },
};
