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
      <div className="h-[20rem] sm:h-[22rem] md:h-[24rem] text-center flex flex-col items-center justify-center px-4 sm:px-6">
        <p className="font-inter font-medium text-light-gray text-base sm:text-lg md:text-[20px] lg:text-[22px] max-w-3xl leading-relaxed">
          "The code quality and support are excellent. They respond quickly and
          provide clear solutions. Highly recommended!"
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-center mt-4 sm:mt-6 space-y-3 sm:space-y-0">
          <img src={user1} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" alt="" />
          <div className="text-center sm:text-left">
            <h1 className="font-inter text-dark-blue text-lg sm:text-[20px] font-semibold">John Doe</h1>
            <p className="text-light-paragraph font-inter text-sm sm:text-[14px]">UI/UX Designer, Unilab</p>
          </div>
        </div>
      </div>
    ),
    (
      <div className="h-[20rem] sm:h-[22rem] md:h-[24rem] text-center flex flex-col items-center justify-center px-4 sm:px-6">
        <p className="font-inter font-medium text-light-gray text-base sm:text-lg md:text-[20px] lg:text-[22px] max-w-3xl leading-relaxed">
          "Professional and reliable. They delivered on time with clean,
          maintainable code. Great communication throughout."
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-center mt-4 sm:mt-6 space-y-3 sm:space-y-0">
          <img src={user1} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" alt="" />
          <div className="text-center sm:text-left">
            <h1 className="font-inter text-dark-blue text-lg sm:text-[20px] font-semibold">Jane Smith</h1>
            <p className="text-light-paragraph font-inter text-sm sm:text-[14px]">Product Manager, Apex</p>
          </div>
        </div>
      </div>
    ),
    (
      <div className="h-[20rem] sm:h-[22rem] md:h-[24rem] text-center flex flex-col items-center justify-center px-4 sm:px-6">
        <p className="font-inter font-medium text-light-gray text-base sm:text-lg md:text-[20px] lg:text-[22px] max-w-3xl leading-relaxed">
          "They took our idea and turned it into a fast, modern web app. The UI
          looks great and works perfectly on mobile."
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-center mt-4 sm:mt-6 space-y-3 sm:space-y-0">
          <img src={user1} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" alt="" />
          <div className="text-center sm:text-left">
            <h1 className="font-inter text-dark-blue text-lg sm:text-[20px] font-semibold">Carlos Reyes</h1>
            <p className="text-light-paragraph font-inter text-sm sm:text-[14px]">Founder, NovaTech</p>
          </div>
        </div>
      </div>
    ),
    (
      <div className="h-[20rem] sm:h-[22rem] md:h-[24rem] text-center flex flex-col items-center justify-center px-4 sm:px-6">
        <p className="font-inter font-medium text-light-gray text-base sm:text-lg md:text-[20px] lg:text-[22px] max-w-3xl leading-relaxed">
          "Solid backend and smooth frontend. The handoff was seamless and
          documentation was clear. Would definitely work together again."
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-center mt-4 sm:mt-6 space-y-3 sm:space-y-0">
          <img src={user1} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" alt="" />
          <div className="text-center sm:text-left">
            <h1 className="font-inter text-dark-blue text-lg sm:text-[20px] font-semibold">Mika Tan</h1>
            <p className="text-light-paragraph font-inter text-sm sm:text-[14px]">Engineering Lead, Horizon</p>
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
      className="relative w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52 py-10 md:py-20"
      data-carousel="static"
    >
      <div className="bg-more-light-pink p-6 sm:p-8 md:p-12 lg:p-14 rounded-lg">
        <div className="mb-6 md:mb-8">
          <p className="text-center text-light-gray font-semibold text-sm sm:text-base md:text-[16px] font-karla">
            - TESTIMONIAL
          </p>
          <h1 className="text-dark-blue font-extrabold font-inter text-center text-2xl sm:text-3xl md:text-[35px] mt-2">
            What Client's say?
          </h1>
        </div>
        {/* Carousel wrapper */}
        <div className="relative h-[20rem] sm:h-[22rem] md:h-[24rem] overflow-hidden rounded-lg mt-6 md:mt-8">
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
        <div className="flex justify-center space-x-3 rtl:space-x-reverse mt-6 md:mt-8">
          <button
            type="button"
            className={`w-3 h-3 rounded-full transition-colors ${active === 0 ? "!bg-red-500" : "!bg-red-400"}`}
            aria-current={active === 0}
            aria-label="Slide 1"
            data-carousel-slide-to="0"
            onClick={() => handleDotClick(0)}
          ></button>
          <button
            type="button"
            className={`w-3 h-3 rounded-full transition-colors ${active === 1 ? "!bg-red-500" : "!bg-red-400"}`}
            aria-current={active === 1}
            aria-label="Slide 2"
            data-carousel-slide-to="1"
            onClick={() => handleDotClick(1)}
          ></button>
          <button
            type="button"
            className={`w-3 h-3 rounded-full transition-colors ${active === 2 ? "!bg-red-500" : "!bg-red-400"}`}
            aria-current={active === 2}
            aria-label="Slide 3"
            data-carousel-slide-to="2"
            onClick={() => handleDotClick(2)}
          ></button>
          <button
            type="button"
            className={`w-3 h-3 rounded-full transition-colors ${active === 3 ? "!bg-red-500" : "!bg-red-400"}`}
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
