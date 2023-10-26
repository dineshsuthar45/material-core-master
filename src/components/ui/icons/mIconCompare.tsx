import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconCompare = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M4.046 5.465a.352.352 0 1 0 .514-.48l-1.603-1.71h5.186a.352.352 0 1 0 0-.704H3.057L4.882.859A.352.352 0 1 0 4.4.346l-2.475 2.32a.344.344 0 0 0-.106.258.345.345 0 0 0 .09.262Z" />
		<path d="M6.266 4.535a.352.352 0 1 0-.513.48l1.603 1.71H2.17a.352.352 0 0 0 0 .704h5.087L5.43 9.141a.352.352 0 1 0 .48.513l2.476-2.32a.395.395 0 0 0 .016-.52Z" />
	</svg>
);

export default SvgMIconCompare;
