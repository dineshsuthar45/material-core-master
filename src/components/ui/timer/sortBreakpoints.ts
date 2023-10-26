import { TimerBreakpoint } from './Timer.types';

export const sortedBreakpoints = (breakpoints: TimerBreakpoint[]): TimerBreakpoint[] => {
	const hoursBreakpoints: TimerBreakpoint[] = [];
	const minutesBreakpoints: TimerBreakpoint[] = [];
	const secondsBreakpoints: TimerBreakpoint[] = [];

	breakpoints.forEach((breakpoint: TimerBreakpoint) => {
		switch (breakpoint.unit) {
			case 'hour':
				hoursBreakpoints.push(breakpoint);
				return;
			case 'minute':
				minutesBreakpoints.push(breakpoint);
				return;
			case 'second':
				secondsBreakpoints.push(breakpoint);
				return;
		}
	});

	hoursBreakpoints.sort((a: TimerBreakpoint, b: TimerBreakpoint) => b.startTime - a.startTime);
	minutesBreakpoints.sort((a: TimerBreakpoint, b: TimerBreakpoint) => b.startTime - a.startTime);
	secondsBreakpoints.sort((a: TimerBreakpoint, b: TimerBreakpoint) => b.startTime - a.startTime);

	return [...hoursBreakpoints, ...minutesBreakpoints, ...secondsBreakpoints];
};
