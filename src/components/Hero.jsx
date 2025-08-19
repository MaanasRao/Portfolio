import { useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "@tsparticles/slim";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1751961156655.json";

const Hero = () => {
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  // Mobile cursor alignment fix
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .Typewriter {
        display: inline-flex;
        align-items: center;
      }
      .Typewriter__cursor {
        margin-left: 2px;
        font-weight: bold;
      }
      @media (max-width: 768px) {
        .Typewriter__cursor {
          height: 1.2em;
          vertical-align: text-bottom;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-primary via-tertiary to-black-100 flex items-center justify-center overflow-hidden">
      {/* Particle Background (unchanged) */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outMode: "bounce",
            },
            number: { value: 60 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Main Content with fixed cursor alignment */}
      <div className="relative z-10 max-w-[1400px] w-full px-10 flex flex-col-reverse lg:flex-row items-center justify-center gap-20">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
              Maanas
            </span>
          </h1>

          <div className="text-xl sm:text-3xl text-white-100 mb-6 flex items-center justify-center lg:justify-start">
            <span>I'm into </span>
            <span className="text-cyan-400 font-semibold ml-2 h-[1.5em] flex items-center">
              <Typewriter
                words={[
                  "Web Development",
                  "Machine Learning",
                  "UI/UX Design",
                  "Data Science",
                ]}
                loop
                cursor
                cursorStyle="|"
                cursorColor="#00FFFF"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </div>

          <a href="/maanas_resume.pdf" download>
            <button className="mt-4 px-8 py-4 text-lg bg-[#915EFF] text-white font-semibold rounded-xl hover:bg-purple-700 transition">
              Download Resume
            </button>
          </a>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-[600px] drop-shadow-[0_0_60px_rgba(145,94,255,0.3)]">
            <Lottie animationData={animationData} loop autoplay />
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 z-10">
        <div className="w-[35px] h-[64px] border-4 border-secondary rounded-3xl flex justify-center items-start p-2 mx-auto">
          <div className="w-3 h-3 rounded-full bg-secondary animate-bounce" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
