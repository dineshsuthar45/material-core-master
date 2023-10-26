import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconListAlt = (props: SVGProps<SVGSVGElement>) => (
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
			d="M1 2.8h8A.9.9 0 1 0 9 1H1a.817.817 0 0 0-.8.9.817.817 0 0 0 .8.9Zm8 4.4H1A.9.9 0 0 0 1 9h8a.9.9 0 1 0 0-1.8Zm0-3.1H1a.817.817 0 0 0-.8.9.817.817 0 0 0 .8.9h8a.9.9 0 0 0 0-1.8Z"
			data-name="1099-list-1-toolbar-selected@2x.png"
		/>
	</svg>
);

export default SvgMIconListAlt;
