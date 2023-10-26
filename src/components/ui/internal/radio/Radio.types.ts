import { RadioClasses, SxProps, Theme } from '@mui/material';

declare module '@mui/material/Radio' {
	interface RadioPropsSizeOverrides {
		large: true;
	}
}

export interface RadioProps {
	/**
	 * If `true`, the component is checked.
	 * @default false
	 */
	checked?: boolean;
	/**
	 * The icon to display when the component is checked.
	 * @default <RadioButtonIcon checked />
	 */
	checkedIcon?: React.ReactNode;
	/**
	 * Override or extend the styles applied to the component.
	 */
	classes?: Partial<RadioClasses>;
	/**
	 * The color of the component.
	 * It supports both default and custom theme colors, which can be added as shown in the
	 * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
	 * @default 'secondary'
	 */
	color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default';
	/**
	 * If `true`, the component is disabled.
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * If `true`, the ripple effect is disabled.
	 * @default false
	 */
	disableRipple?: boolean;
	/**
	 * The icon to display when the component is unchecked.
	 * @default <RadioButtonIcon />
	 */
	icon?: React.ReactNode;
	/**
	 * The id of the `input` element.
	 * @default 'uuidv4()'
	 */
	id?: string;
	/**
	 * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
	 */
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
	/**
	 * Pass a ref to the `input` element.
	 */
	inputRef?: React.Ref<HTMLInputElement>;
	/**
	 * Name attribute of the `input` element
	 * @default 'uuidv4()'
	 */
	name?: string;
	/**
	 * Radio button label.
	 */
	label: string;
	/**
	 * The position of the label.
	 * @default 'end'
	 */
	labelPlacement?: 'end' | 'start';
	/**
	 * Callback fired when the state is changed.
	 * @param {boolean} value The new value.
	 */
	onChange?: (value: boolean) => void;
	/**
	 * If `true`, the `input` element is required.
	 * @default false
	 */
	required?: boolean;
	/**
	 * The size of the component.
	 * `small` is equivalent to the dense radio styling.
	 * @default 'medium'
	 */
	size?: 'small' | 'medium' | 'large';
	/**
	 * The system prop that allows defining system overrides as well as additional CSS styles.
	 */
	sx?: SxProps<Theme>;
	/**
	 * The value of the component. The DOM API casts this to a string.
	 */
	value: string;
}
