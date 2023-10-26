import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconGlobe = (props: SVGProps<SVGSVGElement>) => (
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
			d="M5 .3A4.7 4.7 0 1 0 9.7 5 4.695 4.695 0 0 0 5 .3ZM3.7 4.4c-.7.2-.1.7-.1.7.7.3.3.5.3.5a2.799 2.799 0 0 1-1-.5s-.7-.5-.5-.8c.1-.3.5-.8 0-1.3a1.756 1.756 0 0 0-.5-.4 2.36 2.36 0 0 1 .9-.8 2.376 2.376 0 0 0 .9.9c.3-.8.8-.3.8-.3.1-.3.8-.2.5.1-.4.4-1 .2-.5.7.5.4.1-.4.8-.4s.7.6.3.6c-.3 0-.1.1-.8.5s-.3.8-.6.8c-.4.1 0-.4-.5-.3ZM6 7c-.5.5-.6 1.5-.7 1.5-.1.1-.2-.1-.4-.3-.1-.1-.3-.4-.1-1.2 0 0-.6-.1-.6-1.1 0-.4.5-.8 1.2-.4.5.2.4.3.6.4A.782.782 0 0 1 6 7Zm1.2-2.7c0-1.1 1.3-.9.7-1.5-.4-.5-.8.4-1.3.4s-.2-1-.2-1c-.7 0-.3-.5-.1-.6.1-.1.1-.1.1-.2A3.792 3.792 0 0 1 8.9 5c0 .4-.1.7-.1 1-.6-.3-1.6-.9-1.6-1.7Z"
			data-name="881-globe-toolbar-selected@2x.png"
		/>
	</svg>
);

export default SvgMIconGlobe;
