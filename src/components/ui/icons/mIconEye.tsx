import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconEye = (props: SVGProps<SVGSVGElement>) => (
	<svg
		id="Layer_1"
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<defs />
		<path
			className="cls-1"
			d="M5 2.4C2.8 2.4.3 4.3.3 5S2.8 7.6 5 7.6 9.7 5.7 9.7 5 7.2 2.4 5 2.4Zm0 4.7A2.05 2.05 0 0 1 2.9 5 2.05 2.05 0 0 1 5 2.9 2.05 2.05 0 0 1 7.1 5 2.05 2.05 0 0 1 5 7.1Z"
		/>
		<circle className="cls-1" cx={5} cy={5} r={0.9} />
	</svg>
);

export default SvgMIconEye;
