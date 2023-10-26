import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconGraphAlt = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M5.2.4a.2.2 0 1 0-.4 0v.7h.4ZM9.3 1.5H.7a.472.472 0 0 0-.5.5v5.6a.458.458 0 0 0 .5.4h3.1l-.9 1.4v.1a.215.215 0 0 0 .2.2c.1 0 .1 0 .2-.1l1-1.6h1.5l1 1.6c0 .1.1.1.2.1a.215.215 0 0 0 .2-.2v-.1L6.3 8h3.1a.43.43 0 0 0 .4-.4V2a.472.472 0 0 0-.5-.5Zm-.846 3.2a.207.207 0 0 1-.415 0v-.812L6.194 5.6l-.03.029a.166.166 0 0 1-.233 0L4.434 4.132 1.905 6.48a.214.214 0 0 1-.291-.314L4.29 3.682l.033-.033a.166.166 0 0 1 .234 0l1.497 1.497 1.68-1.559h-.808a.207.207 0 0 1 0-.414h1.32a.208.208 0 0 1 .208.207Z" />
	</svg>
);

export default SvgMIconGraphAlt;
