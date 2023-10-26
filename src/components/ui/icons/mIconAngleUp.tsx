import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconAngleUp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M9.6 6.5 5.4 2.3a.52.52 0 0 0-.4-.2.442.442 0 0 0-.4.2L.5 6.5a.385.385 0 0 0 0 .7.608.608 0 0 0 .8 0L5 3.4l3.8 3.8a.608.608 0 0 0 .8 0 .483.483 0 0 0 0-.7Z" />
	</svg>
);

export default SvgMIconAngleUp;
