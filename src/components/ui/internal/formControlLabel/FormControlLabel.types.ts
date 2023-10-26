import { TooltipProps } from '../../tooltip';

export interface FormControlLabelProps {
	/**
	 * Component label
	 */
	label?: string;
	/**
	 * The position of the label.
	 * @default 'top'
	 */
	labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
	/**
	 * Tooltip props
	 */
	tooltipProps: Omit<TooltipProps, 'children'>;
	/**
	 * If `true`, the component is disabled.
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * Tooltip reference element.
	 */
	children: React.ReactElement<any, any>;
}
