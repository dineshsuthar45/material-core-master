import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconGraph = (props: SVGProps<SVGSVGElement>) => (
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
			d="M8 1.8v6.4h1.7V1.8ZM2.8 8.2h1.7V2.6H2.8Zm-2.5 0H2v-3H.3Zm5.1 0h1.7V3.5H5.4Z"
			data-name="859-bar-chart-toolbar-selected@2x.png"
		/>
	</svg>
);

export default SvgMIconGraph;
