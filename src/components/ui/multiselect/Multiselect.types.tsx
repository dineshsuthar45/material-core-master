export interface MultiselectProps<T extends { label: string; value: string; checked?: boolean }> {
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
	 * Switch contents
	 */
	label?: string;
	/**
	 * The position of the label.
	 * @default 'top'
	 */
	labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
	/**
	 * Dropdown placeholder text
	 * @default 'Select'
	 */
	placeholder?: string;
	/**
	 * The menu options
	 */
	options: T[];
	/**
	 * Text to display when options are not supplied.
	 * @default 'No options supplied.'
	 */
	optionsNotSupplied?: string;
	/**
	 * Select 'All' options.
	 * @default false
	 */
	selectAll?: boolean;
	/**
	 * The size of the component. small is equivalent to the dense checkbox styling.
	 * @default 'small'
	 */
	checkboxSize?: 'small' | 'medium';
	/**
	 * Number of visible items before scrolling.
	 * @default 10
	 */
	visibleItems?: number;
	/**
	 * Callback fired when a menu item is changed.
	 * @param {T[]} options All options.
	 */
	onChange?: (options: T[]) => void;
	/**
	 * Callback fired when the component requests to be closed.
	 */
	onClose?: () => void;
	/**
	 * Callback fired when the component requests to be opened.
	 */
	onOpen?: () => void;
	/**
	 * Callback fired when the search should be triggered.
	 * @param searchInput Text input to perform the search.
	 */
	onSearch?: (searchInput: string) => void;
	/**
	 * Callback fired when the menu items scroll.
	 */
	onScroll?: (event: React.UIEvent<HTMLElement>) => void;
}
