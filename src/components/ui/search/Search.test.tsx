import { render } from "@testing-library/react";
import React from "react";
import { MSearch } from "./Search";
import { SearchProps } from "./Search.types";

describe("Search", () => {
  const renderComponent = () => render(<MSearch {...props} />);
  let props: SearchProps;

  beforeEach(() => {
    props = {
      id: "search-input",
      onChange: () => {},
      onReset: () => {},
      onSearch: () => {},
    };
  });

  it("should render correctly", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
