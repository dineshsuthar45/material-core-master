module.exports = (componentNames) => ({
	content: `export interface ${componentNames.pascalCase}Props {
  title: string;
}
`,
	extension: `.types.ts`,
	name: componentNames.pascalCase,
});
