import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { MCheckbox } from "./Checkbox";
import { CheckboxProps } from "./Checkbox.types";

describe("Checkbox component", () => {
  const renderComponent = () => render(<MCheckbox {...props} />);
  let props: CheckboxProps;

  beforeEach(() => {
    props = {
      label: "I agree with T&Cs",
      id: "chk1",
      onChange: () => {},
    };
  });

  it("should render correctly", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it("disabled checkbox cannot be selected", () => {
    props.disabled = true;
    renderComponent();

    const checkbox = screen.getByRole<HTMLInputElement>("checkbox");
    expect(checkbox).toBeDisabled();
    expect(() => userEvent.click(checkbox)).toThrow();
  });
});
