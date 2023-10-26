import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconCircleXO = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="m5.8 5 1.1-1.1a.495.495 0 1 0-.7-.7L5 4.3 3.9 3.2a.495.495 0 1 0-.7.7L4.3 5 3.2 6.1a.495.495 0 0 0 .7.7L5 5.7l1.1 1.1a.605.605 0 0 0 .8 0 .483.483 0 0 0 0-.7Z" />
		<path d="M5.1 9.5A4.5 4.5 0 1 1 9.6 5a4.481 4.481 0 0 1-4.5 4.5Zm0-8.3A3.8 3.8 0 1 0 8.9 5a3.798 3.798 0 0 0-3.8-3.8Z" />
	</svg>
);

export default SvgMIconCircleXO;
