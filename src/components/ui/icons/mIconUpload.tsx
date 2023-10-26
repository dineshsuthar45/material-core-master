import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconUpload = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M9.5 6H7.4C6.3 6 6.1 7.2 5.7 7.2H4.3C3.8 7.2 3.6 6 2.6 6H.5a.265.265 0 0 0-.3.3v3.2a.265.265 0 0 0 .3.3h9.1a.265.265 0 0 0 .3-.3V6.3c-.1-.2-.2-.3-.4-.3Z" />
		<path d="m4.216 2.432.367-.413v4.157a.446.446 0 0 0 .892 0V1.933l.446.396a.446.446 0 1 0 .592-.667L5.284.57a.464.464 0 0 0-.641.04L3.549 1.84a.446.446 0 0 0 .667.592Z" />
	</svg>
);

export default SvgMIconUpload;
