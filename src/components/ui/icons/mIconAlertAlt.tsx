import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconAlertAlt = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M5 .2A4.867 4.867 0 0 0 .2 5 4.867 4.867 0 0 0 5 9.8 4.867 4.867 0 0 0 9.8 5 4.867 4.867 0 0 0 5 .2Zm.047 7.737a.613.613 0 1 1 .613-.613.613.613 0 0 1-.613.613ZM5.35 5.62H5.35l.001.006a.342.342 0 0 1-.341.342.326.326 0 0 1-.347-.317L4.66 5.63l-.003-.009-.305-2.806v-.026a.668.668 0 0 1 1.334 0Z" />
	</svg>
);

export default SvgMIconAlertAlt;
