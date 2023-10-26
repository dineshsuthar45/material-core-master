import { render } from "@testing-library/react";
import React from "react";
import { MTabs } from "./Tabs";
import { TabsProps } from "./Tabs.types";

describe("Tabs", () => {
  const renderComponent = () => render(<MTabs {...props} />);
  let props: TabsProps;

  beforeEach(() => {
    props = {
      options: [],
      onChange: () => {},
      value: 0,
    };
  });

  it("should render correctly", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it("should render correctly with options", () => {
    props.options = [
      {
        value: 0,
        label: "Tab label 1",
      },
      {
        value: 1,
        label: "Tab label 2",
      },
    ];
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
