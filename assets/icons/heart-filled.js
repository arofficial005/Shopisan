import * as React from "react";
import Svg, { Path } from "react-native-svg";

function HeartFilled({ height, width }, props) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.313 3c.789 0 1.576.111 2.325.362 4.614 1.5 6.276 6.563 4.888 10.988a15.91 15.91 0 01-3.762 6.011 48.07 48.07 0 01-7.913 6.2l-.313.189-.325-.201a47.619 47.619 0 01-7.961-6.2 16.166 16.166 0 01-3.764-6c-1.412-4.424.25-9.487 4.914-11.013a5.65 5.65 0 011.111-.261h.15c.351-.051.7-.075 1.05-.075h.138c.787.024 1.55.161 2.288.412h.074c.05.024.088.05.113.074.276.089.537.189.787.326l.475.213c.115.061.244.155.355.235.07.052.134.098.183.127l.062.037c.107.062.218.127.313.2A7.829 7.829 0 0120.313 3zm3.325 9c.513-.014.95-.425.988-.952V10.9c.037-1.752-1.024-3.338-2.638-3.95a1.001 1.001 0 00-1.262.625c-.175.525.1 1.1.625 1.286.8.3 1.337 1.089 1.337 1.962v.04c-.024.285.063.562.238.774.175.213.437.336.712.363z"
        fill="#E04A5D"
      />
    </Svg>
  );
}

export default HeartFilled;