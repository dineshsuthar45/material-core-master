import { SxProps, TabsActions, TabsClasses, Theme } from '@mui/material';
import React from 'react';
import { TabProps } from '../internal/tab/Tab.types';

export interface TabOption extends TabProps {
	view?: React.ReactNode;
}
export interface TabsProps {
	/**
	 * Callback fired when the component mounts. This is useful when you want to trigger an action programmatically. It supports two actions: `updateIndicator()` and `updateScrollButtons()`
	 */
	action?: React.Ref<TabsActions>;
	/**
	 * 	If true, the scroll buttons aren't forced hidden on mobile. By default the scroll buttons are hidden on mobile and takes precedence over `scrollButtons`.
	 * @default false
	 */
	allowScrollButtonsMobile?: boolean;
	/*
	 * The label for the Tabs as a string.
	 **/
	ariaLabel?: string;
	/**
	 * An id or list of ids separated by a space that label the Tabs.
	 */
	ariaLabelledby?: string;
	/**
	 * If `true`, the tabs are centered. This prop is intended for large views.
	 * @default false
	 */
	centered?: boolean;
	/**
	 * 	The content of the component.
	 */
	children?: React.ReactNode;
	/**
	 * Override or extend the styles applied to the component.
	 */
	classes?: Partial<TabsClasses>;
	/**
	 * Determines the color of the `Tab`.
	 * @default 'primary'
	 */
	color?: 'primary' | 'secondary';
	/**
	 * The component used for the root node. Either a string to use a HTML element or a component.
	 */
	component?: React.ElementType;
	/**
	 * If `true`, the component is disabled.
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * Maximum height for the component.
	 */
	maxHeight?: number;
	/**
	 * Callback fired when the selected tab is changed.
	 *
	 * @param {number} selectedTab The selected tab.
	 */
	onChange: (selectedTab: number) => void;
	/**
	 * The component orientation (layout flow direction).
	 * @default 'horizontal'
	 */
	orientation?: 'horizontal' | 'vertical';
	/**
	 * The menu options.
	 */
	options: TabOption[];
	/**
	 * 	The component used to render the scroll buttons.
	 * @default 'TabScrollButton'
	 */
	ScrollButtonComponent?: React.ElementType;
	/**
	 * Determine behavior of scroll buttons when tabs are set to scroll:
	 * - auto will only present them when not all the items are visible.
	 * - true will always present them. - false will never present them.
	 * @default 'auto'
	 */
	scrollButtons?: 'auto' | false | true;
	/**
	 * If true the selected tab changes on focus. Otherwise it only changes on activation.
	 * @default false
	 */
	selectionFollowsFocus?: boolean;
	/**
	 * The size of the tabs.
	 * @default 'medium'
	 */
	size?: 'small' | 'medium';
	/**
	 * The system prop that allows defining system overrides as well as additional CSS styles.
	 */
	sx?: SxProps<Theme>;
	/**
	 * Props applied to the tab indicator element.
	 */
	TabIndicatorProps?: object;
	/**
	 * Props applied to the `TabScrollButton` element.
	 */
	TabScrollButtonProps?: object;
	/**
	 * The value of the currently selected Tab.
	 */
	value?: number;
	/**
	 * Determines additional display behavior of the tabs:
	 * - scrollable will invoke scrolling properties and allow for horizontally scrolling (or swiping) of the tab bar.
	 * -fullWidth will make the tabs grow to use all the available space, which should be used for small views, like on mobile.
	 * - standard will render the default state.
	 * @default 'standard'
	 */
	variant?: 'fullWidth' | 'scrollable' | 'standard';
	/**
	 * If orientation is 'vertical', this will flip tabs and content (layout flow direction).
	 * @default false
	 */
	verticalFlip?: boolean;
	/**
	 *	If true, the scrollbar is visible. It can be useful when displaying a long vertical list of tabs.
	 * @default false
	 */
	visibleScrollbar?: boolean;
}
