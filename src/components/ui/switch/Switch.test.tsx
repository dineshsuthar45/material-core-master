import { render } from "@testing-library/react";
import React from "react";
import { MSwitch } from "./Switch";
import { SwitchProps } from "./Switch.types";

describe("Switch component", () => {
  const renderComponent = () => render(<MSwitch {...props} />);
  let props: SwitchProps;

  beforeEach(() => {
    props = {
      label: "Place Order",
      id: "sldr1",
    };
  });

  it("should render correctly", () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});
