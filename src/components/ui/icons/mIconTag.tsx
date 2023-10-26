import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconTag = (props: SVGProps<SVGSVGElement>) => (
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
			d="M9.1.2H5.6a.52.52 0 0 0-.4.2L.4 5.1a.55.55 0 0 0-.2.5.52.52 0 0 0 .2.4l3.5 3.5a.758.758 0 0 0 .4.2.52.52 0 0 0 .4-.2l4.8-4.8a.758.758 0 0 0 .2-.4V.8a.645.645 0 0 0-.6-.6ZM7.8 2.6a.43.43 0 0 1-.4-.4.4.4 0 1 1 .8 0 .43.43 0 0 1-.4.4Z"
			data-name="747-tag-toolbar-selected@2x.png"
		/>
	</svg>
);

export default SvgMIconTag;
