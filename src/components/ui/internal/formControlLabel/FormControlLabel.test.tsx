import { render } from "@testing-library/react";
import React from "react";
import { MFormControlLabel } from "./FormControlLabel";
import { FormControlLabelProps } from "./FormControlLabel.types";

describe("MFormControlLabel", () => {
  const renderComponent = () => render(<MFormControlLabel {...props} />);
  let props: FormControlLabelProps;

  beforeEach(() => {
    props = {
      label: "Component label",
      tooltipProps: {
        title: "Text on hover",
        showAlways: true,
      },
      children: <div>This is a custom component</div>,
    };
  });

  it("should render correctly", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it("should render with no tooltip", () => {
    props.tooltipProps.showAlways = false;
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
