import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconCheckAlt = (props: SVGProps<SVGSVGElement>) => (
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
			d="M8.818.76a.647.647 0 0 0-.597.298L3.371 6.28 1.729 4.64a.677.677 0 0 0-.522-.224.828.828 0 0 0-.82.821 1.061 1.061 0 0 0 .148.448L2.85 8.968a.69.69 0 0 0 .671.373.865.865 0 0 0 .672-.299l5.373-6.94a.755.755 0 0 0 .149-.522.847.847 0 0 0-.896-.82Z"
			data-name="1040-checkmark-toolbar-selected@2x.png"
		/>
	</svg>
);

export default SvgMIconCheckAlt;
