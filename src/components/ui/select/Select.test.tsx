import { render } from "@testing-library/react";
import React from "react";
import { MSelect } from "./Select";
import { SelectProps } from "./Select.types";

describe("Select", () => {
  interface SelectOption {
    label: string;
    value: string;
  }
  const renderComponent = () => render(<MSelect {...props} />);
  let props: SelectProps<SelectOption>;

  beforeEach(() => {
    props = {
      id: "test-id",
      options: [],
      label: "Do you agree with T&Cs?",
      onChange: () => {},
    };
  });

  it("should render correctly", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it("render with options", () => {
    props.options = [
      {
        label: "Yes",
        value: "1",
      },
      {
        label: "No",
        value: "0",
      },
    ];
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});
