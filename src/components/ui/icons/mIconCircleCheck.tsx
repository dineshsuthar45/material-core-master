import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconCircleCheck = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M5 .3A4.7 4.7 0 1 0 9.7 5 4.695 4.695 0 0 0 5 .3Zm2.144 3.774L4.632 6.586v.001a.37.37 0 0 1-.521 0v-.001L2.853 5.328a.368.368 0 0 1 .52-.52l.998.999 2.253-2.254a.368.368 0 0 1 .52.52Z" />
	</svg>
);

export default SvgMIconCircleCheck;
