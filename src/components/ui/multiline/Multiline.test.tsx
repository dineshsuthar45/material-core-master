import { render } from "@testing-library/react";
import React from "react";
import { MMultiline } from "./Multiline";
import { MultilineProps } from "./Multiline.types";

describe("Multiline", () => {
  const renderComponent = () => render(Multiline {...props} />);
  let props: MultilineProps;

  beforeEach(() => {
    props = {
      id: "id",
      label: "Multiline label",
      onChange: () => {},
    };
  });

  it("should render correctly", () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});
