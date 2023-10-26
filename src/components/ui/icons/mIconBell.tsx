import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconBell = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<defs />
		<path
			className="a"
			d="M3.9 8.6a1.107 1.107 0 0 0 1.2.9 1.2 1.2 0 0 0 1.2-.9 3.75 3.75 0 0 1-1.1.1 5.702 5.702 0 0 1-1.3-.1ZM7.5 3.4A2.388 2.388 0 0 0 6 1.2v-.1a.817.817 0 0 0-.9-.8.789.789 0 0 0-.8.8v.1a2.388 2.388 0 0 0-1.5 2.2C2.8 7 1.3 5.8 1.3 7c0 .7 1.7 1.3 3.8 1.3S9 7.7 9 7c0-1.2-1.5 0-1.5-3.6Z"
		/>
	</svg>
);

export default SvgMIconBell;
