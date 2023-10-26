import { RefObject, useEffect, useRef } from 'react';

export const useClickOutside = <RefType extends HTMLElement>(
	handler: (event?: MouseEvent | TouchEvent) => void
): RefObject<RefType> => {
	const ref = useRef<RefType>(null);

	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			// Do nothing if clicking ref's element or descendent elements
			if (!ref.current || ref.current.contains(event.target as RefType)) {
				return;
			}

			handler(event);
		};

		document.addEventListener('click', listener);
		document.addEventListener('touchstart', listener);

		return () => {
			document.removeEventListener('click', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, handler]);

	return ref;
};
