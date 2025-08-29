const About = () => {
  return (
    <div className="px-52 pb-12">
      <div className=" py-20 flex  justify-between">
        <div className="left">
          <h1 className="text-[18px] text-ligth-gray font-medium">
            -NICE TO MEET YOU
          </h1>
          <h1 className="text-[35px] font-bold font-inter text-dark-blue">
            Mark Lester
          </h1>
          <h1 className="font-karla text-[16px] font-semibold text-dark-blue">
            Front-end & Back-end Developer
          </h1>
          <button className="btn  mt-6 px-7 bg-dark-blue text-white">
            Get a Project?
          </button>
        </div>
        <div className="right text-light-paragraph leading-8 text-[16px    ]">
          <p>
            Hello there! My name is{" "}
            <span className="text-ligth-orange">Mark Lester</span> . I am a web
            designer & developer, <br />
            and I'm very passionate and dedicated to my work.
          </p>
          <p className="mt-4">
            With 20 years experience as a professional a graphic designer, I
            have acquired <br /> the skills and knowledge necessary to make your
            project a success. I enjoy <br /> every step of the design process,
            from discussion and collaboration.
          </p>

          <div className="flex space-x-6 mt-10">
            <div className="leading-8">
              <h1 className="text-ligth-gray underline font-normal">AGE</h1>
              <p className="text-dark-blue font-bold text-[17px]">22</p>
            </div>
            <div className="leading-8">
              <h1 className="text-ligth-gray underline font-normal">
                BORN IN{" "}
              </h1>
              <p className="text-dark-blue font-bold text-[17px]">
                Oriental Mindoro
              </p>
            </div>
            <div className="leading-8">
              <h1 className="text-ligth-gray underline font-normal">MAIL</h1>
              <p className="text-dark-blue font-bold text-[17px]">
                mark@gmail.com
              </p>
            </div>
            <div className="leading-8">
              <h1 className="text-ligth-gray underline font-normal">
                GRADUATE AT
              </h1>
              <p className="text-dark-blue font-bold text-[17px]">
                Mindoro State University
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 text-center gap-x-8">
        <div className="bg-light-blue font-karla text-[17px] py-10">
          {" "}
          <span className="text-dark-blue font-bold font-inter text-[35px] block">
            10+
          </span>{" "}
          YEARS OF EXPERIENCE
        </div>
        <div className="bg-light-pink font-karla text-[17px] py-10">
          {" "}
          <span className="text-dark-blue font-bold font-inter text-[35px] block">
            50+
          </span>{" "}
          PROJECTS COMPLETED
        </div>
        <div className="bg-light-green font-karla text-[17px] py-10">
          {" "}
          <span className="text-dark-blue font-bold font-inter text-[35px] block">
            30+
          </span>{" "}
          HAPPY CLIENTS
        </div>
      </div>
    </div>
  );
};

export default About;
