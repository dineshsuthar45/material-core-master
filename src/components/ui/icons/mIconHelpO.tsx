import { SVGProps } from 'react';

const SvgMIconHelpO = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		xmlSpace="preserve"
		enableBackground="new 0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M5 .3C2.4.3.3 2.4.3 5S2.4 9.7 5 9.7 9.7 7.6 9.7 5 7.6.3 5 .3zm0 8.8C2.7 9.1.9 7.3.9 5S2.7.9 5 .9 9.1 2.7 9.1 5 7.3 9.1 5 9.1z" />
		<text transform="translate(3.063 7.93)" fontSize="7.741px">
			{'?'}
		</text>
	</svg>
);

export default SvgMIconHelpO;
