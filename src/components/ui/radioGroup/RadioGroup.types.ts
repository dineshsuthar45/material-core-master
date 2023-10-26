import { RadioProps } from '../internal/radio';

export type Options = Omit<RadioProps, 'id'> & { id: string };

export interface RadioGroupProps<T extends Options> {
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
	 * The label content.
	 */
	label: string;
	/**
	 * Name attribute of the `input` element
	 * @default 'uuidv4()'
	 */
	name?: string;
	/**
	 * Callback fired when an option is changed.
	 *
	 * @param {T} option The new selected option.
	 */
	onChange: (option: T) => void;
	/**
	 * The menu options.
	 */
	options: T[];
	/**
	 * 	Display group of elements in a compact row.
	 * @default false
	 */
	row?: boolean;
	/**
	 * The size of the component.
	 * `small` is equivalent to the dense radio styling.
	 * @default 'medium'
	 */
	size?: 'small' | 'medium' | 'large';
	/**
	 * This will select the option with the same value.
	 */
	value?: string;
}
