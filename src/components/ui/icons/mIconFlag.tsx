import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconFlag = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M8.702.9a3.443 3.443 0 0 1-1.8.4 5.869 5.869 0 0 1-2-.5C4.752.733 4.594.694 4.44.64A3.683 3.683 0 0 0 2.981.3c-.022 0-.036.003-.058.003L2.902.3c-1.6 0-1.7.7-1.7.8v8.6h.725l-.004-3.876c.028-.082.272-.296 1.058-.296a3.181 3.181 0 0 1 1.334.376l.257.115a4.368 4.368 0 0 0 2.112.598c.155 0 .301-.007.44-.019a3.432 3.432 0 0 0 1.723-.494L9.002 6V.7Z" />
	</svg>
);

export default SvgMIconFlag;
