import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconArchive = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="m9.4 5.5-1-4.1c0-.1-.2-.2-.3-.2H6.7a.32.32 0 0 0-.3.3.45.45 0 0 0 .3.3h1l1 3.8H7.3a1.502 1.502 0 0 0-1.309.88c-.197.235-.314.417-.391.42H4.4c-.1 0-.2-.2-.3-.4-.388-.565-.6-.8-1.3-.8H1.2l1-3.8h1a.32.32 0 0 0 .3-.3c0-.1.037-.351-.2-.4H2c-.2 0-.258.058-.303.295L.4 5.9v3.3c0 .2.1.4.3.4h8.5a.32.32 0 0 0 .3-.3V6.1a2.18 2.18 0 0 0-.1-.6Z" />
		<path d="M3.3 4.5a.367.367 0 0 0 .1.3l1.3 1.3a.367.367 0 0 0 .3.1.367.367 0 0 0 .3-.1l1.3-1.3a.367.367 0 0 0 .1-.3.43.43 0 0 0-.4-.4.367.367 0 0 0-.3.1l-.6.6v-4A.43.43 0 0 0 5 .4c-.2 0-.4.1-.4.3v4L4 4.2c-.186-.143-.197-.107-.297-.107A.44.44 0 0 0 3.3 4.5Z" />
	</svg>
);

export default SvgMIconArchive;
