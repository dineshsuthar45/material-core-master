import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconLogo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 41.6 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M8 3.2C8 1.9 8.7.9 9.5.9s1.5 1 1.5 2.3-.7 2.3-1.5 2.3S8 4.5 8 3.2M30.7 3.2c0-1.3.7-2.3 1.5-2.3s1.5 1 1.5 2.3-.7 2.3-1.5 2.3-1.5-1-1.5-2.3M19.3 2.8c0-1.4.7-2.5 1.6-2.5s1.6 1.1 1.6 2.5-.7 2.5-1.6 2.5-1.6-1.2-1.6-2.5" />
		<path d="M20.9 6.7c-1.8 0-3.6-5.2-5.7-5.2s-3.8 5.2-5.7 5.2-3.4-5.3-5.8-5.3C2 1.5.3 3.6.3 3.6v1.6s1.3-2.6 3.4-2.6 3.8 7.1 5.8 7.1 3.8-6.6 5.7-6.7 3.5 6.7 5.7 6.7S24.7 3 26.5 3c1.9.1 3.7 6.7 5.7 6.7s3.7-7.1 5.8-7.1 3.4 2.6 3.4 2.6V3.6S39.8 1.4 38 1.4c-2.4 0-3.9 5.2-5.8 5.2s-3.7-5.2-5.7-5.2c-2 .1-3.8 5.3-5.6 5.3" />
	</svg>
);

export default SvgMIconLogo;
