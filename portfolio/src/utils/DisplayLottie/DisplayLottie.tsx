import { Suspense } from "react";
import Lottie, { Options } from "react-lottie";

type DisplayLottieProps = {
  animationData: any;
};
// TODO - Add falback loading display when Lottie animation is loading
const DisplayLottie = ({ animationData }: DisplayLottieProps) => {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div>
      <div>
        <Lottie isClickToPauseDisabled={true} options={defaultOptions} />
      </div>
    </div>
  );
};

export default DisplayLottie;

// TODO - Create Loading Component
const Loading = () => <h1>Loading</h1>;
