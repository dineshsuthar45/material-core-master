import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconTrashO = (props: SVGProps<SVGSVGElement>) => (
	<svg
		id="Layer_1"
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<defs />
		<path
			className="cls-1"
			d="M3.7 8.5a.215.215 0 0 0 .2-.2L3.7 3a.2.2 0 0 0-.4 0l.2 5.2c-.1.2.1.3.2.3ZM5 8.5a.215.215 0 0 0 .2-.2V3.1a.215.215 0 0 0-.2-.2c-.1 0-.2 0-.2.2v5.2a.215.215 0 0 0 .2.2ZM6.3 8.5a.215.215 0 0 0 .2-.2l.2-5.2a.215.215 0 0 0-.2-.2c-.1-.1-.2 0-.2.1l-.2 5.2c0 .2 0 .3.2.3Z"
		/>
		<path
			className="cls-1"
			d="M8.7 1.5H7v-.4a.896.896 0 0 0-.9-.9H3.9a.896.896 0 0 0-.9.9v.4H1.3c-.2 0-.3.1-.3.2a.215.215 0 0 0 .2.2h.2l.4 7a.896.896 0 0 0 .9.9H7a.923.923 0 0 0 1-.9l.4-7h.2a.215.215 0 0 0 .2-.2c.1-.1 0-.2-.1-.2Zm-5.175-.462a.43.43 0 0 1 .4-.4h2.2a.43.43 0 0 1 .4.4v.4h-3Zm3.981 7.914a.43.43 0 0 1-.4.4h-4.4a.43.43 0 0 1-.4-.4l-.4-7h6Z"
		/>
	</svg>
);

export default SvgMIconTrashO;
