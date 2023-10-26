import { render } from "@testing-library/react";
import React from "react";
import { MGrid } from "./Grid";
import { GridProps } from "./Grid.types";

describe("Grid component", () => {
  interface GripOption {
    athlete: string;
    age: number;
    country: string;
    sport: string;
    total: number;
    gold: number;
    silver: number;
    bronze: number;
  }
  const renderComponent = () => render(<MGrid<GripOption> {...props} />);
  let props: GridProps<GripOption>;

  beforeEach(() => {
    props = {};
  });

  it("should render correctly", () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});
