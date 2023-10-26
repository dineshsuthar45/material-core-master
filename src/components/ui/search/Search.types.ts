import { InputProps as StandardInputProps } from '@mui/material';
import React from 'react';

export interface SearchProps {
	/**
	 * The number of milliseconds to delay the trigger search.
	 * @default 250
	 */
	debounceOnSearch?: number;
	/**
	 * If `true`, the component is disabled.
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * The id of the `input` element.
	 * @default 'uuidv4()'
	 */
	id?: string;
	/**
	 * Callback fired when the value is changed.
	 *
	 * @param {object} event The event source of the callback.
	 * You can pull out the new value by accessing `event.target.value` (string).
	 */
	onChange: StandardInputProps['onChange'];
	/**
	 * Callback fired when the reset is clicked.
	 */
	onReset: (event: React.MouseEvent<SVGSVGElement>) => void;
	/**
	 *
	 * Callback fired when the search should be triggered.
	 *
	 * @param searchInput Text input to perform the search.
	 */
	onSearch: (searchInput: string) => void;
	/**
	 * The short hint displayed in the `input` before the user enters a value.
	 * @default 'Search'
	 */
	placeholder?: string;
	/**
	 * The value of the `input` element, required for a controlled component.
	 */
	value?: string;
	/**
	 * The variant to use.
	 * @default 'filled'
	 */
	variant?: 'filled' | 'standard' | 'outlined';
	/**
	 * Refrence to the root element.
	 */
	ref?: React.Ref<HTMLDivElement>;
}
