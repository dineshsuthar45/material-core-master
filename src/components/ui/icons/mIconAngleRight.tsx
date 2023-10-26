import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconAngleRight = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="m4.3 9.5 4.084-4.072.078-.072A.344.344 0 0 0 8.6 5a.41.41 0 0 0-.2-.4L4.3.4a.608.608 0 0 0-.8 0 .608.608 0 0 0 0 .8L7.3 5 3.5 8.8a.483.483 0 0 0 0 .7.608.608 0 0 0 .8 0Z" />
	</svg>
);

export default SvgMIconAngleRight;
