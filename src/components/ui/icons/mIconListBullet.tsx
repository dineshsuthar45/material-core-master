import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconListBullet = (props: SVGProps<SVGSVGElement>) => (
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
			d="M.7 7.9a.5.5 0 0 0 0 1 .5.5 0 0 0 0-1Zm0-4.3a.458.458 0 0 0-.5.4.536.536 0 0 0 .5.5.472.472 0 0 0 .5-.5c0-.3-.2-.4-.5-.4Zm0-1.5a.472.472 0 0 0 .5-.5c0-.3-.2-.4-.5-.4a.472.472 0 0 0-.5.5c0 .3.2.4.5.4Zm0 3.6a.5.5 0 0 0 0 1 .5.5 0 1 0 0-1Z"
			data-name="854-list-toolbar@2x.png"
		/>
		<path d="M9.4 5.8H2.2a.4.4 0 0 0 0 .8h7.1a.43.43 0 0 0 .4-.4c0-.2-.1-.4-.3-.4ZM9.4 3.7H2.2c-.2 0-.4.1-.4.3a.43.43 0 0 0 .4.4h7.1a.43.43 0 0 0 .4-.4c.1-.2-.1-.3-.3-.3ZM2.2 2.1h7.1a.43.43 0 0 0 .4-.4c0-.2-.1-.4-.3-.4H2.2a.43.43 0 0 0-.4.4.43.43 0 0 0 .4.4ZM9.4 7.9H2.2a.4.4 0 1 0 0 .8h7.1a.43.43 0 0 0 .4-.4c0-.2-.1-.4-.3-.4Z" />
	</svg>
);

export default SvgMIconListBullet;
