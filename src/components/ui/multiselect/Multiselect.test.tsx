import { render } from "@testing-library/react";
import React from "react";
import { MMultiselect } from "./Multiselect";
import { MultiselectProps } from "./Multiselect.types";

describe("Multiselect component", () => {
  const renderComponent = () => render(<MMultiselect {...props} />);
  let props: MultiselectProps<any>;

  beforeEach(() => {
    props = {
      label: "Some Multiselect text here",
      options: [
        {
          label: "Juan Francisco Fernandez Rodriguez",
          value: "1",
        },
        {
          label: "Dave",
          value: "2",
        },
        {
          label: "Chris",
          value: "3",
        },
        {
          label: "Rinat",
          value: "4",
        },
        {
          label: "Artemis",
          value: "5",
        },
        {
          label: "Natali",
          value: "6",
        },
        {
          label: "Surpreet",
          value: "7",
        },
        {
          label: "Sebastian",
          value: "8",
        },
      ],
    };
  });

  it("should render correctly", () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });

  it("all options selected", () => {
    props.selectAll = true;

    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});
