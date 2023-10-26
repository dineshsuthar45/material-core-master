import {
	FormHelperTextProps,
	InputBaseProps,
	InputLabelProps,
	InputProps as StandardInputProps,
	SxProps,
	TextFieldClasses,
	Theme,
} from '@mui/material';

export interface TextfieldProps {
	/**
	 * This prop helps users to fill forms faster, especially on mobile devices.
	 * The name can be confusing, as it's more like an autofill.
	 * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
	 */
	autoComplete?: string;
	/**
	 * If `true`, the `input` element is focused during the first mount.
	 * @default false
	 */
	autoFocus?: boolean;
	/**
	 * Override or extend the styles applied to the component.
	 */
	classes?: Partial<TextFieldClasses>;
	/**
	 * The color of the component.
	 * It supports both default and custom theme colors, which can be added as shown in the
	 * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
	 * @default 'primary'
	 */
	color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

	/**
	 * The default value. Use when the component is not controlled.
	 */
	defaultValue?: unknown;
	/**
	 * If `true`, the component is disabled.
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * Trailing adornment for this input.
	 */
	endAdornment?: React.ReactNode;
	/**
	 * If `true`, the label is displayed in an error state.
	 * @default false
	 */
	error?: boolean;
	/**
	 * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
	 */
	FormHelperTextProps?: Partial<FormHelperTextProps>;
	/**
	 * If `true`, the input will take up the full width of its container.
	 * @default false
	 */
	fullWidth?: boolean;
	/**
	 * The helper text content.
	 */
	helperText?: React.ReactNode;
	/**
	 * The id of the `input` element.
	 * Use this prop to make `label` and `helperText` accessible for screen readers.
	 * @default 'uuidv4()'
	 */
	id?: string;
	/**
	 * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
	 * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
	 */
	InputLabelProps?: Partial<InputLabelProps>;
	/**
	 * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
	 */
	inputProps?: InputBaseProps['inputProps'];
	/**
	 * Props applied to the Input element.
	 * It will be a [`FilledInput`](/material-ui/api/filled-input/),
	 * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
	 * component depending on the `variant` prop value.
	 */
	InputProps?: Partial<StandardInputProps>;
	/**
	 * Pass a ref to the `input` element.
	 */
	inputRef?: React.Ref<any>;
	/**
	 * The label content.
	 */
	label?: React.ReactNode;
	/**
	 * If dense or normal, will adjust vertical spacing of this and contained components.
	 * @default 'none'
	 */
	margin?: 'dense' | 'none' | 'normal';
	/**
	 * Name attribute of the `input` element.
	 */
	name?: string;
	/**
	 * Callback fired when the value is changed.
	 *
	 * @param {object} event The event source of the callback.
	 * You can pull out the new value by accessing `event.target.value` (string).
	 */
	onChange: StandardInputProps['onChange'];
	/**
	 * The short hint displayed in the `input` before the user enters a value.
	 */
	placeholder?: string;
	/**
	 * If `true`, the label is displayed as required and the `input` element is required.
	 * @default false
	 */
	required?: boolean;
	/**
	 * The size of the component.
	 * @default 'medium'
	 */
	size?: 'small' | 'medium';
	/**
	 * Leading adornment for this input.
	 */
	startAdornment?: React.ReactNode;
	/**
	 * The system prop that allows defining system overrides as well as additional CSS styles.
	 */

	sx?: SxProps<Theme>;
	/**
	 * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
	 * @default 'text'
	 */
	type?: 'text' | 'tel' | 'number' | 'password' | 'url';
	/**
	 * The value of the `input` element, required for a controlled component.
	 */
	value?: string;
	/**
	 * The variant to use.
	 * @default 'outlined'
	 */
	variant?: 'standard' | 'outlined' | 'filled';
}
