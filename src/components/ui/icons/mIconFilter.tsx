import { SVGProps } from 'react';

const SvgMIconFilter = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M4.21202 10.1654V4.7025C4.21202 4.59074 4.17458 4.4822 4.10568 4.39422L1.05595 0.5H9.37356L6.30082 4.39271C6.23117 4.48095 6.19328 4.59008 6.19328 4.7025V9.10544L4.21202 10.1654Z" />
	</svg>
);

export default SvgMIconFilter;
