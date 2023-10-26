import { render } from "@testing-library/react";
import React from "react";
import { MTextfield } from "./Textfield";
import { TextfieldProps } from "./Textfield.types";

describe("Textfield", () => {
  const renderComponent = () => render(<MTextfield {...props} />);
  let props: TextfieldProps;

  beforeEach(() => {
    props = {
      id: "txt1",
      label: "Textfield label",
      onChange: () => {},
    };
  });

  it("should render correctly", () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});
