import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconHeartO = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M7 .6a2.973 2.973 0 0 0-2 .8 2.792 2.792 0 0 0-2-.8A2.795 2.795 0 0 0 .2 3.4v.1c0 2.3 2.1 3.9 3.5 4.9a4.824 4.824 0 0 1 1.2.8l.1.1.1-.1a6.293 6.293 0 0 1 1.1-.8c1.4-1 3.5-2.5 3.5-4.9v-.1A2.775 2.775 0 0 0 7 .6ZM1 3.5v-.1a2.006 2.006 0 0 1 2-2 1.831 1.831 0 0 1 1.8 1.2l.2.3.1-.3a1.976 1.976 0 0 1 1.8-1.2 2.006 2.006 0 0 1 2 2v.1c0 2.1-2.2 3.6-3.4 4.4-.2.2-.4.3-.5.4a5.923 5.923 0 0 0-.6-.4C3.2 7.1 1 5.6 1 3.5Z" />
	</svg>
);

export default SvgMIconHeartO;
