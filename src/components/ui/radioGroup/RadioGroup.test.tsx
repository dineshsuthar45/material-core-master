import { render } from "@testing-library/react";
import React from "react";
import { MRadioGroup } from "./RadioGroup";
import { RadioGroupProps } from "./RadioGroup.types";

describe("RadioGroup", () => {
  interface OptionInterface {
    id: string;
    value: string;
    label: string;
  }
  const renderComponent = () => render(<MRadioGroup {...props} />);
  let props: RadioGroupProps<OptionInterface>;

  beforeEach(() => {
    props = {
      label: "label",
      name: "test-group-name",
      options: [],
      disabled: false,
      disableRipple: false,
      onChange: () => {},
    };
  });

  it("should render correctly", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it("render correctly with options", () => {
    props.options = [
      {
        id: "1",
        value: "1",
        label: "1",
      },
      {
        id: "2",
        value: "2",
        label: "2",
      },
    ];
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
