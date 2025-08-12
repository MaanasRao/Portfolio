import Lottie from "lottie-react";
import earthAnim from "../../assets/Earth and Connections.json";

const LottieEarth = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="scale-[1.3] sm:scale-[1.4] md:scale-[1.5] lg:scale-[1.6] xl:scale-[1.7]">
        <Lottie animationData={earthAnim} loop={true} />
      </div>
    </div>
  );
};

export default LottieEarth;
