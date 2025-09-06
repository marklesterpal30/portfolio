import "flowbite";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import user1 from "../images/user1.jpg";

const Testimonial = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const slides = [
    (
      <div className="h-[19rem] text-center flex flex-col items-center justify-center px-6">
        <p className="font-inter font-medium text-light-gray text-[20px] md:text-[22px] max-w-3xl">
          “The code quality and support are excellent. They respond quickly and
          provide clear solutions. Highly recommended!”
        </p>
        <div className="flex space-x-4 items-center mt-6">
          <img src={user1} className="w-12 h-12 rounded-full" alt="" />
          <div className="text-left">
            <h1 className="font-inter text-dark-blue text-[20px] font-semibold">John Doe</h1>
            <p className="text-light-paragraph font-inter text-[14px]">UI/UX Designer, Unilab</p>
          </div>
        </div>
      </div>
    ),
    (
      <div className="h-[19rem] text-center flex flex-col items-center justify-center px-6">
        <p className="font-inter font-medium text-light-gray text-[20px] md:text-[22px] max-w-3xl">
          “Professional and reliable. They delivered on time with clean,
          maintainable code. Great communication throughout.”
        </p>
        <div className="flex space-x-4 items-center mt-6">
          <img src={user1} className="w-12 h-12 rounded-full" alt="" />
          <div className="text-left">
            <h1 className="font-inter text-dark-blue text-[20px] font-semibold">Jane Smith</h1>
            <p className="text-light-paragraph font-inter text-[14px]">Product Manager, Apex</p>
          </div>
        </div>
      </div>
    ),
    (
      <div className="h-[19rem] text-center flex flex-col items-center justify-center px-6">
        <p className="font-inter font-medium text-light-gray text-[20px] md:text-[22px] max-w-3xl">
          “They took our idea and turned it into a fast, modern web app. The UI
          looks great and works perfectly on mobile.”
        </p>
        <div className="flex space-x-4 items-center mt-6">
          <img src={user1} className="w-12 h-12 rounded-full" alt="" />
          <div className="text-left">
            <h1 className="font-inter text-dark-blue text-[20px] font-semibold">Carlos Reyes</h1>
            <p className="text-light-paragraph font-inter text-[14px]">Founder, NovaTech</p>
          </div>
        </div>
      </div>
    ),
    (
      <div className="h-[19rem] text-center flex flex-col items-center justify-center px-6">
        <p className="font-inter font-medium text-light-gray text-[20px] md:text-[22px] max-w-3xl">
          “Solid backend and smooth frontend. The handoff was seamless and
          documentation was clear. Would definitely work together again.”
        </p>
        <div className="flex space-x-4 items-center mt-6">
          <img src={user1} className="w-12 h-12 rounded-full" alt="" />
          <div className="text-left">
            <h1 className="font-inter text-dark-blue text-[20px] font-semibold">Mika Tan</h1>
            <p className="text-light-paragraph font-inter text-[14px]">Engineering Lead, Horizon</p>
          </div>
        </div>
      </div>
    ),
  ];

  const handleDotClick = (index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  return (
    <div
      id="indicators-carousel"
      className="relative w-full   px-52 py-20"
      data-carousel="static"
    >
      <div className="bg-more-light-pink p-14">
        <div>
          <p className="text-center text-light-gray font-semibold text-[16px] font-karla">
            - TESTIMONIAL
          </p>
          <h1 className="text-dark-blue font-extrabold font-inter text-center text-[35px]">
            What Client's say?
          </h1>
        </div>
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96 mt-8">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
              className="w-full h-full"
            >
              {slides[active]}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-32  left-1/2">
          <button
            type="button"
            className={`w-3 h-3 rounded-full ${active === 0 ? "!bg-red-500" : "!bg-red-400"}`}
            aria-current={active === 0}
            aria-label="Slide 1"
            data-carousel-slide-to="0"
            onClick={() => handleDotClick(0)}
          ></button>
          <button
            type="button"
            className={`w-3 h-3 rounded-full ${active === 1 ? "!bg-red-500" : "!bg-red-400"}`}
            aria-current={active === 1}
            aria-label="Slide 2"
            data-carousel-slide-to="1"
            onClick={() => handleDotClick(1)}
          ></button>
          <button
            type="button"
            className={`w-3 h-3 rounded-full ${active === 2 ? "!bg-red-500" : "!bg-red-400"}`}
            aria-current={active === 2}
            aria-label="Slide 3"
            data-carousel-slide-to="2"
            onClick={() => handleDotClick(2)}
          ></button>
          <button
            type="button"
            className={`w-3 h-3 rounded-full ${active === 3 ? "!bg-red-500" : "!bg-red-400"}`}
            aria-current={active === 3}
            aria-label="Slide 4"
            data-carousel-slide-to="3"
            onClick={() => handleDotClick(3)}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
