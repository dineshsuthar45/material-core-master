import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconAngleDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="m.5 3 4.1 4.1c.2.2.3.3.4.3s.2 0 .4-.2L9.6 3a.608.608 0 0 0 0-.8.608.608 0 0 0-.8 0L5 6.1 1.2 2.3a.483.483 0 0 0-.7 0 .483.483 0 0 0 0 .7Z" />
	</svg>
);

export default SvgMIconAngleDown;
