import { SVGProps, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { MColours } from "../../../../theme";

import "./MLoadingLogo.scss";

export const MLoadingLogo = ({
  width = 62,
  height = 16,
  backgroundEffect = "none",
  message = "",
  ...props
}: SVGProps<SVGSVGElement> & {
  backgroundEffect: "none" | "blur" | "greyScale" | "dark";
  message: string;
}) => {
  const [svgWidth, setSvgWidth] = useState(width);
  const [svgHeight, setSvgHeight] = useState(height);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!width) return;

    setSvgWidth(
      Math.min(
        Number(width),
        containerRef.current?.parentElement?.offsetWidth ?? Infinity
      )
    );
  }, [width]);

  useEffect(() => {
    if (!height) return;

    setSvgHeight(
      Math.min(
        Number(height),
        containerRef.current?.parentElement?.offsetHeight ?? Infinity
      )
    );
  }, [height]);

  return (
    <div
      ref={containerRef}
      className={classNames("m-loading-logo-root", backgroundEffect)}
    >
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox="0 0 62 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        id="loading-logo"
        className={`animate ${props.className}`.trim()}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M51.5786 0C49.0946 0 46.9018 1.86836 42.1015 5.33935C39.4101 7.28548 36.8908 8.83891 35.3841 8.83891C33.7119 8.83891 32.7368 8.21268 31.6912 7.43457C25.4988 2.93048 22.5228 0.000214829 18.9777 0.000214829C16.3371 0.000214829 13.9724 2.00156 7.67439 6.55463C3.74741 9.39381 2.88926 9.99748 0 10.269C6.74895 15.3042 7.57335 16 10.4203 16C12.9045 16 15.0863 14.1488 19.8976 10.6607C22.6111 8.69304 25.1083 7.16109 26.615 7.16109C28.2872 7.16109 29.2623 7.78732 30.308 8.56564C36.5003 13.0695 39.4763 16 43.0214 16C45.662 16 48.0269 13.9984 54.3252 9.44537C58.2519 6.60641 59.1101 6.00252 62 5.73098C55.2495 0.69583 54.4266 0 51.5786 0"
          fill="url(#paint0_linear_2914_30730)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2914_30730"
            x1="8.1437"
            y1="8.87504"
            x2="45.4112"
            y2="-12.5428"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={MColours.brand.purple} />
            <stop offset="0.13" stopColor="#C83286" />
            <stop offset="0.36" stopColor="#E7446D" />
            <stop offset="0.47" stopColor="#F94E5F" />
            <stop offset="0.6" stopColor="#FB5F3F" />
            <stop offset="0.81" stopColor={MColours.brand.orange} />
          </linearGradient>
        </defs>
      </svg>
      {message && (
        <span
          id="loading-message"
          style={{ top: `calc(50% + ${Number(svgHeight) / 2}px)` }}
        >
          {message}
        </span>
      )}
    </div>
  );
};

MLoadingLogo.defaultProps = {
  backgroundEffect: "none",
  message: "",
  width: 62,
  height: 16,
};
