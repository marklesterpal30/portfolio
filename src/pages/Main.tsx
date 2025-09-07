import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Testimonial from "./Testimonial";
import SocialConnectButton from "../components/SocialConnectButton";

const Main = () => {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonial />
      <Contact />
      <SocialConnectButton />
    </div>
  );
};

export default Main;
