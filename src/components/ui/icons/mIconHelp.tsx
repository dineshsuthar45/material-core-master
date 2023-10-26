import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconHelp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M5 .3A4.7 4.7 0 1 0 9.7 5 4.7 4.7 0 0 0 5 .3Zm.29 7.522a.528.528 0 1 1-.748-.747.528.528 0 0 1 .747.747Zm1.056-3.464a3.017 3.017 0 0 1-.612.708 1.175 1.175 0 0 0-.457.813v.333H4.55v-.363a1.218 1.218 0 0 1 .127-.566 2.318 2.318 0 0 1 .488-.58 3.31 3.31 0 0 0 .488-.526.787.787 0 0 0 .128-.441.745.745 0 0 0-.233-.578.893.893 0 0 0-.626-.213.92.92 0 0 0-.914.744l-.666-.279a1.774 1.774 0 0 1 .604-.828 1.567 1.567 0 0 1 .975-.318 1.606 1.606 0 0 1 1.141.415 1.378 1.378 0 0 1 .446 1.056 1.284 1.284 0 0 1-.162.623Z" />
	</svg>
);

export default SvgMIconHelp;
