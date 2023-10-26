import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconBoxEmpty = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M7.558.28h-5.2a2.05 2.05 0 0 0-2.1 2.1v5.3a2.05 2.05 0 0 0 2.1 2.1h5.3a2.05 2.05 0 0 0 2.1-2.1v-5.3a2.2 2.2 0 0 0-2.2-2.1Z" />
	</svg>
);

export default SvgMIconBoxEmpty;
