import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconList = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M.6 2h8.9a.43.43 0 0 0 .4-.4.458.458 0 0 0-.5-.4H.6a.43.43 0 0 0-.4.4.366.366 0 0 0 .4.4ZM9.4 8H.6a.366.366 0 0 0-.4.4.43.43 0 0 0 .4.4h8.9a.43.43 0 0 0 .4-.4.458.458 0 0 0-.5-.4ZM9.4 5.8H.6a.366.366 0 0 0-.4.4.43.43 0 0 0 .4.4h8.9a.43.43 0 0 0 .4-.4c-.1-.2-.2-.4-.5-.4ZM9.4 3.6H.6a.366.366 0 0 0-.4.4.43.43 0 0 0 .4.4h8.9a.43.43 0 0 0 .4-.4c-.1-.2-.2-.4-.5-.4Z" />
	</svg>
);

export default SvgMIconList;
