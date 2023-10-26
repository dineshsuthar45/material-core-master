import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconSave = (props: SVGProps<SVGSVGElement>) => (
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
			d="M7.8.3H1.2a.896.896 0 0 0-.9.9v7.5a.896.896 0 0 0 .9.9h7.5a.896.896 0 0 0 .9-.9V2.2ZM3.1 2.2h3.8v1.9H3.1Zm4.7 7H2.2V5.9h5.7v3.3Z"
			data-name="785-floppy-disk-toolbar-selected@2x.png"
		/>
	</svg>
);

export default SvgMIconSave;
