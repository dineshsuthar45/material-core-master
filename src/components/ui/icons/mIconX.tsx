import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconX = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M5.79 4.979 9.407 1.36a.563.563 0 1 0-.796-.796L4.993 4.182 1.375.565a.563.563 0 0 0-.796.796L4.197 4.98.579 8.596a.563.563 0 0 0 .796.797l3.618-3.618 3.618 3.618a.563.563 0 0 0 .796-.797Z" />
	</svg>
);

export default SvgMIconX;
