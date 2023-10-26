import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconZoomIn = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="m9.8 9.3-3-3A4.006 4.006 0 0 0 7.6 4 3.585 3.585 0 0 0 4 .4 3.548 3.548 0 0 0 .3 4a3.585 3.585 0 0 0 3.6 3.6 3.775 3.775 0 0 0 2.3-.8l3 3a.375.375 0 0 0 .6 0 .454.454 0 0 0 0-.5ZM5.48 4.41H4.42V5.42a.402.402 0 1 1-.803 0V4.41H2.56a.402.402 0 1 1 0-.804h1.058V2.502a.402.402 0 1 1 .803 0v1.103H5.48a.402.402 0 1 1 0 .804Z" />
	</svg>
);

export default SvgMIconZoomIn;
