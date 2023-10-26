import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconCircleX = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M5 .2A4.867 4.867 0 0 0 .2 5 4.867 4.867 0 0 0 5 9.8 4.867 4.867 0 0 0 9.8 5 4.867 4.867 0 0 0 5 .2Zm1.9 6a.495.495 0 1 1-.7.7L5 5.7 3.8 6.9a.495.495 0 1 1-.7-.7L4.3 5 3.1 3.8a.495.495 0 0 1 .7-.7L5 4.3l1.2-1.2a.495.495 0 1 1 .7.7L5.7 5Z" />
	</svg>
);

export default SvgMIconCircleX;
