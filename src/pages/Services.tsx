import { motion } from "framer-motion";
import { useState } from "react";
import coding from "../images/coding.jpg";

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-52 py-10 relative">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={() => setIsOpen(false)} // Clicking outside closes modal
        >
          {/* Modal Content (Centered) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-14 rounded-lg shadow-lg max-w-3xl w-full relative z-50"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}

            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute border-2 border-black 
             p-1 rounded-md top-3 right-3 
             text-gray-600 hover:text-gray-900"
              whileHover={{ borderRadius: "50%", scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              ✖
            </motion.button>
            <img src={coding} alt="" className="h-[22rem] w-full" />
            <h2 className="text-2xl font-inter mt-3 font-bold text-dark-blue mb-3">
              Web Design
            </h2>
            <p className="text-light-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              unde rerum? Quae ipsum ea qui nobis dicta odit incidunt officiis
              doloremque accusantium, eveniet praesentium cum et sed quasi, rem
              laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Omnis maxime molestias reprehenderit asperiores error in
              nisi earum facilis ullam numquam.
            </p>
          </motion.div>
        </motion.div>
      )}
      <div className="flex justify-between items-center">
        <div>
          <p className="font-karla text-[16px] uppercase font-semibold text-ligth-gray">
            - Services
          </p>
          <h1 className="text-[35px] font-inter font-extrabold text-dark-blue">
            My Services
          </h1>
        </div>
        <div>
          <h1 className="text-dark-blue underline-offset-4 underline text-[16px] font-bold">
            marklesterpal@gmail.com
          </h1>
        </div>
      </div>
      <div className="cards grid grid-cols-3 gap-9 mt-12">
        <motion.div
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ y: -8 }} // Hover lifts the card
          transition={{ type: "spring", stiffness: 200 }}
          className="border border-1 border-gray-300 p-10 space-y-3.5 rounded-md -z-0"
        >
          <p className="font-karla text-[21px] uppercase font-medium text-light-paragraph">
            01
          </p>
          <h1 className="text-[27px] font-inter font-extrabold text-dark-blue">
            Web Design
          </h1>
          <p className="font-karla text-[16px] font-medium text-light-paragraph w-[10rem]">
            Web Development is the process of programming ...
          </p>
          <div className="flex items-center space-x-4">
            <h1 className="font-inter font-medium text-[16px] text-dark-blue">
              Read More
            </h1>
            <svg
              width={18}
              height={18}
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m12.563 5.25 6.75 6.75-6.75 6.75" />
              <path d="M18.375 12H4.687" />
            </svg>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 200 }}
          onClick={() => setIsOpen(!isOpen)}
          className="border border-1 border-gray-300 p-10 space-y-3.5 rounded-md"
        >
          <p className="font-karla text-[21px] uppercase font-medium text-light-paragraph">
            01
          </p>
          <h1 className="text-[27px] font-inter font-extrabold text-dark-blue">
            Web Design
          </h1>
          <p className="font-karla text-[16px] font-medium text-light-paragraph w-[10rem]">
            Web Development is the process of programming ...
          </p>
          <div className="flex items-center space-x-4">
            <h1 className="font-inter font-medium text-161px] text-dark-blue">
              Read More{" "}
            </h1>
            <svg
              width={18}
              height={18}
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m12.563 5.25 6.75 6.75-6.75 6.75" />
              <path d="M18.375 12H4.687" />
            </svg>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 200 }}
          onClick={() => setIsOpen(!isOpen)}
          className="border border-1 border-gray-300 p-10 space-y-3.5 rounded-md"
        >
          <p className="font-karla text-[21px] uppercase font-medium text-light-paragraph">
            01
          </p>
          <h1 className="text-[27px] font-inter font-extrabold text-dark-blue">
            Web Design
          </h1>
          <p className="font-karla text-[16px] font-medium text-light-paragraph w-[10rem]">
            Web Development is the process of programming ...
          </p>
          <div className="flex items-center space-x-4">
            <h1 className="font-inter font-medium text-161px] text-dark-blue">
              Read More{" "}
            </h1>
            <svg
              width={18}
              height={18}
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m12.563 5.25 6.75 6.75-6.75 6.75" />
              <path d="M18.375 12H4.687" />
            </svg>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 200 }}
          onClick={() => setIsOpen(!isOpen)}
          className="border border-1 border-gray-300 p-10 space-y-3.5 rounded-md"
        >
          <p className="font-karla text-[21px] uppercase font-medium text-light-paragraph">
            01
          </p>
          <h1 className="text-[27px] font-inter font-extrabold text-dark-blue">
            Web Design
          </h1>
          <p className="font-karla text-[16px] font-medium text-light-paragraph w-[10rem]">
            Web Development is the process of programming ...
          </p>
          <div className="flex items-center space-x-4">
            <h1 className="font-inter font-medium text-161px] text-dark-blue">
              Read More{" "}
            </h1>
            <svg
              width={18}
              height={18}
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m12.563 5.25 6.75 6.75-6.75 6.75" />
              <path d="M18.375 12H4.687" />
            </svg>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 200 }}
          onClick={() => setIsOpen(!isOpen)}
          className="border border-1 border-gray-300 p-10 space-y-3.5 rounded-md"
        >
          <p className="font-karla text-[21px] uppercase font-medium text-light-paragraph">
            01
          </p>
          <h1 className="text-[27px] font-inter font-extrabold text-dark-blue">
            Web Design
          </h1>
          <p className="font-karla text-[16px] font-medium text-light-paragraph w-[10rem]">
            Web Development is the process of programming ...
          </p>
          <div className="flex items-center space-x-4">
            <h1 className="font-inter font-medium text-161px] text-dark-blue">
              Read More{" "}
            </h1>
            <svg
              width={18}
              height={18}
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m12.563 5.25 6.75 6.75-6.75 6.75" />
              <path d="M18.375 12H4.687" />
            </svg>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 200 }}
          onClick={() => setIsOpen(!isOpen)}
          className="border border-1 border-gray-300 p-10 space-y-3.5 rounded-md"
        >
          <p className="font-karla text-[21px] uppercase font-medium text-light-paragraph">
            01
          </p>
          <h1 className="text-[27px] font-inter font-extrabold text-dark-blue">
            Web Design
          </h1>
          <p className="font-karla text-[16px] font-medium text-light-paragraph w-[10rem]">
            Web Development is the process of programming ...
          </p>
          <div className="flex items-center space-x-4">
            <h1 className="font-inter font-medium text-161px] text-dark-blue">
              Read More{" "}
            </h1>
            <svg
              width={18}
              height={18}
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m12.563 5.25 6.75 6.75-6.75 6.75" />
              <path d="M18.375 12H4.687" />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
