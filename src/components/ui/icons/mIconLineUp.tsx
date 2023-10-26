import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconLineUp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M9 3.2h-.3L7 5.9a.735.735 0 0 1 .2.6.896.896 0 0 1-.9.9.789.789 0 0 1-.8-.8v-.2l-1.1-.5a.842.842 0 0 1-.7.4c-.2 0-.3-.1-.5-.2L1.9 7.3c0 .2.1.3.1.5a.896.896 0 0 1-.9.9.987.987 0 0 1-1-.9.896.896 0 0 1 .9-.9c.2 0 .3.1.5.2l1.4-1.2c-.1-.3-.2-.4-.2-.6a.9.9 0 0 1 1.8 0v.2l1 .5a.908.908 0 0 1 .7-.3h.3L8.2 3a1.445 1.445 0 0 1-.2-.7.896.896 0 0 1 .9-.9.987.987 0 0 1 1 .9.896.896 0 0 1-.9.9Z" />
	</svg>
);

export default SvgMIconLineUp;
