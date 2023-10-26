import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconCirclePlus = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M5 .3A4.7 4.7 0 1 0 9.7 5 4.695 4.695 0 0 0 5 .3Zm2.1 5.2H5.5v1.6a.472.472 0 0 1-.5.5.472.472 0 0 1-.5-.5V5.5H2.9a.472.472 0 0 1-.5-.5.472.472 0 0 1 .5-.5h1.6V2.9a.472.472 0 0 1 .5-.5.472.472 0 0 1 .5.5v1.6h1.6a.472.472 0 0 1 .5.5.472.472 0 0 1-.5.5Z" />
	</svg>
);

export default SvgMIconCirclePlus;
