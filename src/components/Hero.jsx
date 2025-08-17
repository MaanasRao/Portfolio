import React from "react";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-x-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 h-full px-6 md:px-16">
        
        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-gradient">Maanas</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4`}>
            I'm into <span className="text-cyan-400">Web Development</span>
          </p>

          <a href="/Maanas_Resume.pdf" download>
            <button className="mt-8 px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-semibold shadow-lg transition">
              Download Resume
            </button>
          </a>
        </div>

        {/* Illustration Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/logo.svg"  // replace with your actual hero illustration path
            alt="Hero Illustration"
            className="w-3/4 md:w-full h-auto max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
