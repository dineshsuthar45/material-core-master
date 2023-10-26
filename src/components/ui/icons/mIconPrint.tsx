import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconPrint = (props: SVGProps<SVGSVGElement>) => (
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
			d="M8.1.6a.536.536 0 0 0-.5-.5H2.4a.536.536 0 0 0-.5.5v1.8h6.2Zm-.4 4.9H2.4a.536.536 0 0 0-.5.5v3.5a.536.536 0 0 0 .5.5h5.3a.536.536 0 0 0 .5-.5V5.9a.664.664 0 0 0-.5-.4Zm-2 3.1H3.5a.2.2 0 1 1 0-.4h2.2a.2.2 0 0 1 0 .4Zm.9-1.3H3.5c-.1 0-.2-.1-.2-.3s.1-.2.2-.2h3.1a.215.215 0 0 1 .2.2c0 .1-.1.3-.2.3ZM9 2.8H1a.896.896 0 0 0-.9.9v4a.896.896 0 0 0 .9.9h.5V5.9a.896.896 0 0 1 .9-.9h5.3a.896.896 0 0 1 .9.9v2.6h.5a.896.896 0 0 0 .9-.9v-4a1.077 1.077 0 0 0-1-.8Zm-.9 1.8a.536.536 0 0 1-.5-.5.472.472 0 0 1 .5-.5.536.536 0 0 1 .5.5.472.472 0 0 1-.5.5Z"
			data-name="743-printer-toolbar-selected@2x.png"
		/>
	</svg>
);

export default SvgMIconPrint;
