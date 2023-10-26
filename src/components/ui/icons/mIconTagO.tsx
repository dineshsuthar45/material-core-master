import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconTagO = (props: SVGProps<SVGSVGElement>) => (
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
			d="M8.9.3H5.6a.52.52 0 0 0-.4.2L.5 5.1c-.1.2-.2.3-.2.5a.52.52 0 0 0 .2.4l3.4 3.4a.5.5 0 0 0 .8 0l4.6-4.6a.758.758 0 0 0 .2-.4V1a.563.563 0 0 0-.6-.7Zm.2 4c-.012.004.016.045-.1.1L4.4 9.1l-.1.1c-.052-.048 0 0-.1-.1L.8 5.7l-.1-.1a.098.098 0 0 1 .1-.1L5.4.9l.1-.1h3.4a.215.215 0 0 1 .2.2ZM7.7 1.4a.789.789 0 0 0-.8.8.86.86 0 0 0 .8.8.789.789 0 0 0 .8-.8.789.789 0 0 0-.8-.8Zm0 1.2a.43.43 0 0 1-.4-.4.4.4 0 1 1 .8 0 .43.43 0 0 1-.4.4Z"
			data-name="747-tag-toolbar@2x.png"
		/>
	</svg>
);

export default SvgMIconTagO;
