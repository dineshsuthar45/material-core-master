import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconBulb = (props: SVGProps<SVGSVGElement>) => (
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
			d="M5.8 8.2H4.1a.3.3 0 0 0 0 .6h1.7a.3.3 0 1 0 0-.6ZM5.437 9.031H4.402a.28.28 0 0 0-.241.3c0 .2.12.3.241.3h1.035c.122 0 .226-.125.226-.325a.254.254 0 0 0-.226-.275ZM4.9.3a3.483 3.483 0 0 0-3.4 3.6 3.543 3.543 0 0 0 1.9 3.2v.6a.215.215 0 0 0 .2.2h1V4.3c-.1 0-.224-.1-.224-.3a.284.284 0 0 1 .324-.3h.5c.2 0 .358.042.355.284-.004.292-.13.32-.255.308V7.9h1a.215.215 0 0 0 .2-.2v-.6A3.618 3.618 0 0 0 4.9.3Z"
		/>
	</svg>
);

export default SvgMIconBulb;
