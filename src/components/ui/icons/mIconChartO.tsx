import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconChartO = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M4.9.7h-.4a4.505 4.505 0 1 0 4.8 4.7v-.3H4.9Zm-.7.8v4.3h4.3A3.844 3.844 0 0 1 4.8 9 3.885 3.885 0 0 1 .9 5.2a3.692 3.692 0 0 1 3.3-3.7Z" />
		<path d="M5.4.3H5v4.6h4.6v-.3A4.53 4.53 0 0 0 5.4.3Zm.3 4V1.1a3.616 3.616 0 0 1 3.2 3.2Z" />
	</svg>
);

export default SvgMIconChartO;
