import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconBoxPlusO = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M7.7.12H2.4a2.22 2.22 0 0 0-2.2 2.2v5.3a2.22 2.22 0 0 0 2.2 2.2h5.3a2.22 2.22 0 0 0 2.2-2.2v-5.2A2.243 2.243 0 0 0 7.7.12Zm1.5 7.6a1.538 1.538 0 0 1-1.5 1.5H2.4a1.538 1.538 0 0 1-1.5-1.5v-5.3A1.538 1.538 0 0 1 2.4.92h5.3a1.415 1.415 0 0 1 1.5 1.5Z" />
		<path d="M7.1 4.62H5.6v-1.5a.472.472 0 0 0-.5-.5.472.472 0 0 0-.5.5v1.5H3.1a.472.472 0 0 0-.5.5.472.472 0 0 0 .5.5h1.5v1.5a.472.472 0 0 0 .5.5.472.472 0 0 0 .5-.5v-1.5h1.5a.472.472 0 0 0 .5-.5.536.536 0 0 0-.5-.5Z" />
	</svg>
);

export default SvgMIconBoxPlusO;
