const About = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52 pb-12">
      <div className="py-10 md:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-0">
        <div className="left w-full lg:w-1/2">
          <h1 className="text-sm sm:text-base md:text-[18px] text-ligth-gray font-medium">
            -NICE TO MEET YOU
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-[35px] font-bold font-inter text-dark-blue mt-2">
            Mark Lester
          </h1>
          <h1 className="font-karla text-sm sm:text-base md:text-[16px] font-semibold text-dark-blue mt-2">
            Front-end & Back-end Developer
          </h1>
          <button className="btn mt-4 md:mt-6 px-6 md:px-7 py-2 bg-dark-blue text-white rounded hover:bg-opacity-90 transition-colors">
            Get a Project?
          </button>
        </div>
        <div className="right text-light-paragraph leading-6 md:leading-8 text-sm sm:text-base md:text-[16px] w-full lg:w-1/2">
          <p>
            Hello there! My name is{" "}
            <span className="text-ligth-orange">Mark Lester</span>. I am a FullStack Developer{" "}
            and I'm very passionate and dedicated to my work.
          </p>
          <p className="mt-4">
            With experience I gained from being a fullstack developer, I
            have acquired the skills and knowledge necessary to help and contribute to make the project succeed. I enjoy the way I'm analyzing and solving problems.
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 mt-6 md:mt-10">
            <div className="leading-6 md:leading-8">
              <h1 className="text-ligth-gray underline font-normal text-sm">AGE</h1>
              <p className="text-dark-blue font-bold text-base md:text-[17px]">22</p>
            </div>
         
            <div className="leading-6 md:leading-8">
              <h1 className="text-ligth-gray underline font-normal text-sm">MAIL</h1>
              <p className="text-dark-blue font-bold text-xs sm:text-sm md:text-[17px] break-all">
                marklestermarananpal@gmail.com
              </p>
            </div>
            <div className="leading-6 md:leading-8">
              <h1 className="text-ligth-gray underline font-normal text-sm">
                GRADUATE AT
              </h1>
              <p className="text-dark-blue font-bold text-sm md:text-[17px]">
                Mindoro State University
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-4 md:gap-x-8">
        <div className="bg-light-blue font-karla text-sm md:text-[17px] py-8 md:py-10 px-4">
          <span className="text-dark-blue font-bold font-inter text-2xl md:text-[35px] block">
            3+
          </span>
          MONTHS OF EXPERIENCE
        </div>
        <div className="bg-light-pink font-karla text-sm md:text-[17px] py-8 md:py-10 px-4">
          <span className="text-dark-blue font-bold font-inter text-2xl md:text-[35px] block">
            50+
          </span>
          PROJECTS COMPLETED
        </div>
        <div className="bg-light-green font-karla text-sm md:text-[17px] py-8 md:py-10 px-4 sm:col-span-2 lg:col-span-1">
          <span className="text-dark-blue font-bold font-inter text-2xl md:text-[35px] block">
            30+
          </span>
          HAPPY CLIENTS
        </div>
      </div>
    </div>
  );
};

export default About;
