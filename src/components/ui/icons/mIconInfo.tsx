import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconInfo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M5 .3A4.7 4.7 0 1 0 9.7 5 4.695 4.695 0 0 0 5 .3Zm0 2.075a.753.753 0 1 1-.753.753A.753.753 0 0 1 5 2.375ZM4.2 7.6v-.2h.2a.098.098 0 0 0 .1-.1v-2a.862.862 0 0 0-.018-.178L4.3 5.1h-.2v-.2l1.3-.1v2.4a.334.334 0 0 0 .028.15s.04.066.172.05h.1v.2Z" />
	</svg>
);

export default SvgMIconInfo;
