import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconChart = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M4.7 5.3V.7A4.527 4.527 0 0 0 .3 5.2a4.481 4.481 0 0 0 4.5 4.5 4.527 4.527 0 0 0 4.5-4.4Z" />
		<path d="M5.3 4.7h4.4A4.578 4.578 0 0 0 5.3.3Z" />
	</svg>
);

export default SvgMIconChart;
