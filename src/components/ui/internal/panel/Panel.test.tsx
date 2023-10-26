import { render } from "@testing-library/react";
import React from "react";
import { PanelProps } from "./Panel.types";
import { MPanel } from "./Panel";

describe("Panel", () => {
  const renderComponent = () => render(<MPanel {...props} />);
  let props: PanelProps;

  beforeEach(() => {
    props = {
      children: <div>Test</div>,
      index: 1,
      value: 1,
    };
  });

  it("should render correctly", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
