import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconCopy = (props: SVGProps<SVGSVGElement>) => (
	<svg
		id="Layer_1"
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<defs />
		<path
			className="cls-1"
			d="M7.1.3V2h1.7L7.1.3zM4.6 4.4v-2h-3a.43.43 0 0 0-.4.4v6.4a.43.43 0 0 0 .4.4h4.7a.43.43 0 0 0 .4-.4V4.6H4.8a.215.215 0 0 1-.2-.2Zm.6 3.7H2.6a.2.2 0 0 1 0-.4h2.6a.2.2 0 1 1 0 .4ZM2.4 6.8a.215.215 0 0 1 .2-.2h1.7a.215.215 0 0 1 .2.2c0 .1 0 .2-.2.2H2.6c-.1.1-.2-.1-.2-.2Zm3-1a.215.215 0 0 1-.2.2H2.6a.2.2 0 0 1 0-.4h2.6a.215.215 0 0 1 .2.2Z"
		/>
		<path
			className="cls-1"
			d="M6.7 2.2V.3h-3a.43.43 0 0 0-.4.4v1h1.9l2.2 2.2v3.6h1a.43.43 0 0 0 .4-.4V2.4H6.9a.215.215 0 0 1-.2-.2Z"
		/>
		<path className="cls-1" d="M5 4.1h1.7L5 2.4v1.7z" />
	</svg>
);

export default SvgMIconCopy;
