import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconBoxXO = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M7.7.1H2.3A2.22 2.22 0 0 0 .1 2.3v5.3a2.22 2.22 0 0 0 2.2 2.2h5.3a2.22 2.22 0 0 0 2.2-2.2V2.3A2.075 2.075 0 0 0 7.7.1Zm1.5 2.2v5.3a1.58 1.58 0 0 1-1.6 1.6H2.3A1.58 1.58 0 0 1 .7 7.6V2.3A1.58 1.58 0 0 1 2.3.7h5.3a1.718 1.718 0 0 1 1.6 1.6Z" />
		<path d="M6.9 2.9a.483.483 0 0 0-.7 0L5 4.1 3.8 2.9a.495.495 0 0 0-.7.7l1.2 1.2L3.1 6a.495.495 0 0 0 .7.7L5 5.5l1.2 1.2a.495.495 0 0 0 .7-.7L5.7 4.8l1.2-1.2c.2-.1.2-.5 0-.7Z" />
	</svg>
);

export default SvgMIconBoxXO;
