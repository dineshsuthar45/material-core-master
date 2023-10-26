import { render } from "@testing-library/react";
import React from "react";
import { MFinanceInput } from "./FinanceInput";
import { FinanceInputProps } from "./FinanceInput.types";

describe("FinanceInput", () => {
  const renderComponent = () => render(<MFinanceInput {...props} />);
  let props: FinanceInputProps;

  beforeEach(() => {
    props = {
      handleSubtraction: () => {},
      handleAddition: () => {},
      handleChange: () => {},
      updateErrors: () => {},
    };
  });

  it("should render correctly", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it("render amount and initial error", () => {
    props.amount = "250000";
    props.errors = ["Random error 1", "Random error 2"];
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
