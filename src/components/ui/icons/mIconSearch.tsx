import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconSearch = (props: SVGProps<SVGSVGElement>) => (
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
			d="m9.7 9.5-3-3A4.473 4.473 0 0 0 7.6 4 3.63 3.63 0 0 0 3.9.3a3.7 3.7 0 1 0 2.4 6.5l3 3a.274.274 0 0 0 .376.005A.25.25 0 0 0 9.7 9.5ZM3.9 7.2A3.16 3.16 0 0 1 .7 4 3.33 3.33 0 0 1 4 .7a3.25 3.25 0 1 1-.1 6.5Zm0-6.1A2.883 2.883 0 0 0 1.1 4a2.8 2.8 0 0 0 5.6 0 2.818 2.818 0 0 0-2.8-2.9Z"
			data-name="708-search-toolbar-selected@2x.png"
		/>
	</svg>
);

export default SvgMIconSearch;
