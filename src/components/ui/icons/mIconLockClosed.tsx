import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconLockClosed = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path
			d="M7.9 3.7h-.5V2.6A2.433 2.433 0 0 0 5 .2a2.433 2.433 0 0 0-2.4 2.4v1.1h-.4a.896.896 0 0 0-.9.9V9a.896.896 0 0 0 .9.9h5.7a.896.896 0 0 0 .9-.9V4.5a1.063 1.063 0 0 0-.9-.8ZM5.2 6.9v.7a.2.2 0 0 1-.4 0v-.7a.675.675 0 0 1-.4-.6.645.645 0 0 1 .6-.6c.3 0 .7.3.7.6a.634.634 0 0 1-.5.6ZM7 3.7H3.1V2.6a2 2 0 0 1 4 0v1.1Z"
			data-name="744-locked-toolbar-selected@2x.png"
		/>
	</svg>
);

export default SvgMIconLockClosed;
