import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconResizeGrow = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M3.704 9.823a.396.396 0 0 0 .293-.322.396.396 0 0 0-.323-.293l-1.976-.03 3.05-3.354a.349.349 0 1 0-.517-.469l-2.99 3.29L1.2 6.487a.265.265 0 0 0-.258-.235.396.396 0 0 0-.293.323l.017 2.961a.304.304 0 0 0 .07.182.32.32 0 0 0 .252.111ZM6.35.207a.396.396 0 0 0-.291.325.396.396 0 0 0 .324.29L8.36.837 5.335 4.214a.349.349 0 1 0 .52.465L8.82 1.367l.057 2.158a.265.265 0 0 0 .26.233.396.396 0 0 0 .29-.325L9.389.472a.304.304 0 0 0-.07-.181.32.32 0 0 0-.254-.11Z" />
	</svg>
);

export default SvgMIconResizeGrow;
