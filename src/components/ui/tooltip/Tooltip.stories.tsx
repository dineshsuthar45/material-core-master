import { Box, Button, Grid } from "@mui/material";
import { StoryObj, Meta, StoryFn } from "@storybook/react";
import React from "react";
import { MTooltip } from "./Tooltip";

export default {
  title: "Components/Tooltip",
  component: MTooltip,
  tags: ["autodocs"],
  argTypes: {
    title: {
      type: {
        name: "string",
      },
    },
    arrow: {
      type: {
        name: "boolean",
      },
    },
    describeChild: {
      type: {
        name: "boolean",
      },
    },
    disableFocusListener: {
      type: {
        name: "boolean",
      },
    },
    disableHoverListener: {
      type: {
        name: "boolean",
      },
    },
    disableInteractive: {
      type: {
        name: "boolean",
      },
    },
    disableTouchListener: {
      type: {
        name: "boolean",
      },
    },
    enterDelay: {
      type: {
        name: "number",
      },
    },
    enterNextDelay: {
      type: {
        name: "number",
      },
    },
    enterTouchDelay: {
      type: {
        name: "number",
      },
    },
    followCursor: {
      type: {
        name: "boolean",
      },
    },
    id: {
      type: {
        name: "string",
      },
    },
    leaveDelay: {
      type: {
        name: "number",
      },
    },
    leaveTouchDelay: {
      type: {
        name: "number",
      },
    },
    open: {
      type: {
        name: "boolean",
      },
    },
    placement: {
      control: "inline-radio",
      options: [
        "top",
        "bottom",
        "left",
        "right",
        "bottom-end",
        "bottom-start",
        "left-end",
        "left-start",
        "right-end",
        "right-start",
        "top-end",
        "top-start",
      ],
    },
    showAlways: {
      type: {
        name: "boolean",
      },
    },
  },
  parameters: {
    actions: {
      argTypesRegex: "!^on.*",
    },
    controls: {
      exclude:
        /children|classes|components|componentsProps|describeChild|onClose|onOpen|PopperComponent|PopperProps|ref|sx|TransitionComponent|TransitionProps/g,
    },
  },
} as Meta<typeof MTooltip>;

const LoremIpsum = (
  text: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam illum,
repellendus pariatur repellat quis sint mollitia optio accusantium nesciunt
libero sit cupiditate tenetur accusamus impedit corrupti, dolores molestiae
non. Expedita.`
) => <span>{text}</span>;

export const Default: StoryObj<typeof MTooltip> = {
  args: {
    title: "Tooltip text sample here",
    placement: "bottom",
    children: LoremIpsum(),
  },
};

export const BusinessCases = {
  render: (args) => (
    <Box sx={{ width: "100%", margin: "auto", marginTop: 5 }}>
      <Grid container spacing={2}>
        <Grid container item xs={12}>
          <Grid item xs={3}>
            <strong>Standard</strong>
          </Grid>
          <Grid item xs={3}>
            <strong>Force tooltip display</strong>
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
            <MTooltip title="Tooltip example" {...args}>
              {LoremIpsum("Text with no tooltip as there is no text overflow")}
            </MTooltip>
          </Grid>
          <Grid item container xs={3}>
            <MTooltip
              title="Text with forced tooltip display"
              showAlways
              {...args}
            >
              {LoremIpsum("Text with forced tooltip display")}
            </MTooltip>
          </Grid>
          <Grid item container xs={3}>
            <div style={{ width: 100 }}>
              <MTooltip title="Tooltip label with a very long text" {...args}>
                {LoremIpsum("Tooltip label with a very long text")}
              </MTooltip>
            </div>
          </Grid>
          <Grid item container xs={3}>
            <MTooltip title="Different tooltip info" showAlways {...args}>
              {LoremIpsum("Text with different tooltip information")}
            </MTooltip>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  ),

  args: {
    placement: "bottom",
    children: LoremIpsum(),
  },
};

export const Placements = {
  render: (args) => (
    <div>
      <Box sx={{ width: 500, margin: "auto", marginTop: 5 }}>
        <Grid container justifyContent="center">
          <Grid item container justifyContent="center">
            <MTooltip placement="top-start" {...args}>
              <Button>top-start</Button>
            </MTooltip>
            <MTooltip placement="top" {...args}>
              <Button>top</Button>
            </MTooltip>
            <MTooltip placement="top-end" {...args}>
              <Button>top-end</Button>
            </MTooltip>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={6}>
            <MTooltip placement="left-start" {...args}>
              <Button>left-start</Button>
            </MTooltip>
            <MTooltip placement="left" {...args}>
              <Button>left</Button>
            </MTooltip>
            <MTooltip placement="left-end" {...args}>
              <Button>left-end</Button>
            </MTooltip>
          </Grid>
          <Grid item container xs={6} alignItems="flex-end" direction="column">
            <Grid item>
              <MTooltip placement="right-start" {...args}>
                <Button>right-start</Button>
              </MTooltip>
            </Grid>
            <Grid item>
              <MTooltip placement="right" {...args}>
                <Button>right</Button>
              </MTooltip>
            </Grid>
            <Grid item>
              <MTooltip placement="right-end" {...args}>
                <Button>right-end</Button>
              </MTooltip>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item container justifyContent="center">
            <MTooltip placement="bottom-start" {...args}>
              <Button>bottom-start</Button>
            </MTooltip>
            <MTooltip placement="bottom" {...args}>
              <Button>bottom</Button>
            </MTooltip>
            <MTooltip placement="bottom-end" {...args}>
              <Button>bottom-end</Button>
            </MTooltip>
          </Grid>
        </Grid>
      </Box>
    </div>
  ),

  args: {
    title: "Tooltip text sample here",
    children: LoremIpsum(),
    showAlways: true,
  },
};
