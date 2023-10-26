import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconChatAlt = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M9.772 2.574A1.936 1.936 0 0 0 7.856.744H2.071A1.824 1.824 0 0 0 .227 2.588v3.327a1.824 1.824 0 0 0 1.844 1.843h.253v1.835l2.553-1.835h3.051a1.825 1.825 0 0 0 1.845-1.843Z" />
	</svg>
);

export default SvgMIconChatAlt;
