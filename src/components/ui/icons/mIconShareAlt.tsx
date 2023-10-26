import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconShareAlt = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M7.9 7a.572.572 0 0 0-.039-.278C7.814 6.594 7.7 6.6 7.6 6.6a.265.265 0 0 0-.3.3v1.3H.9V3.5h1.7c.3 0 .4-.1.4-.3a.265.265 0 0 0-.3-.3H.6c-.1 0-.203.01-.203.01C.27 2.975.3 3.1.3 3.2v5.4a.265.265 0 0 0 .3.3h7c.2 0 .4-.1.4-.3Z" />
		<path d="M9.773 4.045c0-.1.002-.041-.073-.145l-3-2.8a.35.35 0 0 0-.2-.1.215.215 0 0 0-.2.2v1.5c-.9.2-4.4.6-4.4 3.8v.6S3 5.1 6.3 5v1.5c0 .1.051.185.15.17.107-.014.078-.012.15-.07l2.914-2.331L9.6 4.2c.2-.15.173-.155.173-.155Z" />
	</svg>
);

export default SvgMIconShareAlt;
