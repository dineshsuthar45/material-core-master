import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconZoomOut = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="m9.8 9.2-3-3a3.775 3.775 0 0 0 .8-2.3A3.63 3.63 0 0 0 3.9.2 3.63 3.63 0 0 0 .2 3.9a3.691 3.691 0 0 0 3.7 3.7 3.566 3.566 0 0 0 2.3-.8l3 3a.406.406 0 0 0 .63.015c.053-.085.301-.265-.03-.615ZM5.469 4.331H2.43a.431.431 0 0 1 0-.862H5.47a.431.431 0 0 1 0 .862Z" />
	</svg>
);

export default SvgMIconZoomOut;
