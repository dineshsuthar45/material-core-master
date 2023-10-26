import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconCircleAngleDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M4.9.3a4.6 4.6 0 1 0 4.6 4.6A4.467 4.467 0 0 0 4.9.3Zm2.771 4.126-2.49 2.49a.362.362 0 0 1-.48 0l-2.49-2.49a.325.325 0 0 1 .46-.46l2.27 2.27 2.27-2.27a.325.325 0 0 1 .46.46Z" />
	</svg>
);

export default SvgMIconCircleAngleDown;
