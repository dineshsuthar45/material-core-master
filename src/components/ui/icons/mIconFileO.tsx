import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconFileO = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M6.4.3H1.7a.472.472 0 0 0-.5.5v8.4a.472.472 0 0 0 .5.5h6.7a.56.56 0 0 0 .6-.5V2.8Zm0 2.5V1.2L8 2.8Zm-.3.6h2.2v5.7H1.8V.9h4v2.2a.32.32 0 0 0 .3.3Z" />
	</svg>
);

export default SvgMIconFileO;
