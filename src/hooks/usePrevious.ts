import { useEffect, useRef } from 'react';

export const usePrevious = <T>(value: T, allowEmpty: boolean = false): T => {
	const ref: any = useRef<T>();

	useEffect(() => {
		if (allowEmpty || value) {
			ref.current = value;
		}
	}, [value]);

	return ref.current;
};
