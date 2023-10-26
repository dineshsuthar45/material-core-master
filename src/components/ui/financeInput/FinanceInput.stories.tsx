import { Box, Grid } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { MButton } from "../button";
import { MFinanceInput } from "./FinanceInput";

export default {
  title: "Components/FinanceInput",
  component: MFinanceInput,
  tags: ["autodocs"],
  argTypes: {
    allowDecrease: {
      type: "boolean",
    },
    allowIncrease: {
      type: "boolean",
    },
    allowCopyToClipboard: {
      type: "boolean",
    },
    label: {
      type: "string",
    },
    labelPlacement: {
      control: "inline-radio",
      options: ["top", "bottom"],
    },
    tooltipTitle: {
      type: "string",
    },
    amount: {
      type: "string",
    },
    decimals: {
      type: "number",
    },
    decimalSeparator: {
      type: "string",
    },
    disabled: {
      type: "boolean",
    },
    displayTrailingZeros: {
      type: "boolean",
    },
    invalidNumberMessage: {
      type: "string",
    },
    placeholder: {
      type: "string",
    },
    thousandSeparator: {
      type: "string",
    },
  },
  parameters: {
    actions: {
      argTypesRegex: "!^on.*",
    },
  },
} as Meta<typeof MFinanceInput>;

const Template: StoryFn<typeof MFinanceInput> = (args) => {
  const [state, setState] = useState<string>(args.amount ?? "");
  const [errors, setErrors] = useState<string[]>(args.errors ?? []);

  const amendBy = 1000;

  useEffect(() => {
    setState(args.amount ?? "");
  }, [args.amount]);

  useEffect(() => {
    setErrors(args.errors ?? []);
  }, [args.errors]);

  const handleAddition = () => {
    setState((Number(state) + amendBy).toString());
  };

  const handleSubtraction = () => {
    setState((Number(state) - amendBy).toString());
  };

  const handleChange = (amount: string) => {
    setState(amount);
  };

  const handleUpdateErrors = (newErrors: string[]) => {
    setErrors([...newErrors]);
  };

  return (
    <div style={{ width: 150, marginTop: 30 }}>
      <MFinanceInput
        {...args}
        amount={state}
        errors={errors}
        handleSubtraction={handleSubtraction}
        handleAddition={handleAddition}
        handleChange={handleChange}
        updateErrors={handleUpdateErrors}
      />
      <div
        className="hide-on-docs"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          borderTop: "1px dashed grey",
          margin: 10,
          width: "100%",
        }}
      >
        <h1>This is not part of the component</h1>
        <MButton
          label="Clear errors"
          color="primary"
          variant="contained"
          onClick={() => setErrors([])}
        />
      </div>
    </div>
  );
};

export const Default = {
  render: Template,

  args: {
    allowDecrease: true,
    allowIncrease: true,
    allowCopyToClipboard: false,
    label: "Bond (M)",
    tooltipTitle: "",
    labelPlacement: "top",
    placeholder: "Size",
    decimals: 2,
    decimalSeparator: ".",
    disabled: false,
    displayTrailingZeros: false,
    feedbackMessages: {
      maximumDecimalMessage: "Maximum of {decimals} decimals reached.",
      invalidNumberMessage: "Please enter a valid number. i.e. {validNumber}",
      copyToClipboardMessage: "Number copied to clipboard.",
    },
    thousandSeparator: ",",
    errors: [],
    invalidInputs: [],
  },
};

export const BusinessCases = (args) => {
  const [amount, setAmount] = useState<string>("");
  const [amount1, setAmount1] = useState<string>("");
  const [amount2, setAmount2] = useState<string>("");
  const [amount3, setAmount3] = useState<string>("");
  const [amount4, setAmount4] = useState<string>("");
  const [amount5, setAmount5] = useState<string>("");
  const [amount6, setAmount6] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const [errors1, setErrors1] = useState<string[]>([]);
  const [errors2, setErrors2] = useState<string[]>([
    "Test error 1.",
    "Test error 2.",
  ]);
  const [errors3, setErrors3] = useState<string[]>([]);
  const [errors4, setErrors4] = useState<string[]>([]);
  const [errors5, setErrors5] = useState<string[]>([]);
  const [errors6, setErrors6] = useState<string[]>([]);

  useEffect(() => {
    setAmount(args.amount ?? "");
    setAmount1(args.amount ?? "");
    setAmount2(args.amount ?? "100");
    setAmount3(args.amount ?? "250000.1234");
    setAmount4(args.amount ?? "");
    setAmount5(args.amount ?? "100");
    setAmount6(args.amount ?? "");
  }, [args.amount]);

  useEffect(() => {
    const storyErrors: string[] = args.errors ?? [];
    setErrors([...errors, ...storyErrors] ?? []);
    setErrors1([...errors1, ...storyErrors] ?? []);
    setErrors2([...errors2, ...storyErrors] ?? []);
    setErrors3([...errors3, ...storyErrors] ?? []);
    setErrors4([...errors4, ...storyErrors] ?? []);
    setErrors5([...errors5, ...storyErrors] ?? []);
    setErrors6([...errors6, ...storyErrors] ?? []);
  }, [args.errors]);

  const clearAllErrors = () => {
    setErrors([]);
    setErrors1([]);
    setErrors2(["Test error 1.", "Test error 2."]);
    setErrors3([]);
    setErrors4([]);
    setErrors5([]);
    setErrors6([]);
  };

  return (
    <>
      <Box sx={{ width: "100%", margin: "16px" }}>
        <Grid container spacing={2}>
          <Grid container spacing={2}>
            <Grid container item xs={12}>
              <Grid item xs={4}>
                <strong>Standard (amend by 10)</strong>
              </Grid>
              <Grid item xs={4}>
                <strong>Disabled</strong>
              </Grid>
              <Grid item xs={4}>
                <strong>Very custom finance input</strong>
                <ul>
                  <li>5 decimals</li>
                  <li>Dots for thousand separator</li>
                  <li>Comma for decimal separator</li>
                  <li>Increase by 100</li>
                  <li>Decrease by 10</li>
                </ul>
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item container xs={4}>
                <MFinanceInput
                  {...args}
                  amount={amount}
                  errors={errors}
                  handleSubtraction={() =>
                    setAmount((Number(amount) - 10).toString())
                  }
                  handleAddition={() =>
                    setAmount((Number(amount) + 10).toString())
                  }
                  handleChange={(newAmount) => setAmount(newAmount)}
                  updateErrors={(newErrors) => setErrors([...newErrors])}
                />
              </Grid>
              <Grid item container xs={4}>
                <MFinanceInput
                  {...args}
                  amount={amount1}
                  errors={errors1}
                  disabled
                  handleSubtraction={() =>
                    setAmount1((Number(amount1) - 10).toString())
                  }
                  handleAddition={() =>
                    setAmount1((Number(amount1) + 10).toString())
                  }
                  handleChange={(newAmount) => setAmount1(newAmount)}
                  updateErrors={(newErrors) => setErrors1([...newErrors])}
                />
              </Grid>
              <Grid item container xs={4}>
                <MFinanceInput
                  {...args}
                  thousandSeparator="."
                  decimalSeparator=","
                  decimals={4}
                  amount={amount3}
                  errors={errors3}
                  handleSubtraction={() =>
                    setAmount3((Number(amount3) - 10).toString())
                  }
                  handleAddition={() =>
                    setAmount3((Number(amount3) + 100).toString())
                  }
                  handleChange={(newAmount) => setAmount3(newAmount)}
                  updateErrors={(newErrors) => setErrors3([...newErrors])}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2} marginTop={2}>
            <Grid container item xs={12}>
              <Grid item xs={4}>
                <strong>Pre and Post options</strong>
              </Grid>
              <Grid item xs={4}>
                <strong>With errors (amend by 100)</strong>
              </Grid>
              <Grid item xs={4}>
                <strong>
                  Integration mode (perfect for AG-Grid cell integration)
                </strong>
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item container xs={4} sx={{ height: 20 }}>
                <MFinanceInput
                  {...args}
                  label=""
                  amount={amount5}
                  errors={errors5}
                  handleSubtraction={() =>
                    setAmount5((Number(amount5) - 10).toString())
                  }
                  handleAddition={() =>
                    setAmount5((Number(amount5) + 100).toString())
                  }
                  handleChange={(newAmount) => setAmount5(newAmount)}
                  updateErrors={(newErrors) => setErrors5([...newErrors])}
                  preTextOnViewMode={() => "+"}
                  postTextOnViewMode={() => "%"}
                />
              </Grid>
              <Grid item container xs={4}>
                <MFinanceInput
                  {...args}
                  amount={amount2}
                  errors={errors2}
                  handleSubtraction={() =>
                    setAmount2((Number(amount2) - 100).toString())
                  }
                  handleAddition={() =>
                    setAmount2((Number(amount2) + 100).toString())
                  }
                  handleChange={(newAmount) => setAmount2(newAmount)}
                  updateErrors={(newErrors) => setErrors2([...newErrors])}
                />
              </Grid>
              <Grid item container xs={4}>
                <MFinanceInput
                  {...args}
                  label=""
                  amount={amount4}
                  errors={errors4}
                  integrationMode
                  handleSubtraction={() =>
                    setAmount4((Number(amount4) - 10).toString())
                  }
                  handleAddition={() =>
                    setAmount4((Number(amount4) + 100).toString())
                  }
                  handleChange={(newAmount) => setAmount4(newAmount)}
                  updateErrors={(newErrors) => setErrors4([...newErrors])}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2} marginTop={2}>
            <Grid container item xs={12}>
              <Grid item xs={4}>
                <strong>
                  With auto feedback when amount is not 5 or empty
                </strong>
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item container xs={4} sx={{ height: 20 }}>
                <MFinanceInput
                  {...args}
                  label=""
                  amount={amount6}
                  errors={errors6}
                  handleSubtraction={() =>
                    setAmount6((Number(amount6) - 100).toString())
                  }
                  handleAddition={() =>
                    setAmount6((Number(amount6) + 100).toString())
                  }
                  handleChange={(newAmount) => {
                    setAmount6(newAmount);
                    if (newAmount && newAmount != "5") {
                      setErrors6(["The correct number is 5!"]);
                    } else {
                      setErrors6([...errors6]);
                    }
                  }}
                  updateErrors={(newErrors) => setErrors6([...newErrors])}
                  autoFeedback
                  debounceOnAutoFeedback={300}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <div
        className="hide-on-docs"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          borderTop: "1px dashed grey",
          margin: 10,
          width: "100%",
        }}
      >
        <h1>This is not part of the component</h1>
        <MButton
          label="Clear errors"
          color="primary"
          variant="contained"
          onClick={clearAllErrors}
        />
      </div>
    </>
  );
};

BusinessCases.args = {
  ...Default.args,
};
