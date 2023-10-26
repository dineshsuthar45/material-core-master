import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconTriangleLeft = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path
			d="M6.5 1.7 3.1 4.8A.35.35 0 0 0 3 5c0 .1 0 .118.1.2l3.4 3.1a.35.35 0 0 0 .2.1.265.265 0 0 0 .3-.3V1.9a.265.265 0 0 0-.3-.3.35.35 0 0 0-.2.1Z"
			data-name="725-airplay-toolbar@2x.png"
		/>
	</svg>
);

export default SvgMIconTriangleLeft;
