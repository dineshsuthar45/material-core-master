import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconBoxPlus = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M7.695.17H2.378a2.143 2.143 0 0 0-2.14 2.142V7.63a2.143 2.143 0 0 0 2.14 2.141h5.317a2.143 2.143 0 0 0 2.142-2.141V2.312A2.143 2.143 0 0 0 7.695.171ZM7.6 5.179a.472.472 0 0 1-.5.443H5.6v1.5a.494.494 0 0 1 0 .057.472.472 0 0 1-.5.443.455.455 0 0 1-.057 0 .472.472 0 0 1-.443-.5v-1.5H3.1a.455.455 0 0 1-.057 0 .472.472 0 0 1-.443-.5.491.491 0 0 1 0-.057.472.472 0 0 1 .5-.443h1.5v-1.5a.491.491 0 0 1 0-.057.472.472 0 0 1 .5-.443.45.45 0 0 1 .057 0 .472.472 0 0 1 .443.5v1.5h1.5a.536.536 0 0 1 .5.5.494.494 0 0 1 0 .057Z" />
	</svg>
);

export default SvgMIconBoxPlus;
