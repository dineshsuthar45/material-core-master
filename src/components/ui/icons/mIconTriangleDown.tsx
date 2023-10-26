import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconTriangleDown = (props: SVGProps<SVGSVGElement>) => (
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
			d="m1.6 3.5 3.1 3.4a.35.35 0 0 0 .2.1c.1 0 .118 0 .2-.1l3.1-3.4a.35.35 0 0 0 .1-.2A.265.265 0 0 0 8 3H1.8a.265.265 0 0 0-.3.3.35.35 0 0 0 .1.2Z"
			data-name="725-airplay-toolbar@2x.png"
		/>
	</svg>
);

export default SvgMIconTriangleDown;
