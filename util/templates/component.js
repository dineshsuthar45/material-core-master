module.exports = (componentNames) => ({
	content: `import React from "react";
import { ${componentNames.pascalCase}Props } from "./${componentNames.pascalCase}.types";
import "./${componentNames.pascalCase}.scss";

export const ${componentNames.pascalCase} = ({ title = "Default value here" }: ${componentNames.pascalCase}Props) => (
  <div data-testid="${componentNames.dashCase}" className="${componentNames.dashCase}-root test-class">
    {title}
  </div>
);

${componentNames.pascalCase}.defaultProps = {
  title: "Default value here",
};
`,
	extension: `.tsx`,
	name: componentNames.pascalCase,
});
