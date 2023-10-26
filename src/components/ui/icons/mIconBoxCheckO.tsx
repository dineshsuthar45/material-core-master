import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconBoxCheckO = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M7.5.4h-5A2.112 2.112 0 0 0 .4 2.5v5a2.112 2.112 0 0 0 2.1 2.1h5a2.112 2.112 0 0 0 2.1-2.1v-5A2.05 2.05 0 0 0 7.5.4ZM9 7.5A1.538 1.538 0 0 1 7.5 9h-5A1.538 1.538 0 0 1 1 7.5v-5A1.538 1.538 0 0 1 2.5 1h5A1.538 1.538 0 0 1 9 2.5Z" />
		<path d="M6.5 3.4 4.4 5.6l-.9-.9a.495.495 0 0 0-.7.7L4 6.6a.471.471 0 0 0 .6.1c.1 0 .1-.1.2-.1l2.5-2.5a.483.483 0 0 0 0-.7.605.605 0 0 0-.8 0Z" />
	</svg>
);

export default SvgMIconBoxCheckO;
