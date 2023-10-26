import { SxProps, Theme } from '@mui/material';
import { SwitchClasses } from '@mui/material/Switch';
import React from 'react';

declare module '@mui/material/Switch' {
	interface SwitchPropsColorOverrides {
		pending: true;
	}
	interface SwitchPropsSizeOverrides {
		grid: true;
	}
}

export interface SwitchProps {
	/**
	 * Switch label.
	 */
	label?: string;
	/**
	 * The position of the label.
	 * @default 'end'
	 */
	labelPlacement?: 'end' | 'start';
	/**
	 * Tooltip title. If not provided, it will default to label
	 * @default ''
	 * @fallback label property
	 */
	tooltipTitle?: string;

	/**
	 * If `true`, the component is checked.
	 * @default 'false'
	 */
	checked?: boolean;
	/**
	 * The icon to display when the component is checked.
	 */
	checkedIcon?: React.ReactNode;
	/**
	 * Override or extend the styles applied to the component.
	 */
	classes?: Partial<SwitchClasses>;
	/**
	 * The color of the component.
	 * It supports both default and custom theme colors, which can be added as shown in the
	 * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
	 * @default 'secondary'
	 */
	color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default' | 'pending';
	/**
	 * The default checked state. Use when the component is not controlled.
	 */
	defaultChecked?: boolean;
	/**
	 * If `true`, the component is disabled.
	 * @default 'false'
	 */
	disabled?: boolean;
	/**
	 * If `true`, the ripple effect is disabled.
	 * @default 'false'
	 */
	disableRipple?: boolean;
	/**
	 * If given, uses a negative margin to counteract the padding on one
	 * side (this is often helpful for aligning the left or right
	 * side of the icon with content above or below, without ruining the border
	 * size and shape).
	 * @default false
	 */
	edge?: 'start' | 'end' | false;
	/**
	 * The icon to display when the component is unchecked.
	 */
	icon?: React.ReactNode;
	/**
	 * The id of the `input` element.
	 */
	id?: string;
	/**
	 * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
	 */
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
	/**
	 * Pass a ref to the `input` element.
	 */
	inputRef?: React.Ref<any>;
	/**
	 * Callback fired when the state is changed.
	 *
	 * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
	 * You can pull out the new value by accessing `event.target.value` (string).
	 * You can pull out the new checked state by accessing `event.target.checked` (boolean).
	 */
	onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
	/**
	 * If `true`, the `input` element is required.
	 * @default 'false'
	 */
	required?: boolean;
	/**
	 * The size of the component.
	 * `small` is equivalent to the dense switch styling.
	 * @default 'medium'
	 */
	size?: 'small' | 'medium' | 'grid';
	/**
	 * The system prop that allows defining system overrides as well as additional CSS styles.
	 */
	sx?: SxProps<Theme>;
	/**
	 * The value of the component. The DOM API casts this to a string.
	 * The browser uses "on" as the default value.
	 */
	value?: unknown;
}
