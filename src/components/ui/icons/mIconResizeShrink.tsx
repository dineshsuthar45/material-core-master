import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconResizeShrink = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M1.573 5.304a.396.396 0 0 0-.313.304.396.396 0 0 0 .304.313l1.972.15L.285 9.235a.375.375 0 0 0-.007.494.375.375 0 0 0 .493.006L3.96 6.633 3.868 8.79a.266.266 0 0 0 .244.25.396.396 0 0 0 .312-.304l.165-2.958a.305.305 0 0 0-.059-.186.32.32 0 0 0-.245-.127ZM8.252 4.857a.396.396 0 0 0 .313-.304.396.396 0 0 0-.304-.313l-1.972-.15L9.541.927a.375.375 0 0 0 .006-.493.375.375 0 0 0-.493-.007L5.865 3.529l.092-2.158a.265.265 0 0 0-.243-.25.396.396 0 0 0-.313.304l-.164 2.958a.305.305 0 0 0 .059.186.32.32 0 0 0 .245.127Z" />
	</svg>
);

export default SvgMIconResizeShrink;
