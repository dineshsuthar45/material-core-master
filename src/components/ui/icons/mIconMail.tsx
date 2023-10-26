import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconMail = (props: SVGProps<SVGSVGElement>) => (
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
			d="m5.3 6 4.1-4.5H.6L4.7 6a.375.375 0 0 0 .6 0ZM.1 1.6a.35.35 0 0 1-.1.2v6.3c0 .1 0 .2.1.2L3.2 5Zm5.5 4.7a1.049 1.049 0 0 1-1.3 0l-.8-.9L.6 8.6h8.8l-3-3.2Zm4.2-4.7-3 3.5 3.1 3.3a.31.31 0 0 0 .1-.2V1.9c-.1-.1-.1-.2-.2-.3Z"
			data-name="730-envelope-toolbar-selected@2x.png"
		/>
	</svg>
);

export default SvgMIconMail;
