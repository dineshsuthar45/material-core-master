import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconExport = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M2.098 5a.43.43 0 0 1 .4-.4h4.2V2a.43.43 0 0 0-.4-.4h-5.6a.366.366 0 0 0-.4.4v6a.43.43 0 0 0 .4.4h5.6a.43.43 0 0 0 .4-.4V5.4h-4.2a.43.43 0 0 1-.4-.4Z" />
		<path d="m9.703 4.704-1.39-1.39a.408.408 0 0 0-.576.576l.722.723L6.698 4.6a2.538 2.538 0 0 1 0 .4c0 .213.04.419-.036.406l1.797-.019-.722.723a.408.408 0 0 0 .576.577l1.39-1.39a.433.433 0 0 0 0-.593Z" />
	</svg>
);

export default SvgMIconExport;
