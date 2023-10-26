import { render } from "@testing-library/react";
import React from "react";
import { MSlider } from "./Slider";
import { SliderProps } from "./Slider.types";

describe("Slider component", () => {
  const renderComponent = () => render(<MSlider {...props} />);
  let props: SliderProps;

  beforeEach(() => {
    props = {};
  });

  it("should render correctly", () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});
