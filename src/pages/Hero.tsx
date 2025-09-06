import me from "../images/me3.png";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52 flex flex-col lg:flex-row justify-between bg-light-green items-center py-10 sm:py-16 lg:py-20">
      <div className="Left text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-[#130F49] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-inter">
          Hi, <span className="text-light-violet">I'm Mark</span>
        </h1>
        <h1 className="text-[#130F49] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-inter mt-1">
          <Typewriter
            options={{
              strings: ["Front-end Developer", "Back-end Developer", "Software Developer"],
              autoStart: true,
              loop: true,
              delay: 70,
              deleteSpeed: 50,
            }}
          />
        </h1>
        <h1 className="text-[#130F49] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-inter mt-1">
          Based in Philippines
        </h1>
        <p className="tracking-wide font-karla font-normal text-gray-700/95 text-sm sm:text-base mt-4">
          I'm a Front-end & Back-end Developer <br className="hidden sm:block" /> with 3 months of Experience
        </p>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mt-6 lg:mt-8">
          <button className="btn px-6 sm:px-7 py-3 bg-dark-blue text-white text-sm sm:text-base">
            Get a Project?
          </button>
          <button className="btn px-6 sm:px-7 py-3 border border-black bg-transparent hover:bg-dark-blue hover:text-white text-sm sm:text-base">
            Lets Talk
          </button>
        </div>
        <div className="mt-8 lg:mt-12 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2">
          <div className="bg-ligth-orange h-16 sm:h-24 w-1 rounded-md"></div>
          <div className="font-karla text-dark-blue font-semibold text-sm sm:text-base lg:text-[18px] tracking-wide text-center sm:text-left">
            <p>+63 9275621430</p>
            <p className="break-all">marklestermarananpal@gmail.com</p>
            <p>Oriental Mindoro</p>
          </div>
        </div>
      </div>

      <div className="Right flex justify-center lg:justify-end">
        <img className="w-64 sm:w-80 md:w-96 lg:w-[490px] max-w-full" src={me} alt="Mark Lester" />
      </div>
    </div>
  );
};

export default Hero;
