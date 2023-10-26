import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconLightOff = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<circle cx={5} cy={5} r={2.3} data-name="941-brightness-toolbar-selected@2x.png" />
	</svg>
);

export default SvgMIconLightOff;
