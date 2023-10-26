import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconPlus = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M9.4 4.5H5.5V.6A.536.536 0 0 0 5 .1a.472.472 0 0 0-.5.5v3.9H.6a.536.536 0 0 0-.5.5.472.472 0 0 0 .5.5h3.9v3.9a.472.472 0 0 0 .5.5.536.536 0 0 0 .5-.5V5.5h3.9a.472.472 0 0 0 .5-.5.472.472 0 0 0-.5-.5Z" />
	</svg>
);

export default SvgMIconPlus;
