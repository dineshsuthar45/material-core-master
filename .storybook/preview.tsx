import React from 'react';
import { CssBaseline, ScopedCssBaseline, ThemeProvider, styled } from '@mui/material';
import type { Decorator, Preview } from '@storybook/react';
import { themes as MyThemes } from '../src/theme';

interface IThemeBlockComponentProps {
	left?: boolean;
	fill?: boolean;
}

const ThemeBlock = styled('div', {
	// Configure which props should be forwarded on DOM
	shouldForwardProp: (prop) => prop !== 'left' && prop !== 'fill',
	name: 'ThemeBlock',
	slot: 'Root',
	// We are specifying here how the styleOverrides are being applied based on props
	overridesResolver: (props, styles) => [styles.root],
})<IThemeBlockComponentProps>(({ theme, left, fill }) => ({
	position: 'absolute',
	top: 0,
	left: left || fill ? 0 : '50vw',
	borderRight: left ? '1px solid #202020' : 'none',
	right: left ? '50vw' : 0,
	width: fill ? '100vw' : '50vw',
	height: '100vh',
	bottom: 0,
	overflow: 'auto',
	padding: '1rem',
	color: theme.palette.text.primary,
	background: theme.palette.background.default,
}));

const getTheme = (themeName) => {
	return MyThemes[themeName];
};

const withThemeProvider: Decorator = (Story, context) => {
	const theme = context.parameters.theme || context.globals.theme;

	switch (theme) {
		case 'side-by-side': {
			return (
				<>
					<ThemeProvider theme={getTheme('light')}>
						<ScopedCssBaseline />
						<ThemeBlock left>
							<Story />
						</ThemeBlock>
					</ThemeProvider>
					<ThemeProvider theme={getTheme('dark')}>
						<ScopedCssBaseline />
						<ThemeBlock>
							<Story />
						</ThemeBlock>
					</ThemeProvider>
				</>
			);
		}
		default: {
			return (
				<ThemeProvider theme={getTheme(theme)}>
					<CssBaseline />
					<Story />
				</ThemeProvider>
			);
		}
	}
};

const preview: Preview = {
	decorators: [withThemeProvider],
	globalTypes: {
		theme: {
			description: 'Global theme for components',
			defaultValue: 'light',
			toolbar: {
				// The label to show for this toolbar item
				title: 'Theme',
				icon: 'circlehollow',
				// Array of plain string values or MenuItem shape (see below)
				items: [
					{ value: 'light', icon: 'circlehollow', title: 'light' },
					{ value: 'dark', icon: 'circle', title: 'dark' },
					{ value: 'side-by-side', icon: 'sidebar', title: 'side by side' },
				],
				showName: true,
				// Change title based on selected value
				dynamicTitle: true,
			},
		},
	},
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			expanded: true,
			sort: 'requiredFirst',
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
