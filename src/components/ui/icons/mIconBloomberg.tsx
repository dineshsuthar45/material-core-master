import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconBloomberg = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="m8 2.4-2-2-.1-.1H.3v9.4h9.4V4.1ZM4.5 8.7a2.769 2.769 0 0 1-.9.1H1.2c0-2.2 0-4.4.1-6.5h2.5a3.194 3.194 0 0 1 1.4.3 1.571 1.571 0 0 1-.4 2.6c-.1 0-.1.1-.2.1.2.1.2.1.3.1A1.556 1.556 0 0 1 6 7.1a1.708 1.708 0 0 1-1.5 1.6Z" />
		<path d="M4.3 6a12.75 12.75 0 0 0-1.9-.1v1.9a7.569 7.569 0 0 0 1.5-.1h.5a.875.875 0 0 0 .5-.9.76.76 0 0 0-.6-.8ZM3.7 4.9a.91.91 0 0 0 .8-.4.802.802 0 0 0-.4-1.2 4.879 4.879 0 0 0-1.7-.1v1.7h1.3Z" />
	</svg>
);

export default SvgMIconBloomberg;
