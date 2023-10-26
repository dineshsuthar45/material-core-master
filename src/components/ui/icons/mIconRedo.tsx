import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconRedo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M9.8 4.9a.32.32 0 0 0-.3-.3.43.43 0 0 0-.4.4A4.055 4.055 0 0 1 5 9.1 4.118 4.118 0 0 1 .9 5 4.055 4.055 0 0 1 5 .9a4.194 4.194 0 0 1 3.5 1.9H6.9a.265.265 0 0 0-.3.3.265.265 0 0 0 .3.3H9a.265.265 0 0 0 .3-.3V.9a.3.3 0 0 0-.6 0v1A4.824 4.824 0 0 0 .2 5a6.465 6.465 0 0 0 .4 2v.1A5.088 5.088 0 0 0 5 9.7a4.801 4.801 0 0 0 4.8-4.8Z" />
	</svg>
);

export default SvgMIconRedo;
