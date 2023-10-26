import { Box, Grid } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { Range, RangeKeyDict } from "react-date-range";
import { MDateRange } from "./DateRange";

export default {
  title: "Components/DateRange",
  component: MDateRange,
  tags: ["autodocs"],
  argTypes: {
    label: {
      type: "string",
    },
    onChange: {
      control: false,
    },
    disabled: {
      type: "boolean",
    },
    locale: {
      control: "select",
      options: [
        "af",
        "ar",
        "arDZ",
        "arEG",
        "arMA",
        "arSA",
        "arTN",
        "az",
        "be",
        "beTarask",
        "bg",
        "bn",
        "bs",
        "ca",
        "cs",
        "cy",
        "da",
        "de",
        "deAT",
        "el",
        "enAU",
        "enCA",
        "enGB",
        "enIE",
        "enIN",
        "enNZ",
        "enUS",
        "enZA",
        "eo",
        "es",
        "et",
        "eu",
        "faIR",
        "fi",
        "fr",
        "frCA",
        "frCH",
        "fy",
        "gd",
        "gl",
        "gu",
        "he",
        "hi",
        "hr",
        "ht",
        "hu",
        "hy",
        "id",
        "is",
        "it",
        "itCH",
        "ja",
        "jaHira",
        "ka",
        "kk",
        "km",
        "kn",
        "ko",
        "lb",
        "lt",
        "lv",
        "mk",
        "mn",
        "ms",
        "mt",
        "nb",
        "nl",
        "nlBE",
        "nn",
        "oc",
        "pl",
        "pt",
        "ptBR",
        "ro",
        "ru",
        "sk",
        "sl",
        "sq",
        "sr",
        "srLatn",
        "sv",
        "ta",
        "te",
        "th",
        "tr",
        "ug",
        "uk",
        "uz",
        "uzCyrl",
        "vi",
        "zhCN",
        "zhHK",
        "zhTW",
      ],
    },
    placeholder: {
      type: "string",
    },
    tooltipTitle: {
      type: "string",
    },
    range: {
      control: false,
    },
  },
  parameters: {
    actions: {
      argTypesRegex: "!^on.*",
    },
  },
} as Meta<typeof MDateRange>;

const Template: StoryFn<typeof MDateRange> = (args) => {
  const [state, setState] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleChange = (item: RangeKeyDict) => {
    setState(item.selection);
  };

  return (
    <div style={{ width: 300 }}>
      <MDateRange
        {...args}
        range={state}
        onChange={handleChange}
        onMenuChange={(p) => console.log("OnMenuChange", p)}
      />
    </div>
  );
};

export const Default = {
  render: Template,

  args: {
    label: "Date Range",
    disabled: false,
    locale: "enGB",
    placeholder: "Select",
  },
};

export const BusinessCases = {
  render: (args) => {
    const defaultRange: Range = {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    };

    const [state, setState] = useState<Range>(defaultRange);
    const [state1, setState1] = useState<Range>(defaultRange);
    const [state2, setState2] = useState<Range>(defaultRange);

    const handleChange = (item: RangeKeyDict) => {
      setState(item.selection);
    };

    const handleChange1 = (item: RangeKeyDict) => {
      setState1(item.selection);
    };

    const handleChange2 = (item: RangeKeyDict) => {
      setState2(item.selection);
    };

    return (
      <Box sx={{ width: "100%", margin: "auto", marginTop: 5 }}>
        <Grid container spacing={2}>
          <Grid container item xs={12}>
            <Grid item xs={4}>
              <strong>Standard</strong>
            </Grid>
            <Grid item xs={4}>
              <strong>US locale</strong>
            </Grid>
            <Grid item xs={4}>
              <strong>Disabled</strong>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item container xs={4} sx={{ padding: 1 }}>
              <MDateRange range={state} onChange={handleChange} {...args} />
            </Grid>
            <Grid item container xs={4} sx={{ padding: 1 }}>
              <MDateRange
                range={state1}
                onChange={handleChange1}
                {...args}
                locale="engUS"
              />
            </Grid>
            <Grid item container xs={4} sx={{ padding: 1 }}>
              <MDateRange
                range={state2}
                onChange={handleChange2}
                {...args}
                disabled
              />
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
