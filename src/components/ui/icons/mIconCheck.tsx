import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconCheck = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path
			d="M9.2 1.7c-.1 0-.2.1-.3.2L3.6 7.1 1.1 4.6c-.228-.125-.2-.1-.3-.1a.472.472 0 0 0-.5.5.36.36 0 0 0 .1.3l2.8 2.8a.367.367 0 0 0 .3.1.39.39 0 0 0 .3-.11L9.4 2.5a.886.886 0 0 0 .196-.257C9.743 1.894 9.5 1.7 9.2 1.7Z"
			data-name="888-checkmark-toolbar@2x.png"
		/>
	</svg>
);

export default SvgMIconCheck;
