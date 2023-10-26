import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconStarO = (props: SVGProps<SVGSVGElement>) => (
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
			d="M9.9 3.8H6L5 .3 4 3.8H.1l3.1 2.3-1 3.6L5 7.6l2.9 2.1-1-3.6ZM7.1 8.6 5 7.1 2.9 8.6l.8-2.7-2.3-1.7h2.9L5 1.8l.7 2.4h2.9L6.3 5.9Z"
			data-name="726-star-toolbar@2x.png"
		/>
	</svg>
);

export default SvgMIconStarO;
