export interface TimerProps {
	/**
	 * Expiry time is a Unix timestamp in seconds/milliseconds for count down
	 */
	expiryTime: number;
	/**
	 * The size of timer in pixels
	 * @default 34
	 */
	size?: number;
	/**
	 * The array of color breakpoints for timer
	 * @default []
	 */
	breakpoints?: TimerBreakpoint[];
}

export interface TimerBreakpoint {
	startTime: number;
	color: string;
	unit: 'hour' | 'minute' | 'second';
}
