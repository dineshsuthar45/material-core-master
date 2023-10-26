import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconSettings = (props: SVGProps<SVGSVGElement>) => (
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
			d="m9.7 4.3-1-.3a3.552 3.552 0 0 0-.4-.9l.5-.9a.188.188 0 0 0 0-.3l-.6-.7a.188.188 0 0 0-.3 0l-1 .5c-.3-.1-.6-.3-.9-.4l-.3-1a.215.215 0 0 0-.2-.2h-.9a.215.215 0 0 0-.2.2l-.3 1a3.552 3.552 0 0 0-.9.4l-1-.5h-.3l-.6.6a.188.188 0 0 0 0 .3l.5.9a10.375 10.375 0 0 1-.4 1l-1 .3a.215.215 0 0 0-.2.2v.9a.215.215 0 0 0 .2.2l1 .3a3.552 3.552 0 0 0 .4.9l-.5.9a.304.304 0 0 0 0 .4l.6.6a.188.188 0 0 0 .3 0l.9-.5a3.552 3.552 0 0 0 .9.4l.3 1a.215.215 0 0 0 .2.2h.9a.215.215 0 0 0 .2-.2l.3-1a3.552 3.552 0 0 0 .9-.4l.9.5a.188.188 0 0 0 .3 0l.6-.6a.188.188 0 0 0 0-.3l-.3-1a3.552 3.552 0 0 0 .4-.9l1-.3a.215.215 0 0 0 .2-.2v-.9a.215.215 0 0 0-.2-.2ZM5 6.3A1.324 1.324 0 0 1 3.7 5 1.415 1.415 0 0 1 5 3.6 1.43 1.43 0 0 1 6.4 5 1.288 1.288 0 0 1 5 6.3Z"
			data-name="740-gear-toolbar-selected@2x.png"
		/>
	</svg>
);

export default SvgMIconSettings;
