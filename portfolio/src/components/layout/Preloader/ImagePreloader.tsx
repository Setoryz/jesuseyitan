import styled from "styled-components";

type Props = {
  strictWidth?: boolean;
  width: number;
  height?: number;
};
const ImagePreloader = styled("img")<Props>`
  /* position: relative; */
  z-index: 1;
  height: ${(props) => (props.height ? `${props.height}px` : "100%")};
  width: ${(props) =>
    `${props.width}px ${props.strictWidth ? "!important" : ""}`};
  transform: scale(1.02);
  animation: pulseAnim 1s infinite ease-in-out;
  border: none;

  @keyframes pulseAnim {
    0% {
      background-color: rgba(47, 129, 237, 0.1);
    }
    50% {
      background-color: #131720;
    }
    100% {
      background-color: rgba(47, 129, 237, 0.1);
    }
  }
`;

export default ImagePreloader;
