import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconRefresh = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M9.9 5a.32.32 0 0 0-.3-.3c-.2 0-.4.1-.4.3A4.225 4.225 0 0 1 5 9.2a4.067 4.067 0 0 1-3.5-1.9h1.6a.265.265 0 0 0 .3-.3c0-.2-.1-.4-.3-.4H.9a.265.265 0 0 0-.3.3v2.2a.265.265 0 0 0 .3.3.265.265 0 0 0 .3-.3v-1A5.104 5.104 0 0 0 5 9.9 4.908 4.908 0 0 0 9.9 5ZM.8 5A4.225 4.225 0 0 1 5 .8a4.067 4.067 0 0 1 3.5 1.9H7a.265.265 0 0 0-.3.3c0 .2.1.4.3.4h2.2a.265.265 0 0 0 .3-.3V.9a.265.265 0 0 0-.3-.3c-.2 0-.4.1-.4.3v1A5.104 5.104 0 0 0 5 .1 4.908 4.908 0 0 0 .1 5a.265.265 0 0 0 .3.3c.3 0 .4-.1.4-.3Z" />
	</svg>
);

export default SvgMIconRefresh;
