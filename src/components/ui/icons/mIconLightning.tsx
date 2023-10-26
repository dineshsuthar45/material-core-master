import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconLightning = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M3.9.2 2.4 5.5H5l-.7 4.3 3.3-6.1H5.7L6.5.2" />
	</svg>
);

export default SvgMIconLightning;
