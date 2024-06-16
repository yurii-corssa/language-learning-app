import { DotsLoaderStyled } from "./DotsLoader.styled";

const DotsLoader = (props) => {
  return (
    <DotsLoaderStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" {...props}>
      <circle cx={4} cy={14} r={3} fill="currentColor">
        <animate
          id="dotsLoader"
          fill="freeze"
          attributeName="opacity"
          begin="0;svgSpinners3DotsFade1.end-0.25s"
          dur="0.75s"
          values="1;0.2"
        ></animate>
      </circle>
      <circle cx={14} cy={14} r={3} fill="currentColor" opacity={0.4}>
        <animate
          fill="freeze"
          attributeName="opacity"
          begin="dotsLoader.begin+0.15s"
          dur="0.75s"
          values="1;0.2"
        ></animate>
      </circle>
      <circle cx={24} cy={14} r={3} fill="currentColor" opacity={0.3}>
        <animate
          id="svgSpinners3DotsFade1"
          fill="freeze"
          attributeName="opacity"
          begin="dotsLoader.begin+0.3s"
          dur="0.75s"
          values="1;0.2"
        ></animate>
      </circle>
    </DotsLoaderStyled>
  );
};

export default DotsLoader;
