import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconUndo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M5 .3A4.6 4.6 0 0 0 1.4 2V1a.363.363 0 0 0-.38-.345C.82.655.7.9.7 1v2.1a.265.265 0 0 0 .3.3h2.1a.385.385 0 0 0 .353-.396c0-.2-.253-.304-.353-.304H1.6A4.36 4.36 0 0 1 5 1a4 4 0 1 1-4 4 .265.265 0 0 0-.3-.3c-.3 0-.4.1-.4.3a4.697 4.697 0 0 0 8.9 2.1l.065-.133A4.321 4.321 0 0 0 9.636 5 4.579 4.579 0 0 0 5 .3Z" />
	</svg>
);

export default SvgMIconUndo;
