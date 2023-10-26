import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconInfoO = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M5 .3A4.7 4.7 0 1 0 9.7 5 4.695 4.695 0 0 0 5 .3Zm0 9A4.268 4.268 0 0 1 .7 5 4.268 4.268 0 0 1 5 .7 4.268 4.268 0 0 1 9.3 5 4.268 4.268 0 0 1 5 9.3Zm.6-2.2c-.097-.017-.1-.1-.1-.2V4.5l-1.4.1v.2h.2a.45.45 0 0 1 .194.054L4.5 5v1.9c0 .1 0 .1-.1.2h-.2v.2h1.7v-.2h-.3Z" />
		<circle cx={4.9} cy={3} r={0.7} />
	</svg>
);

export default SvgMIconInfoO;
