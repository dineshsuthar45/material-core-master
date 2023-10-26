import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Typography as TypographyComponent } from './Typography';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Theme/Typography',
	component: TypographyComponent,
} as Meta<typeof TypographyComponent>;

export const Typography = {
	args: {
		text: 'To burn with desire and keep quiet about it is the greatest punishment we can bring on ourselves.',
	},
};
