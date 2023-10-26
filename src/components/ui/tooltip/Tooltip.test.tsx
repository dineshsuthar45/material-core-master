import { render } from "@testing-library/react";
import React from "react";
import { MTooltip } from "./Tooltip";
import { TooltipProps } from "./Tooltip.types";

describe("Tooltip component", () => {
  const HelloWorld = React.forwardRef<HTMLButtonElement>((props, ref) => (
    <button ref={ref} {...props}>
      Hello World!
    </button>
  ));
  const renderComponent = () => {
    return render(<MTooltip {...props} />);
  };
  let props: TooltipProps;

  beforeEach(() => {
    props = {
      title: "Some tooltip text here",
      children: <HelloWorld />,
    };
  });

  it("should render correctly", () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });

  it("should render with tooltip correctly", () => {
    props.showAlways = true;
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});
