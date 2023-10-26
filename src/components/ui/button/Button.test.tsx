import { render } from "@testing-library/react";
import React from "react";
import { MButton } from "./Button";
import { ButtonProps } from "./Button.types";

describe("Button component", () => {
  const renderComponent = () => render(<MButton {...props} />);
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      label: "Place Order",
    };
  });

  it("should render correctly", () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});
