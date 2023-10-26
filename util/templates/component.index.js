module.exports = (componentNames) => ({
	content: `export * from "./${componentNames.pascalCase}";
export * from "./${componentNames.pascalCase}.types";
`,
	extension: `.ts`,
	name: 'index',
});
