import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconLike = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M8.66 4.228c-.457-.029-1.572-.029-2.058-.057a.447.447 0 0 1-.343-.172.42.42 0 0 1 0-.372 2.793 2.793 0 0 0 .171-1.544 1.242 1.242 0 0 0-.972-1A.377.377 0 0 0 5 1.34a2.64 2.64 0 0 0-.143.744 6.12 6.12 0 0 1-.315 1.372C4.171 4.371 3.742 5 2.77 5h-.229v3.317h.286c.086 0 .315 0 .715.029.257.029.658.143 1 .2.744.143 2.088.343 2.86.429.63-.143.859-.486 1.345-1.144a4.985 4.985 0 0 0 .858-2.145 1.453 1.453 0 0 0-.944-1.458ZM.425 8.317h1.573V5H.425Z" />
	</svg>
);

export default SvgMIconLike;
