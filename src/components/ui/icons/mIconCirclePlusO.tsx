import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconCirclePlusO = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M5 .3A4.7 4.7 0 1 0 9.7 5 4.695 4.695 0 0 0 5 .3ZM5 9a4 4 0 1 1 4-4 4.012 4.012 0 0 1-4 4Z" />
		<path d="M7.1 4.5H5.5V2.9a.472.472 0 0 0-.5-.5.536.536 0 0 0-.5.5v1.6H3a.536.536 0 0 0-.5.5.536.536 0 0 0 .5.5h1.6v1.6a.472.472 0 0 0 .5.5.536.536 0 0 0 .5-.5V5.5h1.6a.472.472 0 0 0 .5-.5.739.739 0 0 0-.6-.5Z" />
	</svg>
);

export default SvgMIconCirclePlusO;
