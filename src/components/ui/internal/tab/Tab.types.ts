import { SxProps, TabClasses, Theme } from '@mui/material';

export interface TabProps {
	/**
	 * Override or extend the styles applied to the component.
	 */
	classes?: Partial<TabClasses>;
	/**
	 * Determines the color of the `Tab`.
	 * @default 'primary'
	 */
	color?: 'primary' | 'secondary';
	/**
	 * 	If `true`, the component is disabled.
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * 	If `true`, the keyboard focus ripple is disabled.
	 * @default false
	 */
	disableFocusRipple?: boolean;
	/**
	 * If `true`, the ripple effect is disabled.
	 * @default false
	 */
	disableRipple?: boolean;
	/**
	 * 	The icon to display.
	 */
	icon?: string;
	/**
	 * 	The position of the icon relative to the label.
	 * @default 'top'
	 */
	iconPosition?: 'bottom' | 'end' | 'start' | 'top';
	/**
	 * 	The label element.
	 */
	label: string;
	/**
	 * The system prop that allows defining system overrides as well as additional CSS styles.
	 */
	sx?: SxProps<Theme>;
	/**
	 * 	You can provide your own value. Otherwise, we fallback to the child position index.
	 */
	value: number;
	/**
	 * Tab labels appear in a single row.
	 * They can use a second line if needed.
	 * @default 'false'
	 */
	wrapped?: boolean;
}
