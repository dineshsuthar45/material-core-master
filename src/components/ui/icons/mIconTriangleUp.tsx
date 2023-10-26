import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconTriangleUp = (props: SVGProps<SVGSVGElement>) => (
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
			d="m8.276 6.553-.03-.049L5.2 3.1S5.1 2.99 5 3c-.092.01-.1 0-.2.1L1.6 6.5a.35.35 0 0 0-.1.2.265.265 0 0 0 .3.3H8a.265.265 0 0 0 .3-.3.348.348 0 0 0-.024-.147Z"
			data-name="725-airplay-toolbar@2x.png"
		/>
	</svg>
);

export default SvgMIconTriangleUp;
