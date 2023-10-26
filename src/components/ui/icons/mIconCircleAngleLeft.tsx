import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconCircleAngleLeft = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M5 .3A4.7 4.7 0 1 0 9.7 5 4.695 4.695 0 0 0 5 .3Zm.996 6.96a.325.325 0 1 1-.46.46l-2.49-2.49a.362.362 0 0 1 0-.48l2.49-2.49a.325.325 0 1 1 .46.46l-2.27 2.27Z" />
	</svg>
);

export default SvgMIconCircleAngleLeft;
