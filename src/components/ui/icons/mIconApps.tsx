import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconApps = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<defs />
		<path
			className="a"
			d="M.3.3h2.3v2.3H.3zM3.8.3h2.3v2.3H3.8zM7.4.3h2.3v2.3H7.4zM.3 3.8h2.3v2.3H.3zM3.8 3.8h2.3v2.3H3.8zM7.4 3.8h2.3v2.3H7.4zM.3 7.4h2.3v2.3H.3zM3.8 7.4h2.3v2.3H3.8zM7.4 7.4h2.3v2.3H7.4z"
		/>
	</svg>
);

export default SvgMIconApps;
