import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconDislike = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M8.8 6a14.769 14.769 0 0 0-2.1.1.758.758 0 0 0-.4.2c-.1.1-.1.2 0 .4a2.85 2.85 0 0 1 .2 1.6 1.156 1.156 0 0 1-1 1A.462.462 0 0 1 5 9a1.483 1.483 0 0 1-.1-.7c-.1-.4-.2-.9-.4-1.5-.4-1-.8-1.6-1.8-1.6h-.2V1.8h1a3.553 3.553 0 0 0 1-.2c.8-.1 2.2-.4 3-.4.6.1.9.5 1.4 1.2a5.393 5.393 0 0 1 .9 2.2c-.1.4-.2 1.3-1 1.4ZM.3 1.8h1.6v3.4H.3Z" />
	</svg>
);

export default SvgMIconDislike;
