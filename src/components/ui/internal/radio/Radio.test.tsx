import { render } from "@testing-library/react";
import React from "react";
import { RadioProps } from "./Radio.types";
import { MRadio } from "./Radio";

describe("MRadio", () => {
  const renderComponent = () => render(<MRadio {...props} />);
  let props: RadioProps;

  beforeEach(() => {
    props = {
      label: "label",
      value: "value",
      id: "id",
      name: "name",
    };
  });

  it("should render correctly", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
