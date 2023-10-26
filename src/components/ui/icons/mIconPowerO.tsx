import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconPowerO = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M8.4 1.9a.454.454 0 0 0-.5 0 .454.454 0 0 0 0 .5 3.784 3.784 0 0 1 1.2 2.8A3.631 3.631 0 0 1 7.9 8a3.631 3.631 0 0 1-2.8 1.2A3.631 3.631 0 0 1 2.3 8a3.631 3.631 0 0 1-1.2-2.8 3.631 3.631 0 0 1 1.2-2.8.454.454 0 0 0 0-.5.454.454 0 0 0-.5 0A4.534 4.534 0 0 0 .4 5.2a4.706 4.706 0 0 0 1.4 3.3 4.534 4.534 0 0 0 3.3 1.4 4.374 4.374 0 0 0 3.3-1.4 4.59 4.59 0 0 0 0-6.6Z" />
		<path d="M5.1 5.2a.43.43 0 0 0 .4-.4V.4a.366.366 0 0 0-.4-.4.43.43 0 0 0-.4.4v4.4a.366.366 0 0 0 .4.4Z" />
	</svg>
);

export default SvgMIconPowerO;
