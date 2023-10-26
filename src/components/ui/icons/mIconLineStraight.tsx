import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconLineStraight = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M9.1 4.1a.96.96 0 0 0-.9.7h-.9a.856.856 0 0 0-.9-.7.875.875 0 0 0-.9.6h-.9a.875.875 0 0 0-.9-.6 1.087 1.087 0 0 0-1 .7h-.9C1.7 4.3 1.4 4 1 4a1.071 1.071 0 0 0-1 1 .896.896 0 0 0 .9.9.96.96 0 0 0 .9-.7h.9a.96.96 0 0 0 .9.7.96.96 0 0 0 .9-.7h.9a.929.929 0 0 0 1.8 0h.9a.96.96 0 0 0 .9.7.896.896 0 0 0 .9-.9.817.817 0 0 0-.8-.9Z" />
	</svg>
);

export default SvgMIconLineStraight;
