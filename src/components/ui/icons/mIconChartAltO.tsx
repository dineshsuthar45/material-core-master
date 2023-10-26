import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconChartAltO = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M5 .3A4.7 4.7 0 1 0 9.7 5 4.695 4.695 0 0 0 5 .3ZM9 5a4.1 4.1 0 0 1-1.4 3.1l-2.1-3 3.4-1.2A4.102 4.102 0 0 1 9 5Zm-3.7-.5V1a3.948 3.948 0 0 1 3.4 2.4ZM4.7 1v4.1l2.4 3.3A3.936 3.936 0 0 1 5 9a4.012 4.012 0 0 1-4-4 3.957 3.957 0 0 1 3.7-4Z" />
	</svg>
);

export default SvgMIconChartAltO;
