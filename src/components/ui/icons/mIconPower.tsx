import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconPower = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M5.1.3A4.7 4.7 0 1 0 9.8 5 4.695 4.695 0 0 0 5.1.3ZM4.9 2a.2.2 0 0 1 .4 0v2.8a.215.215 0 0 1-.2.2c-.2 0-.2-.1-.2-.2Zm2.3 5.1a2.9 2.9 0 0 1-4.2 0 2.9 2.9 0 0 1 0-4.2.188.188 0 0 1 .3 0 .188.188 0 0 1 0 .3 3.157 3.157 0 0 0-.7 1.9 2.875 2.875 0 0 0 .7 1.8 2.41 2.41 0 0 0 1.8.7 2.875 2.875 0 0 0 1.8-.7 2.41 2.41 0 0 0 .7-1.8 2.268 2.268 0 0 0-.7-1.8.304.304 0 0 1 0-.4.188.188 0 0 1 .3 0A2.878 2.878 0 0 1 8.1 5a2.724 2.724 0 0 1-.9 2.1Z" />
	</svg>
);

export default SvgMIconPower;
