import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconUser = (props: SVGProps<SVGSVGElement>) => (
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
			d="M5 .3A4.7 4.7 0 1 0 9.7 5 4.695 4.695 0 0 0 5 .3Zm0 8.9A4.07 4.07 0 0 1 2 8a7.579 7.579 0 0 1 1.6-.9l.2-.1c.6-.6-.1-1.7-.2-1.8-.1 0-.3-.4-.2-.8a2.548 2.548 0 0 1 .1-1.9 1.557 1.557 0 0 1 1.4-.6 1.167 1.167 0 0 1 1.4.3 3.125 3.125 0 0 1 .4 2 1.48 1.48 0 0 1-.2 1c-.1.1-.1.2-.2.3-.3.6-.5 1.1 0 1.5A3.928 3.928 0 0 1 8 8a4.07 4.07 0 0 1-3 1.2Z"
			data-name="769-male-toolbar-selected@2x.png"
		/>
	</svg>
);

export default SvgMIconUser;
