import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="relative group w-28 h-28 p-2 bg-transparent hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-full h-full object-contain drop-shadow-[0_0_10px_cyan]"
          />
          
          {/* Tooltip */}
          <span
            className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 
              bg-black text-white text-xs px-2 py-1 rounded 
              border border-cyan-400 shadow-[0_0_8px_rgba(0,255,255,0.8)]
              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {technology.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
