import { render } from "@testing-library/react";
import React from "react";
import { MDateRange } from "./DateRange";
import { DateRangeProps } from "./DateRange.types";

describe("DateRange", () => {
  const renderComponent = () => render(<MDateRange {...props} />);
  let props: DateRangeProps;

  beforeEach(() => {
    props = {
      label: "Date Picker",
      onChange: () => {},
      range: {
        startDate: new Date(2022, 11, 16),
        endDate: new Date(2022, 11, 16),
        key: "selection",
      },
    };
  });

  it("should render correctly", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
