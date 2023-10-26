import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconEyeClosed = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M5 2.4C2.8 2.4.3 4.3.3 5c0 .7 2.5 2.6 4.7 2.6S9.7 5.7 9.7 5c0-.7-2.5-2.6-4.7-2.6Zm0 4.7A2.05 2.05 0 0 1 2.9 5 2.05 2.05 0 0 1 5 2.9 2.05 2.05 0 0 1 7.1 5 2.05 2.05 0 0 1 5 7.1Z" />
		<path d="m1.583 2.42.46-.438 5.846 5.904-.46.437z" />
		<circle cx={5} cy={5} r={0.9} />
	</svg>
);

export default SvgMIconEyeClosed;
