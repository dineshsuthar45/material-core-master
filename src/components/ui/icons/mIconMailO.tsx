import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconMailO = (props: SVGProps<SVGSVGElement>) => (
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
			d="M9.4 1.5H.6c-.2 0-.5.2-.5.4v6.2a.536.536 0 0 0 .5.5h8.9a.536.536 0 0 0 .5-.5V1.9a.675.675 0 0 0-.6-.4Zm-.4.4L5.3 6c-.2.2-.5.2-.6 0L1 1.9Zm-8.4.2 2.7 3L.6 8Zm.4 6 2.5-2.7.8.9a.912.912 0 0 0 1.2 0l.8-.9L9 8.1ZM9.4 8 6.7 5.1l2.7-3Z"
			data-name="730-envelope-toolbar@2x.png"
		/>
	</svg>
);

export default SvgMIconMailO;
