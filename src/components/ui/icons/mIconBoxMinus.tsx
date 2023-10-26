import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconBoxMinus = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M7.7.2H2.3A2.112 2.112 0 0 0 .2 2.3v5.3a2.112 2.112 0 0 0 2.1 2.1h5.3a2.112 2.112 0 0 0 2.1-2.1V2.3a2.027 2.027 0 0 0-2-2.1ZM7 5.5H2.9a.472.472 0 0 1-.5-.5.472.472 0 0 1 .5-.5H7a.472.472 0 0 1 .5.5.472.472 0 0 1-.5.5Z" />
	</svg>
);

export default SvgMIconBoxMinus;
