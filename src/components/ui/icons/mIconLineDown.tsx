import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconLineDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M8.9 6.8h-.3L6.9 4.1a1.421 1.421 0 0 0 .2-.6.9.9 0 1 0-1.8 0v.2l-1 .4a.779.779 0 0 0-.7-.3c-.2 0-.3.1-.5.2L1.7 2.7a.601.601 0 0 0 .1-.4.896.896 0 0 0-.9-.9.817.817 0 0 0-.8.9.896.896 0 0 0 .9.9c.2 0 .3-.1.5-.2l1.4 1.2a.55.55 0 0 0-.2.5.9.9 0 1 0 1.8 0v-.2L5.6 4a.908.908 0 0 0 .7.3h.3L8.3 7a.755.755 0 0 0-.4.7.9.9 0 1 0 1.8 0c-.1-.5-.4-.9-.8-.9Z" />
	</svg>
);

export default SvgMIconLineDown;
