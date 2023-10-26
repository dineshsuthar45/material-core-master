import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconAlertO = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M5 2.7a.645.645 0 0 0-.6.6l.3 2.8a.32.32 0 0 0 .3.3.32.32 0 0 0 .3-.3l.3-2.8c.1-.3-.2-.6-.6-.6ZM5 7.1a.645.645 0 0 0-.6.6.645.645 0 0 0 .6.6.645.645 0 0 0 .6-.6c.1-.4-.2-.6-.6-.6Z" />
		<path d="m9.7 8.1-4-7A.851.851 0 0 0 4.6.8l-.3.3-4 7a.714.714 0 0 0 .3 1c.1.1.2.1.4.1h8a.86.86 0 0 0 .8-.8.367.367 0 0 0-.1-.3Zm-.5.4-.1.1H1c-.1 0-.1 0-.1-.1v-.1l4-7a.188.188 0 0 1 .3 0l4 7Z" />
	</svg>
);

export default SvgMIconAlertO;
