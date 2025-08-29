const About = () => {
  return (
    <div className="px-52 pb-12">
      <div className=" py-20 flex items-center justify-between">
        <div className="left w-1/2">
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
            <span className="text-ligth-orange">Mark Lester</span> . Iam a FullStack Developer   <br />
            and I'm very passionate and dedicated to my work.
          </p>
          <p className="mt-4">
            With experience i gained from being a fullstack developer, I
            have acquired <br /> the skills and knowledge necessary to help and contribute to make the project succeed. I enjoy the way im analyzing and solving problems.
          </p>

          <div className="flex space-x-6 mt-10">
            <div className="leading-8">
              <h1 className="text-ligth-gray underline font-normal">AGE</h1>
              <p className="text-dark-blue font-bold text-[17px]">22</p>
            </div>
         
            <div className="leading-8">
              <h1 className="text-ligth-gray underline font-normal">MAIL</h1>
              <p className="text-dark-blue font-bold text-[17px]">
                marklestermarananpal@gmail.com
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
            3+
          </span>{" "}
          MONTHS OF EXPERIENCE
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
