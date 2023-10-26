import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconLightOn = (props: SVGProps<SVGSVGElement>) => (
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
			d="M2.6 2.9a.188.188 0 0 0 .3 0 .188.188 0 0 0 0-.3l-1-1a.188.188 0 0 0-.3 0 .188.188 0 0 0 0 .3ZM5 2a.215.215 0 0 0 .2-.2V.4a.2.2 0 1 0-.4 0v1.3c0 .2.1.3.2.3Zm2.4.9.9-.9a.188.188 0 0 0 0-.3.188.188 0 0 0-.3 0l-.9.9a.188.188 0 0 0 0 .3c.1.1.3 0 .3 0ZM2 5a.215.215 0 0 0-.2-.2H.4a.2.2 0 1 0 0 .4h1.3c.2 0 .3-.1.3-.2Zm5.4 2.1a.212.212 0 0 0-.3.3l.9.9a.212.212 0 0 0 .3-.3Zm2.2-2.3H8.2a.2.2 0 1 0 0 .4h1.3a.215.215 0 0 0 .2-.2c0-.1 0-.2-.1-.2ZM5 2.8A2.2 2.2 0 1 0 7.2 5 2.22 2.22 0 0 0 5 2.8ZM5 8a.215.215 0 0 0-.2.2v1.3a.2.2 0 1 0 .4 0V8.2A.215.215 0 0 0 5 8Zm-2.4-.9-1 1a.188.188 0 0 0 0 .3.188.188 0 0 0 .3 0l.9-.9a.188.188 0 0 0 0-.3c0-.1-.2-.1-.2-.1Z"
			data-name="941-brightness-toolbar-selected@2x.png"
		/>
	</svg>
);

export default SvgMIconLightOn;
