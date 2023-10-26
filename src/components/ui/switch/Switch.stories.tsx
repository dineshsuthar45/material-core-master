import { Box, Grid } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { MSwitch } from "./Switch";

export default {
  title: "Components/Switch",
  component: MSwitch,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      type: {
        name: "boolean",
      },
    },
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
        "pending",
      ],
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
    disableRipple: {
      type: {
        name: "boolean",
      },
    },
    edge: {
      control: "inline-radio",
      options: ["end", "start", false],
    },
    id: {
      type: {
        name: "string",
      },
    },
    label: {
      type: {
        name: "string",
      },
    },
    labelPlacement: {
      control: "inline-radio",
      options: ["end", "start"],
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "grid"],
    },
    tooltipTitle: {
      type: {
        name: "string",
      },
    },
  },
  parameters: {
    actions: {
      argTypesRegex: "!^[onMouse.*|onPointer.*]",
    },
    controls: {
      exclude:
        /checkedIcon|classes|defaultChecked|edge|icon|indeterminateIcon|inputProps|inputRef|onChange|required|sx|value/g,
    },
  },
} as Meta<typeof MSwitch>;

const Template: StoryFn<typeof MSwitch> = (args) => {
  const [internalChecked, setInternalChecked] = useState<boolean>(
    args.checked ?? false
  );

  useEffect(() => {
    setInternalChecked(args.checked ?? false);
  }, [args.checked]);

  return (
    <MSwitch
      label="Switch label"
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
    color: "secondary",
    edge: false,
    size: "medium",
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
              <MSwitch
                label="Switch"
                {...args}
                checked={internalChecked1}
                onChange={() => setInternalChecked1(!internalChecked1)}
              />
            </Grid>
            <Grid item container xs={3}>
              <MSwitch
                disabled
                label="Switch label"
                {...args}
                checked={internalChecked2}
                onChange={() => setInternalChecked2(!internalChecked2)}
              />
            </Grid>
            <Grid item container xs={3}>
              <div style={{ width: 100 }}>
                <MSwitch
                  label="Switch label with a very long text"
                  {...args}
                  checked={internalChecked3}
                  onChange={() => setInternalChecked3(!internalChecked3)}
                />
              </div>
            </Grid>
            <Grid item container xs={3}>
              <MSwitch
                label="Switch label"
                tooltipTitle="Different tooltip info"
                {...args}
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
