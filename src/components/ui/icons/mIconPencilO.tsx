import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconPencilO = (props: SVGProps<SVGSVGElement>) => (
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
			d="M9.8 2.4 7.6.2a.35.35 0 0 0-.2-.1c-.1 0-.1 0-.2.1L1.1 6.4l-.1.1-.8 3.1v.1a.215.215 0 0 0 .2.2h.1l3-.9s.045-.01.1-.1l6.2-6.2s.001-.013.11-.122c.064-.064-.018-.06-.11-.178ZM3.2 8.6l-2.5.7.7-2.5h.7v.9a.215.215 0 0 0 .2.2h.9Zm.5-.4v-.6a.215.215 0 0 0-.2-.2h-.9v-.9a.215.215 0 0 0-.2-.2h-.6L6.1 2 8 3.9Zm4.6-4.6L6.4 1.7l1-1 1.9 1.9Z"
			data-name="830-pencil-toolbar@2x.png"
		/>
	</svg>
);

export default SvgMIconPencilO;
