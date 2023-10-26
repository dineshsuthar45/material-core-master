import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Palette } from './Palette';
import { PaletteBackground } from './PaletteBackground';
import { PaletteGradient } from './PaletteGradient';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Theme/Palette',
	component: Palette,
} as Meta<typeof Palette>;

export const TextColour = {
	args: {
		text: 'To burn with desire and keep quiet about it is the greatest punishment we can bring on ourselves.',
	},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateBackground: StoryFn<typeof PaletteBackground> = (args) => <PaletteBackground {...args} />;

export const Background = {
	render: TemplateBackground,

	args: {
		text: 'To burn with desire and keep quiet about it is the greatest punishment we can bring on ourselves.',
	},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateGradient: StoryFn<typeof PaletteGradient> = (args) => <PaletteGradient {...args} />;

export const Gradient = {
	render: TemplateGradient,

	args: {
		text: 'To burn with desire and keep quiet about it is the greatest punishment we can bring on ourselves.',
	},
};
