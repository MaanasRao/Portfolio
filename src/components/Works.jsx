import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="bg-tertiary p-5 rounded-2xl w-full shadow-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-white/5"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          {source_code_link && (
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2 border border-gray-700 hover:bg-gray-800 transition-colors"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="github"
                className="w-1/2 h-1/2 object-contain invert"
              />
            </div>
          )}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] line-clamp-4 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>

      <div className="mt-5 flex gap-4">
        {live_demo_link && (
          <a
            href={live_demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white py-2.5 rounded-lg text-center font-medium shadow-md transition-all active:scale-95"
          >
            Live Demo
          </a>
        )}
        {source_code_link && (
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-primary border border-white/10 hover:bg-gray-900 text-white py-2.5 rounded-lg text-center font-medium shadow-md transition-all active:scale-95"
          >
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  const showLessProjects = () => {
    setVisibleProjects(3);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world
          examples of my work. Each project is briefly described with links to
          code repositories and live demos in it. It reflects my ability to solve
          complex problems, work with different technologies, and manage projects
          effectively.
        </motion.p>
      </div>

    
      <div className="mt-20 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>


      <div className="w-full flex justify-center my-20">
        {visibleProjects < projects.length ? (
          <button
            onClick={showMoreProjects}
            className="bg-tertiary hover:bg-white hover:text-tertiary text-white font-bold py-3 px-10 rounded-xl outline-none shadow-primary transition-all duration-300 transform active:scale-95 border border-white/10"
          >
            View More Projects
          </button>
        ) : (
          <button
            onClick={showLessProjects}
            className="bg-tertiary hover:bg-white hover:text-tertiary text-white font-bold py-3 px-10 rounded-xl outline-none shadow-primary transition-all duration-300 transform active:scale-95 border border-white/10"
          >
            Show Less
          </button>
        )}
      </div>
    </>
  );
};


export default SectionWrapper(Works, "projects");