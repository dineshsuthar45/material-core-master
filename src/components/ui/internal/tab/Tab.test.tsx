import { render } from "@testing-library/react";
import React from "react";
import { MTab } from "./Tab";
import { TabProps } from "./Tab.types";

describe("Tab", () => {
  const renderComponent = () => render(<MTab {...props} />);
  let props: TabProps;

  beforeEach(() => {
    props = {
      disabled: false,
      disableFocusRipple: false,
      disableRipple: false,
      value: 1,
      wrapped: false,
      label: "Tab label",
    };
  });

  it("should render correctly", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
