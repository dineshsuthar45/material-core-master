import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconEdit = (props: SVGProps<SVGSVGElement>) => (
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
			d="m9.3 1.9-.2.2ZM7.8 4.1c-.1 0-.1 0-.1.1L4.9 6.9l-2.4.6.5-2.4 2.8-2.8.1-.1c0-.1-.1-.2-.3-.2h-5c-.1 0-.4.2-.4.4v6.9a.43.43 0 0 0 .4.4h6.9a.458.458 0 0 0 .5-.4v-5a.215.215 0 0 0-.2-.2ZM9.6 1 9 .4a.375.375 0 0 0-.6 0l-.3.3 1.2 1.2.3-.3a.375.375 0 0 0 0-.6ZM7.7 1 3.4 5.4l-.3 1.5 1.5-.3L9 2.1v.1Z"
			data-name="704-compose-toolbar-selected@2x.png"
		/>
	</svg>
);

export default SvgMIconEdit;
