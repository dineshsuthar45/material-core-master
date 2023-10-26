import { render } from "@testing-library/react";
import React from "react";
import { MTimer } from "./Timer";
import { TimerProps } from "./Timer.types";

describe("Timer", () => {
  const renderComponent = () => render(<MTimer {...props} />);
  let props: TimerProps;

  beforeEach(() => {
    props = {
      expiryTime: new Date().getTime(),
      size: 120,
      breakpoints: [],
    };
  });

  it("should render correctly", () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});
