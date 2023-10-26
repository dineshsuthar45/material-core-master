import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconGraphO = (props: SVGProps<SVGSVGElement>) => (
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
			d="M.3 8.2H2v-3H.3Zm.4-2.6h.9v2.2H.7ZM8 1.8v6.4h1.7V1.8Zm1.3 6h-.9V2.2h.9Zm-6.5.4h1.7V2.6H2.8Zm.5-5.1h.9v4.7h-.9Zm2.1 5.1h1.7V3.5H5.4Zm.5-4.3h.9v3.9h-.9Z"
			data-name="859-bar-chart-toolbar@2x.png"
		/>
	</svg>
);

export default SvgMIconGraphO;
