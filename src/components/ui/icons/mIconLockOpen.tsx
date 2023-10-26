import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconLockOpen = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M7.8 3.6h-.4V2.5A2.433 2.433 0 0 0 5 .1a2.342 2.342 0 0 0-1.7.7.188.188 0 0 0 0 .3.188.188 0 0 0 .3 0A1.816 1.816 0 0 1 5 .5a2.006 2.006 0 0 1 2 2v1.1H2.1a.882.882 0 0 0-.9.8v4.4a.896.896 0 0 0 .9.9h5.7a.896.896 0 0 0 .9-.9V4.5a.896.896 0 0 0-.9-.9ZM5.2 6.9v.7a.215.215 0 0 1-.2.2c-.1 0-.2-.1-.2-.3v-.6a.739.739 0 0 1-.5-.6.7.7 0 1 1 1.4 0c-.039.227-.039.431-.5.6Z" />
	</svg>
);

export default SvgMIconLockOpen;
