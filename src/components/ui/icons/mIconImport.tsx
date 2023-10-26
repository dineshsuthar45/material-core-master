import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconImport = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		xmlSpace="preserve"
		enableBackground="new 0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M20.9 7.9c-.2 0-.4-.2-.4-.4V3.3h-2.6c-.2 0-.4.2-.4.4v5.6c0 .2.1.4.3.4h6.1c.2 0 .4-.2.4-.4V3.7c0-.2-.2-.4-.4-.4h-2.6v4.2c0 .2-.1.4-.4.4z" />
		<path d="m20.6.3-1.4 1.4c-.2.2-.2.4 0 .6.2.2.4.2.6 0l.7-.7v1.8h.8V1.6l.7.7c.2.2.4.2.6 0 .2-.2.2-.4 0-.6L21.2.3c-.1-.2-.4-.2-.6 0z" />
		<path d="M8.1 3.3H5.5v3.4l.7-.7c.2-.2.4-.2.6 0 .2.1.2.4 0 .5L5.4 7.9c-.2.2-.4.2-.6 0L3.4 6.5c-.1-.1-.1-.4 0-.5.2-.2.4-.2.6 0l.7.7V3.3h.8V.6c0-.2-.1-.4-.4-.4-.2 0-.4.2-.4.4v2.7H2.1c-.2 0-.4.2-.4.4v5.6c0 .2.1.4.3.4h6.1c.2 0 .4-.2.4-.4V3.7c0-.2-.2-.4-.4-.4z" />
	</svg>
);

export default SvgMIconImport;
