import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconSend = (props: SVGProps<SVGSVGElement>) => (
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
			d="M.2 4.1c-.1 0-.1.1-.1.2a.215.215 0 0 0 .2.2L3.8 6 9.6.1Zm3.9 2.2 1.4 3.5c0 .1.1.1.2.1a.215.215 0 0 0 .2-.2l4-9.3Z"
			data-name="757-paper-airplane-toolbar-selected@2x.png"
		/>
	</svg>
);

export default SvgMIconSend;
