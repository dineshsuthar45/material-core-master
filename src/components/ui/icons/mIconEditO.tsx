import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconEditO = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M4.4 6.2h-.6v-.6l4.3-4.3-.3-.3-4.4 4.4-.3 1.5 1.5-.3L9 2.2l-.3-.3-4.3 4.3zM9.6 1 9 .4a.375.375 0 0 0-.6 0l-.3.3 1.2 1.2.3-.3a.375.375 0 0 0 0-.6Z" />
		<path d="M7.5 4.5a.265.265 0 0 0-.3.3v4.1H1.1V2.8h4.1a.265.265 0 0 0 .3-.3.446.446 0 0 0-.3-.4H1a.601.601 0 0 0-.4.1c-.1.2-.2.3-.2.4V9a.536.536 0 0 0 .5.5h6.4a.472.472 0 0 0 .5-.5l.1-4.2c0-.2-.2-.3-.4-.3Z" />
	</svg>
);

export default SvgMIconEditO;
