import { KeyboardEvent } from 'react';
import { InputProps as StandardInputProps } from '@mui/material';

export interface FinanceInputProps {
	/**
	 * Decrease button will be displayed.
	 * @default true
	 */
	allowDecrease?: boolean;
	/**
	 * Increase button will be displayed.
	 * @default true
	 */
	allowIncrease?: boolean;
	/**
	 * Allow to copy the amount to the clipboard when double click on the amount.
	 * @default 'false'
	 */
	allowCopyToClipboard?: boolean;
	/**
	 * Amount for the component.
	 */
	amount?: string;
	/**
	 * Gives feedback after 0.3 seconds.
	 * @default 'false'
	 */
	autoFeedback?: boolean;
	/**
	 * The number of milliseconds to delay the trigger autofeedback.
	 * @default 300
	 */
	debounceOnAutoFeedback?: number;
	/**
	 * Finance input label
	 */
	label?: string;
	/**
	 * The position of the label.
	 * @default 'top'
	 */
	labelPlacement?: 'top' | 'bottom';
	/**
	 * Tooltip title. If not provided, it will default to label
	 * @default ''
	 * @fallback label property
	 */
	tooltipTitle?: string;
	/**
	 * Handle decrement amount event.
	 */
	handleSubtraction: () => void;
	/**
	 * Handle increment amount event.
	 */
	handleAddition: () => void;
	/**
	 * Event triggered when the input change the value.
	 * @param amount The new amount
	 */
	handleChange: (amount: string) => void;
	/**
	 * Feedback when the maximum decimal digits are reached.
	 * @defualt {
	 *    maximumDecimalMessage: 'Maximum of {decimals} decimals reached.',
	 *    invalidNumberMessage: 'Please enter a valid number. i.e. {validNumber}',
	 *    copyToClipboardMessage: 'Number copied to clipboard.',
	 * }
	 */
	feedbackMessages?: Feedback;
	/**
	 * Perfect usage for components where this component is encapsulated it (like AG-Grid cell).
	 * It removes most of the styles and feedback messages.
	 * @default false
	 */
	integrationMode?: boolean;
	/**
	 * Display/hide trailing zeros.
	 * @default 'false'
	 */
	displayTrailingZeros?: boolean;
	/**
	 * Placeholder when there is no amount entered.
	 * @default 'Size'
	 */
	placeholder?: string;
	/**
	 * Number of decimal.
	 * @default '2'
	 */
	decimals?: number;
	/**
	 * Decimal separator.
	 * @default '.'
	 */
	decimalSeparator?: string;
	/**
	 * If `true`, the component is disabled.
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * Component error list.
	 * @default '[]'
	 */
	errors?: string[];
	/**
	 * Do not allow invalid characters to be inputed.
	 * @default '[]'
	 */
	invalidInputs?: string[];
	/**
	 * Allows to have preText on view mode.
	 * @param amount Amount to perform checks on.
	 * @default (amount) => '';
	 */
	preTextOnViewMode?: (amount: string) => string;
	/**
	 * If `true` number appers with thousand separator.
	 * @default true
	 */
	showThousandSeperator?: boolean;
	/**
	 * Allows to have postText on view mode.
	 * @param amount Amount to perform checks on.
	 * @default (amount) => '';
	 */
	postTextOnViewMode?: (amount: string) => string;
	/**
	 * Event triggered when the component detects an error.
	 *  @default () => '';
	 * @param errors All errors
	 */
	updateErrors: (errors: string[]) => void;
	/**
	 * Thousand separator.
	 * @default ','
	 */
	thousandSeparator?: string;
	/**
	 * Event triggered when the component is on edit mode.
	 */
	onEditModeOn?: () => void;
	/**
	 * Event triggered when the component is not on edit mode anymore.
	 */
	onEditModeOff?: () => void;
	/**
	 * Event triggered when there is a key down.
	 * @param event Keyboard event
	 */
	onKeyEvent?: (event: KeyboardEvent<HTMLElement>) => void;
}

export interface Feedback {
	maximumDecimalMessage: string;
	invalidNumberMessage: string;
	copyToClipboardMessage: string;
}
