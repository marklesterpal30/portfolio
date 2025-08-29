import { motion } from "framer-motion";
import { useState } from "react";
import coding from "../images/coding.jpg";

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<"frontend" | "backend" | "tools" | null>(null);

  const services = [
    {
      key: "frontend" as const,
      number: "01",
      title: "Frontend Development",
      blurb: "Building responsive, accessible UIs and SPAs.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Axios",
        "DaisyUI",
        "Chakra UI",
      ],
    },
    {
      key: "backend" as const,
      number: "02",
      title: "Backend Development",
      blurb: "Designing secure APIs and robust server logic.",
      tech: [
        "Node.js",
        "Express",
        "TypeScript",
        "REST",
        "JWT Auth",
        "Prisma / ORM",
        "PostgreSQL",
        "MongoDB",
        "Docker",
      ],
    },
    {
      key: "tools" as const,
      number: "03",
      title: "Web Development Tools",
      blurb: "Version control, collaboration and containerization for smooth delivery.",
      tech: ["Git", "GitHub", "Azure Devlops", "GitHub Copilot", "Docker"],
    },
  ];
  return (
    <div className="px-52 py-10 relative">
      {/* MODAL */}
      {isOpen && selectedService && (
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
            <img src={coding} alt="" className="h-[22rem] w-full object-cover" />
            <h2 className="text-2xl font-inter mt-3 font-bold text-dark-blue mb-3">
              {services.find((s) => s.key === selectedService)?.title}
            </h2>
            <p className="text-light-paragraph mb-4">
              {services.find((s) => s.key === selectedService)?.blurb}
            </p>
            <h3 className="font-inter font-semibold text-dark-blue mb-2">Tech stack</h3>
            <div className="flex flex-wrap gap-2">
              {services
                .find((s) => s.key === selectedService)
                ?.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-md border text-sm">
                    {t}
                  </span>
                ))}
            </div>
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
        {services.map((service) => (
          <motion.div
            key={service.key}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => {
              setSelectedService(service.key);
              setIsOpen(true);
            }}
            className="border border-1 border-gray-300 p-10 space-y-3.5 rounded-md cursor-pointer"
          >
            <p className="font-karla text-[21px] uppercase font-medium text-light-paragraph">
              {service.number}
            </p>
            <h1 className="text-[27px] font-inter font-extrabold text-dark-blue">
              {service.title}
            </h1>
            <p className="font-karla text-[16px] font-medium text-light-paragraph w-[16rem]">
              {service.blurb}
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
        ))}
      </div>
    </div>
  );
};

export default Services;
