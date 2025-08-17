import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Glow color mapping
const glowClassMap = {
  cyan: "drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]",
  magenta: "drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]",
  violet: "drop-shadow-[0_0_8px_rgba(191,0,255,0.8)]",
  yellow: "drop-shadow-[0_0_8px_rgba(255,255,0,0.8)]",
};

// Service card with glow support
const ServiceCard = ({ index, title, icon, glow = "cyan" }) => {
  const glowClass = glowClassMap[glow] || glowClassMap.cyan;

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className={`w-16 h-16 object-contain ${glowClass}`}
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a Computer Science undergraduate at McMaster University (Class of 2027) with experience in data analytics, software development, and digital content creation. Currently, I’m a Data Analyst Intern at ZappyCare, working with SQL, Python, MongoDB, and Excel to analyze patient and transaction data and deliver visual reports that support claim validation and payment processing. Previously, as a Social Media Intern at Luharia Technologies, I created and managed paid and organic campaigns with tools like Mailchimp, Google Analytics, and Facebook Insights, contributing to a 10% increase in web traffic. Beyond internships, I’ve grown online communities as a YouTube Partner and Twitch Affiliate, producing and editing content with Adobe Premiere Pro and Photoshop. My skills span Python, SQL, HTML, data cleaning, reporting, and digital marketing, driven by a passion for problem-solving and creating impactful digital experiences.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
