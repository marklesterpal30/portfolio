import me from "../images/me3.png";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="h-screen px-52 flex justify-between bg-light-green items-center py-20">
      <div className="Left">
        <h1 className="text-[#130F49] text-6xl font-bold  font-inter">
          Hi, <span className="text-light-violet">I'm Mark</span>
        </h1>
        <h1 className="text-[#130F49] text-6xl  font-bold font-inter mt-1">
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
        <h1 className="text-[#130F49] text-6xl  font-bold font-inter mt-1">
          Based in Philippines
        </h1>
        <p className="tracking-wide font-karla font-normal text-gray-700/95">
          I'm a Front-end & Back-end Devoper <br /> with 3 months of Experience
        </p>
        <div className="flex space-x-3 lg:mt-8">
          <button className="btn px-7 bg-dark-blue text-white">
            Get a Project?
          </button>
          <button className="btn px-7 border border-black bg-transparent hover:bg-dark-blue hover:text-white">
            Lets Talk
          </button>
        </div>
        <div className="mt-12 flex items-center space-x-2">
          <div className="bg-ligth-orange  h-24 w-1 rounded-md"></div>
          <div className="font-karla text-dark-blue font-semibold text-[18px] tracking-wide">
            <p>+63 9275621430</p>
            <p>marklestermarananpal@gmail.com</p>
            <p>Oriental Mindoro</p>
          </div>
        </div>
      </div>

      <div className="Right">
        <img className="w-[490px]" src={me} alt="walang tao" />
      </div>
    </div>
  );
};

export default Hero;
