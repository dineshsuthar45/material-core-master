import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconEyeO = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M5 2.3C2.8 2.3.2 4.3.2 5S2.8 7.7 5 7.7 9.8 5.8 9.8 5 7.2 2.3 5 2.3Zm1.8 4.4A2.837 2.837 0 0 0 7.5 5a2.61 2.61 0 0 0-.7-1.7c1.4.5 2.4 1.4 2.4 1.7S8.1 6.2 6.8 6.7ZM5 3.1A1.967 1.967 0 0 1 6.9 5 1.967 1.967 0 0 1 5 6.9 1.967 1.967 0 0 1 3.1 5 1.967 1.967 0 0 1 5 3.1Zm-1.8.2A2.523 2.523 0 0 0 2.6 5a2.61 2.61 0 0 0 .7 1.7C1.9 6.2.8 5.3.8 5s1.1-1.2 2.4-1.7Z" />
		<circle cx={5} cy={5} r={0.9} />
	</svg>
);

export default SvgMIconEyeO;
