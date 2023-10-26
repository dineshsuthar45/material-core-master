import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	staticDirs: [
		'../public',
		{
			from: '../src/fonts/Inter',
			to: 'fonts/Inter',
		},
	],
	docs: {
		autodocs: 'tag',
	},
};
export default config;
