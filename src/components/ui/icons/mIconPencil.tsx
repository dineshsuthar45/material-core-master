import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconPencil = (props: SVGProps<SVGSVGElement>) => (
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
			d="M1.1 6.4c-.1 0-.1.1 0 0l-1 3.2v.1a.215.215 0 0 0 .2.2h.1L3.5 9a.098.098 0 0 0 .1-.1l4.7-4.7-2.5-2.5Zm2.1 2.2-2.5.7.7-2.6h.7v.9a.215.215 0 0 0 .2.2h.9Zm6.6-6.2L7.6.2a.35.35 0 0 0-.2-.1c-.1 0-.1 0-.2.1L6.1 1.3l2.5 2.5 1.2-1.2s0 .001.076-.093C9.896 2.483 9.8 2.4 9.8 2.4Z"
			data-name="830-pencil-toolbar-selected@2x.png"
		/>
	</svg>
);

export default SvgMIconPencil;
