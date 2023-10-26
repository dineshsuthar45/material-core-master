import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconTrash = (props: SVGProps<SVGSVGElement>) => (
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
			d="M8.7 1.5H6.9v-.4A.896.896 0 0 0 6 .2H3.9a.896.896 0 0 0-.9.9v.4H1.3c-.2 0-.3.1-.3.2a.215.215 0 0 0 .2.2h.2l.4 7a.896.896 0 0 0 .9.9H7a.923.923 0 0 0 1-.9l.4-7h.2a.215.215 0 0 0 .2-.2c.1-.1 0-.2-.1-.2Zm-5.3-.4a.43.43 0 0 1 .4-.4H6a.43.43 0 0 1 .4.4v.4h-3Zm.3 7.4a.215.215 0 0 1-.2-.2l-.3-5.2a.2.2 0 0 1 .4 0l.2 5.2c.1.1 0 .2-.1.2Zm1.5-.2a.2.2 0 1 1-.4 0V3.1a.2.2 0 1 1 .4 0Zm1.3 0a.215.215 0 0 1-.2.2c-.1 0-.3-.1-.3-.2l.2-5.2a.215.215 0 0 1 .2-.2c.1 0 .3.1.3.2Z"
			data-name="711-trash-toolbar-selected@2x.png"
		/>
	</svg>
);

export default SvgMIconTrash;
