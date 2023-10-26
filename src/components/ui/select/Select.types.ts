import { MenuProps, SxProps, Theme } from "@mui/material";

export interface SelectProps<T extends { label: string; value: string }> {
  /**
   * The menu options
   */
  options: T[];
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth?: boolean;
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty?: boolean;
  /**
   * If `true`, the label is displayed in an error state..
   * @default 'false'
   */
  error?: boolean;
  /**
   * Feedback of the component.
   */
  feedback?: string;
  /**
   * The icon that displays the arrow.
   * @default MIconAngleDown
   */
  IconComponent?: React.ElementType;
  /**
   * The id of the `input` element.
   * @default 'uuidv4()'
   */
  id?: string;
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label: string;
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps?: Partial<MenuProps>;
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {T} option Selected option.
   */
  onChange: (option: T) => void;
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose?: (event: React.SyntheticEvent) => void;
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen?: (event: React.SyntheticEvent) => void;
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open?: boolean;
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue?: (value: T) => React.ReactNode;
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps?: React.HTMLAttributes<HTMLDivElement>;
  /**
   * The size of the component.
   * @default 'small'
   */
  size?: "small" | "medium";
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value?: T;
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant?: "standard" | "outlined" | "filled";
}
