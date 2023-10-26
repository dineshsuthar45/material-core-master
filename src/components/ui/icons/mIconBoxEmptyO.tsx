import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconBoxEmptyO = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M7.6 1.3a1.278 1.278 0 0 1 1.2 1.1v5.4a1.095 1.095 0 0 1-1.1 1H2.3a1.095 1.095 0 0 1-1-1.1V2.3a1.095 1.095 0 0 1 1.1-1h5.2m0-1H2.4a2.094 2.094 0 0 0-2.1 2v5.4a2.094 2.094 0 0 0 2 2.1h5.4a2.094 2.094 0 0 0 2.1-2V2.4A2.27 2.27 0 0 0 7.6.3Z" />
	</svg>
);

export default SvgMIconBoxEmptyO;
