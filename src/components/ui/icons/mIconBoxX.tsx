import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconBoxX = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M7.7.2H2.3A2.112 2.112 0 0 0 .2 2.3v5.4a2.112 2.112 0 0 0 2.1 2.1h5.4a2.112 2.112 0 0 0 2.1-2.1V2.3A2.182 2.182 0 0 0 7.7.2Zm-.8 6a.495.495 0 1 1-.7.7L5 5.7 3.8 6.9a.495.495 0 1 1-.7-.7L4.3 5 3.1 3.8a.495.495 0 0 1 .7-.7L5 4.3l1.2-1.2a.495.495 0 1 1 .7.7L5.7 5Z" />
	</svg>
);

export default SvgMIconBoxX;
