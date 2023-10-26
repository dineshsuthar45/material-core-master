import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconPhone = (props: SVGProps<SVGSVGElement>) => (
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
			d="M9.8 8.1a2.888 2.888 0 0 0-1.4-1.6A1.913 1.913 0 0 0 7.2 6a.755.755 0 0 0-.7.4l-.1.1c-.1 0-.2.2-.4.2a.098.098 0 0 0-.1-.1 12.05 12.05 0 0 0-1.3-1.2s-.8-.9-1.1-1.2c-.1-.1-.1-.1-.1-.2s.1-.2.2-.3l.1-.1c.4-.4.7-.7-.1-1.9C2.9.7 2.5.3 2.1.2H2a1.33 1.33 0 0 0-.7.3A2.4 2.4 0 0 0 .2 2C.1 3.1 1 4.6 3.1 6.9c2 2 3.5 2.9 4.6 2.9h.1a2.602 2.602 0 0 0 1.7-1 .745.745 0 0 0 .3-.7Z"
			data-name="735-phone-toolbar-selected@2x.png"
		/>
	</svg>
);

export default SvgMIconPhone;
