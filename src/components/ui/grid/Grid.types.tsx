import { GridOptions } from 'ag-grid-community';

export interface GridProps<T = any> extends GridOptions<T> {
	/**
	 * Load JSON data from an API.
	 */
	loadFromURL?: string;
	/**
	 * By design, number value columns will be right aligned
	 * @default false
	 */
	skipInferNumberColumn?: boolean;
	/**
	 * By design, column headers will use two lines maximum with elipses
	 * @default false
	 */
	skipMaxTwoLineHeaderText?: boolean;

	/**
	 * By design, grid will use size comfy/compact
	 * @default comfy
	 */
	size?: 'comfy' | 'compact';
}
