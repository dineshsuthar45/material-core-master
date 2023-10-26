import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconBoxMinusO = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M7.6.2H2.4A2.22 2.22 0 0 0 .2 2.4v5.2a2.22 2.22 0 0 0 2.2 2.2h5.2a2.22 2.22 0 0 0 2.2-2.2V2.4A2.156 2.156 0 0 0 7.6.2Zm1.5 7.4a1.538 1.538 0 0 1-1.5 1.5H2.4A1.538 1.538 0 0 1 .9 7.6V2.4A1.538 1.538 0 0 1 2.4.9h5.2a1.415 1.415 0 0 1 1.5 1.5Z" />
		<path d="M7 4.5H3a.472.472 0 0 0-.5.5.472.472 0 0 0 .5.5h4a.472.472 0 0 0 .5-.5.472.472 0 0 0-.5-.5Z" />
	</svg>
);

export default SvgMIconBoxMinusO;
