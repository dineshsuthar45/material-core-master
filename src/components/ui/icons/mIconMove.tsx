import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconMove = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="m9.9 4.9-.1-.1-1.3-1.4a.35.35 0 0 0-.2-.1.32.32 0 0 0-.3.3c0 .1.011.124.1.2l.8.8H5.3V1l.8.8a.35.35 0 0 0 .2.1.265.265 0 0 0 .3-.3.196.196 0 0 0-.1-.2L5.1.1a.183.183 0 0 0-.15-.087c-.1 0-.105.032-.25.187L3.4 1.5a.35.35 0 0 0-.1.2.265.265 0 0 0 .3.3c.1 0 .2 0 .2-.1l.8-.8v3.6H1l.8-.8a.35.35 0 0 0 .1-.2c0-.2-.024-.284-.218-.303A.289.289 0 0 0 1.4 3.5L.166 4.752l-.052.054a.25.25 0 0 0-.1.173c0 .1.062.105.186.221l1.3 1.3a.35.35 0 0 0 .2.1.32.32 0 0 0 .3-.3.191.191 0 0 0-.1-.2l-.8-.8h3.6v3.6l-.8-.8a.35.35 0 0 0-.2-.1.265.265 0 0 0-.3.3c0 .1-.003.049.1.2l1.3 1.3s.1.147.2.147.1-.047.2-.147l1.3-1.3a.35.35 0 0 0 .1-.2.265.265 0 0 0-.3-.3c-.1 0-.052-.008-.2.1l-.8.8V5.3h3.6l-.8.8a.35.35 0 0 0-.1.2.265.265 0 0 0 .3.3.21.21 0 0 0 .2-.1l1.3-1.3c.1-.1.2-.2.1-.3Z" />
	</svg>
);

export default SvgMIconMove;
