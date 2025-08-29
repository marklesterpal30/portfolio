const Contact = () => {
  return (
    <div className="bg-light-green px-52 py-20 flex space-x-32">
      <div className="w-full">
        <p className="text-light-gray font-karla font-semibold">
          - LETS CONNECT
        </p>
        <h1 className="font-extrabold text-dark-blue text-[34px] font-inter">
          Get in touch
        </h1>
        <p className="font-karla text-light-gray mt-5">
          I'm currently avaliable to take on new projects, so feel free to send
          me a message about anything that you want to run past me. You can
          contact anytime at 24
        </p>
        <p className="text-dark-blue mt-10 font-bold text-[18px] font-inter underline underline-offset-4">
          +639 275 621 430
        </p>
        <p className="text-dark-blue mt-2 font-bold text-[18px] font-inter underline underline-offset-4">
          marklesterpal@gmail.com
        </p>
        <p className="text-dark-blue mt-2 font-bold text-[18px] font-inter underline underline-offset-4">
          Victoria Oriental Mindoro
        </p>
      </div>
      <div className="w-full space-y-5">
        <input
          type="text"
          className="p-5 font-inter text-[17px] w-full"
          placeholder="Enter your name"
        />

        <input
          type="text"
          className="p-5 font-inter text-[17px] w-full"
          placeholder="Your email"
        />

        <textarea
          name=""
          className="w-full p-5 h-[9rem]"
          placeholder="Write something.."
          id=""
        ></textarea>

        <button className="text-white bg-dark-blue font-karla text-[16px] px-12 rounde-sm py-3">
          Submit now
        </button>
      </div>
    </div>
  );
};

export default Contact;
