import React, { useState } from "react"; // 1. Import useState
import Tilt from "react-tilt";
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
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
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
              className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white py-2 rounded-lg text-center font-medium shadow-md transition"
            >
              Live Demo
            </a>
          )}
          {source_code_link && (
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg text-center font-medium shadow-md transition"
            >
              GitHub
            </a>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  // 2. State to track how many projects are shown
  const [visibleProjects, setVisibleProjects] = useState(3);

  // 3. Function to load more projects (increments by 3)
  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3);
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

      {/* Projects Grid */}
      <div className="mt-20 flex flex-wrap gap-7">
        {/* 4. Slice the projects array based on state */}
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* 5. Load More Button */}
      {visibleProjects < projects.length && (
        <div className="w-full flex justify-center mt-10 fade-in">
          <button
            onClick={showMoreProjects}
            className="bg-tertiary hover:bg-white hover:text-tertiary text-white font-bold py-3 px-8 rounded-xl outline-none w-fit shadow-primary transition-all duration-300 ease-in-out"
          >
            View More Projects
          </button>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "works");