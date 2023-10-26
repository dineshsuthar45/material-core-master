import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconBoxCheck = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M7.6.3H2.4A2.112 2.112 0 0 0 .3 2.4v5.2a2.112 2.112 0 0 0 2.1 2.1h5.2a2.112 2.112 0 0 0 2.1-2.1V2.4A2.182 2.182 0 0 0 7.6.3Zm-.4 3.8L4.7 6.6a.35.35 0 0 1-.2.1.348.348 0 0 1-.5-.1L2.7 5.4a.495.495 0 0 1 .7-.7l.9.9 2.2-2.2a.495.495 0 0 1 .7.7Z" />
	</svg>
);

export default SvgMIconBoxCheck;
