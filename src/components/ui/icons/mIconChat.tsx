import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconChat = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M9.8 5.3A2.467 2.467 0 0 0 7.2 3a2.467 2.467 0 0 0-2.6 2.3 2.467 2.467 0 0 0 2.6 2.3h.3a3.19 3.19 0 0 1 1.3 1.3 6.272 6.272 0 0 0 .1-1.8 2.616 2.616 0 0 0 .9-1.8ZM6.4 2.7a3.128 3.128 0 0 0-2.9-1.6A3.059 3.059 0 0 0 .2 3.9a3.08 3.08 0 0 0 .9 2 5.122 5.122 0 0 0 .2 1.9 2.719 2.719 0 0 1 1.2-1.2 3.595 3.595 0 0 0 1.1.2c.4 0 .7-.1 1-.1a2.5 2.5 0 0 1-.4-1.4 2.575 2.575 0 0 1 2.2-2.6Z" />
	</svg>
);

export default SvgMIconChat;
