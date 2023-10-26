module.exports = (componentNames) => ({
	content: `import React from "react";
import { render, screen } from "@testing-library/react";
import { ${componentNames.pascalCase} } from "./${componentNames.pascalCase}";
import { ${componentNames.pascalCase}Props } from "./${componentNames.pascalCase}.types";

describe("${componentNames.pascalCase}", () => {
  const renderComponent = () => render(<${componentNames.pascalCase} {...props} />);
  let props: ${componentNames.pascalCase}Props;

  beforeEach(() => {
    props = {
      title: "bar"
    };
  });

  it("should render correctly", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
    
  it("should render title text correctly", () => {
    const content = "Some random context here";
    props.title = content;
    renderComponent();

    const component = screen.getByTestId("${componentNames.dashCase}");
    expect(component).toHaveTextContent(content);
  });
});
`,
	extension: `.test.tsx`,
	name: componentNames.pascalCase,
});
