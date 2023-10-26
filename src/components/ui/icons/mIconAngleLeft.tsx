import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconAngleLeft = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M6.1 9.4 2.026 5.327 2 5.3c-.166-.17-.2-.2-.2-.4a.522.522 0 0 1 .2-.4L6.1.4a.483.483 0 0 1 .7 0 .605.605 0 0 1 0 .8L3.1 4.9l3.7 3.7a.605.605 0 0 1 0 .8.483.483 0 0 1-.7 0Z" />
	</svg>
);

export default SvgMIconAngleLeft;
