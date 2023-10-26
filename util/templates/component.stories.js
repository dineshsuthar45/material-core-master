module.exports = (componentNames) => ({
	content: `import { Box, Grid } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { ${componentNames.pascalCase} } from "./${componentNames.pascalCase}";

export default {
    title: "Components/${componentNames.pascalCase}",
    component: ${componentNames.pascalCase},
    tags: ['autodocs'],
    parameters: {
      actions: {
        argTypesRegex: "!^on.*",
      },
    },    
} as Meta<typeof ${componentNames.pascalCase}>;

const Template: StoryFn<typeof ${componentNames.pascalCase}> = (args) => (
  <${componentNames.pascalCase} title="bar" {...args} />
);

export const Default = Template.bind({});

Default.args = {};

export const BusinessCases = (args) => (
  <Box sx={{ width: "100%", margin: "auto", marginTop: 5 }}>
    <Grid container spacing={2}>
      <Grid container item xs={12}>
        <Grid item xs={3}>
          <strong>Standard</strong>
        </Grid>
        <Grid item xs={3}>
          <strong>Configuration 1</strong>
        </Grid>
        <Grid item xs={3}>
          <strong>Configuration 2</strong>
        </Grid>
        <Grid item xs={3}>
          <strong>Configuration 3</strong>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item container xs={3}>
          <${componentNames.pascalCase} title="Standard text" {...args} />
        </Grid>
        <Grid item container xs={3}>
          <${componentNames.pascalCase} title="Configuration text 1" {...args} />
        </Grid>
        <Grid item container xs={3}>
          <div style={{ width: 100 }}>
            <${componentNames.pascalCase} title="Configuration text 2" {...args} />
          </div>
        </Grid>
        <Grid item container xs={3}>
          <${componentNames.pascalCase} title="Configuration text 3" {...args} />
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

BusinessCases.args = {
  ...Default.args
};
`,
	extension: `.stories.tsx`,
	name: componentNames.pascalCase,
});
