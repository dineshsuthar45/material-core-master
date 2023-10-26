import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconTriangleRight = (props: SVGProps<SVGSVGElement>) => (
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
			d="m3.397 8.375.049-.029L6.85 5.3s.11-.1.1-.2c-.01-.092 0-.1-.1-.2l-3.4-3.2a.35.35 0 0 0-.2-.1.265.265 0 0 0-.3.3v6.2a.265.265 0 0 0 .3.3.348.348 0 0 0 .147-.025Z"
			data-name="725-airplay-toolbar@2x.png"
		/>
	</svg>
);

export default SvgMIconTriangleRight;
