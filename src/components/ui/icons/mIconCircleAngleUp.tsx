import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconCircleAngleUp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M5 .3A4.7 4.7 0 1 0 9.7 5 4.695 4.695 0 0 0 5 .3Zm2.7 5.8a.304.304 0 0 1-.4 0L5 3.9 2.7 6.2a.304.304 0 0 1-.4 0 .446.446 0 0 1 0-.5l2.5-2.4a.304.304 0 0 1 .4 0l2.5 2.4a.304.304 0 0 1 0 .4Z" />
	</svg>
);

export default SvgMIconCircleAngleUp;
