import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconAlert = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M9.65 8.002 5.72 1.132a.868.868 0 0 0-1.497-.002L.284 7.97a.828.828 0 0 0 .733 1.234l7.893.03a.828.828 0 0 0 .74-1.232Zm-4.601.285a.606.606 0 1 1 .605-.606.606.606 0 0 1-.606.606Zm.323-2.145h-.001l.001.006a.342.342 0 0 1-.342.341l-.012.001a.326.326 0 0 1-.334-.317l-.002-.022-.003-.009-.305-2.806-.001-.026a.668.668 0 0 1 1.335 0Z" />
	</svg>
);

export default SvgMIconAlert;
