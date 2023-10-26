import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconStar = (props: SVGProps<SVGSVGElement>) => (
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
			d="M9.9 3.8H6L5 .4 4 3.8H.1l3.1 2.3-1 3.5 2.8-2 2.8 2-1-3.5 3.1-2.3z"
			data-name="726-star-toolbar-selected@2x.png"
		/>
	</svg>
);

export default SvgMIconStar;
