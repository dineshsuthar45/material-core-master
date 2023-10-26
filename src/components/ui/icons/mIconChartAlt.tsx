import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconChartAlt = (props: SVGProps<SVGSVGElement>) => (
	<svg
		id="Layer_1"
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<defs />
		<path
			className="cls-1"
			d="m5.3 4.6 4-1.4a4.622 4.622 0 0 0-4-2.8ZM9.5 3.7l-4 1.4L8 8.6A4.768 4.768 0 0 0 9.7 5a5.067 5.067 0 0 0-.2-1.3Z"
		/>
		<path className="cls-1" d="M4.7 5.1V.3A4.705 4.705 0 0 0 5 9.7a4.376 4.376 0 0 0 2.5-.8Z" />
	</svg>
);

export default SvgMIconChartAlt;
