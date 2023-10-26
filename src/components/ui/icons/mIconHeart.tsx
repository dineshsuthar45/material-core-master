import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconHeart = (props: SVGProps<SVGSVGElement>) => (
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
			d="M9.7 3.3A2.689 2.689 0 0 0 7 .6a2.61 2.61 0 0 0-2 1 2.61 2.61 0 0 0-2-1A2.689 2.689 0 0 0 .3 3.3v.1C.3 6.6 4 8.2 5 9.3c1-1 4.7-2.7 4.7-5.8Z"
			data-name="748-heart-toolbar-selected@2x.png"
		/>
	</svg>
);

export default SvgMIconHeart;
