module.exports = (componentNames) => ({
	content: `.${componentNames.dashCase}-root {
  &.test-class {
    color: red;
  }
}
`,
	extension: `.scss`,
	name: componentNames.pascalCase,
});
