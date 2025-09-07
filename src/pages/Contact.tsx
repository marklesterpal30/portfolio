const Contact = () => {
  return (
    <div className="bg-light-green px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52 py-10 md:py-20 flex flex-col lg:flex-row lg:space-x-16 xl:space-x-32 space-y-8 lg:space-y-0">
      <div className="w-full lg:w-1/2">
        <p className="text-light-gray font-karla font-semibold text-sm sm:text-base">
          - LET'S CONNECT
        </p>
        <h1 className="font-extrabold text-dark-blue text-2xl sm:text-3xl md:text-[34px] font-inter mt-2">
          Get in touch
        </h1>
        <p className="font-karla text-light-gray mt-4 md:mt-5 text-sm sm:text-base leading-relaxed">
          I'm currently available to take on new projects, so feel free to send
          me a message about anything that you want to run past me. You can
          contact anytime at 24/7
        </p>
        <div className="mt-6 md:mt-10 space-y-3 md:space-y-2">
          <p className="text-dark-blue font-bold text-base sm:text-lg md:text-[18px] font-inter underline underline-offset-4 break-all">
            +639 275 621 430
          </p>
          <p className="text-dark-blue font-bold text-base sm:text-lg md:text-[18px] font-inter underline underline-offset-4 break-all">
            marklesterpal@gmail.com
          </p>
          <p className="text-dark-blue font-bold text-base sm:text-lg md:text-[18px] font-inter underline underline-offset-4">
            Victoria Oriental Mindoro
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 space-y-4 md:space-y-5">
        <input
          type="text"
          className="p-4 md:p-5 font-inter text-sm sm:text-base md:text-[17px] w-full rounded border border-gray-200 focus:border-dark-blue focus:outline-none transition-colors"
          placeholder="Enter your name"
        />

        <input
          type="email"
          className="p-4 md:p-5 font-inter text-sm sm:text-base md:text-[17px] w-full rounded border border-gray-200 focus:border-dark-blue focus:outline-none transition-colors"
          placeholder="Your email"
        />

        <textarea
          name="message"
          className="w-full p-4 md:p-5 h-32 sm:h-36 md:h-[9rem] rounded border border-gray-200 focus:border-dark-blue focus:outline-none transition-colors resize-none font-inter text-sm sm:text-base"
          placeholder="Write something.."
          id="message"
        ></textarea>

        <button className="text-white bg-dark-blue font-karla text-sm sm:text-base md:text-[16px] px-8 sm:px-10 md:px-12 rounded py-3 hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto">
          Submit now
        </button>
      </div>
    </div>
  );
};

export default Contact;
