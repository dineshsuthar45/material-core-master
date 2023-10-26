import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconShare = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M8.6.4a1.324 1.324 0 0 0-1.3 1.3v.2L2.4 4a1.23 1.23 0 0 0-1-.5A1.155 1.155 0 0 0 .2 4.7 1.324 1.324 0 0 0 1.5 6a1.33 1.33 0 0 0 .8-.3l3.3 2.2c0 .1-.1.3-.1.4a1.324 1.324 0 0 0 1.3 1.3A1.24 1.24 0 0 0 8 8.3a1.216 1.216 0 0 0-1.2-1.2 1.135 1.135 0 0 0-.8.3L2.6 5.2c0-.1.1-.3.1-.4v-.2l4.9-2.1a1.23 1.23 0 0 0 1 .5 1.324 1.324 0 0 0 1.3-1.3A1.324 1.324 0 0 0 8.6.4Z" />
	</svg>
);

export default SvgMIconShare;
