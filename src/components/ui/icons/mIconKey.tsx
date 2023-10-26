import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconKey = (props: SVGProps<SVGSVGElement>) => (
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
			d="M9.7 7.8c0-.1 0-.1-.1-.1L6.2 4.2a2.769 2.769 0 0 0 .1-.9 2.946 2.946 0 0 0-3-3 3.009 3.009 0 0 0-3 3 3.076 3.076 0 0 0 3 3 2.769 2.769 0 0 0 .9-.1L5.9 8c0 .1.1.1.2.1h.7v.7A.215.215 0 0 0 7 9h.7v.6a.215.215 0 0 0 .2.2h1.7a.215.215 0 0 0 .2-.2l-.1-1.8ZM2.6 3.5a.9.9 0 1 1 .9-.9.896.896 0 0 1-.9.9Zm2.6.5ZM2.6 2.3a.43.43 0 0 0-.4.4.43.43 0 0 0 .4.4.366.366 0 0 0 .4-.4c0-.3-.1-.4-.4-.4Z"
			data-name="899-key-toolbar-selected@2x.png"
		/>
	</svg>
);

export default SvgMIconKey;
