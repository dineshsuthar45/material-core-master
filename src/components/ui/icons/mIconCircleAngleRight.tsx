import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconCircleAngleRight = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M5 .3A4.7 4.7 0 1 0 9.7 5 4.695 4.695 0 0 0 5 .3Zm1.7 4.9L4.3 7.7a.244.244 0 0 1-.256.029l-.014.001c.005-.025 0 0-.03-.03a.304.304 0 0 1 0-.4L6.1 5 3.9 2.7a.304.304 0 0 1 0-.4.304.304 0 0 1 .4 0l2.4 2.5a.304.304 0 0 1 0 .4Z" />
	</svg>
);

export default SvgMIconCircleAngleRight;
