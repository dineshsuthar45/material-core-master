import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconFile = (props: SVGProps<SVGSVGElement>) => (
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
			d="M6.4.2v2.6H9Zm-.5 2.9V.2H1.6a.43.43 0 0 0-.4.4v8.7a.43.43 0 0 0 .4.4h6.9c.345.026.5-.1.5-.4v-6H6.1a.215.215 0 0 1-.2-.2Z"
			data-name="738-document-1-toolbar-selected@2x.png"
		/>
	</svg>
);

export default SvgMIconFile;
