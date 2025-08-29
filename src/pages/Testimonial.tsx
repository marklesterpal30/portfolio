import "flowbite";
import user1 from "../images/user1.jpg";

const Testimonial = () => {
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
          {/* Item 1 */}
          <div className="duration-700 ease-in-out" data-carousel-item="active">
            <div className="h-[19rem] text-center flex flex-col  items-center">
              <p className="font-inter font-medium text-light-gray text-[24px] w-[44rem]">
                The Code Quanlity,Customer Support, and design are awesome and
                its good support they are giving. They give an instant solution
                to our needs. Realy awesome. I will storngly recommend to my
                friends
              </p>
              <div className="flex space-x-6 items-center mt-6">
                <img src={user1} className="w-12 h-12 rounded-full" alt="" />
                <h1 className="font-inter text-dark-blue text-[30px] font-medium">
                  John Doe
                </h1>
              </div>
              <p className="text-light-paragraph font-inter font-medium text-[17px] text-center mt-3">
                User Designer at U.A Unilab
              </p>
            </div>
          </div>
          {/* Item 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            world
          </div>
          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            ang galing
          </div>
          {/* Item 4 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            mogna pala
          </div>
          {/* Item 5 */}
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-32  left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full !bg-red-400"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full !bg-red-400"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full !bg-red-400"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full !bg-red-400"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
