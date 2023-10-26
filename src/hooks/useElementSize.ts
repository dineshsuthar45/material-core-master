import { useCallback, useEffect, useState } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

interface Size {
	boundingClientRect: DOMRect;
	width: number;
	height: number;
	scrollWidth: number;
	scrollHeight: number;
}

const defaultBoundingRect: DOMRect = {
	bottom: 0,
	height: 0,
	left: 0,
	right: 0,
	top: 0,
	width: 0,
	x: 0,
	y: 0,
	toJSON: function () {
		throw new Error('Function not implemented.');
	},
};

export const useElementSize = <T extends HTMLElement = HTMLDivElement>(): [(node: T | null) => void, Size] => {
	// Mutable values like 'ref.current' aren't valid dependencies
	// because mutating them doesn't re-render the component.
	// Instead, we use a state as a ref to be reactive.
	const [ref, setRef] = useState<T | null>(null);
	const [size, setSize] = useState<Size>({
		boundingClientRect: defaultBoundingRect,
		width: 0,
		height: 0,
		scrollWidth: 0,
		scrollHeight: 0,
	});

	// Prevent too many rendering using useCallback
	const handleSize = useCallback(() => {
		setSize({
			boundingClientRect: ref?.getBoundingClientRect() || defaultBoundingRect,
			width: ref?.offsetWidth || 0,
			height: ref?.offsetHeight || 0,
			scrollWidth: ref?.scrollWidth || 0,
			scrollHeight: ref?.scrollHeight || 0,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ref?.offsetHeight, ref?.offsetWidth, ref?.scrollHeight, ref?.scrollWidth]);

	useEffect(() => {
		window.addEventListener('resize', handleSize);

		return () => {
			window.removeEventListener('resize', handleSize);
		};
	});

	useIsomorphicLayoutEffect(() => {
		handleSize();
	}, [ref?.offsetHeight, ref?.offsetWidth]);

	return [setRef, size];
};
