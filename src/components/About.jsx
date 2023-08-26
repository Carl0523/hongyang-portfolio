import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

import {SectionWrapper} from '../hoc';

const ServiceCard = ({ index, icon, title }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">

      {/* 1. The bottom layer that control motion and border color */}
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 p-[1px] rounded-full shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-full py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-center font-bold text-[20px]">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <React.Fragment>
      <div className={`cursor-default select-none`}>
        {/* 1. The heading text */}
        <motion.div variants={textVariant()}>
          <h3 className={styles.sectionSubText}>Introduction</h3>
          <h2 className={styles.sectionHeadText}>Overview</h2>
        </motion.div>

        {/* 2. The introduction about myself */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary sm:text-[18px] text-[14px] leading-[30px]"
        >
          Hi, there! I'm <span className="text-primaryFont">Hong Yang</span>, a
          Computer Science major student with a passion for Software Engineer.
          With years of experiences in front end and java, I'm looking forward
          to find an internship in Software Engineer. What truly excites me is
          how I can make application that can be enjoyed by people. And I will
          bring this enthusiasm into every project I undertake.
        </motion.p>

        {/* 3. The Card for services  */}
        <div className="mt-20 flex flex-wrap  gap-10">
          {services.map((service, index) => {
            return <ServiceCard key={service.title} index={index} {...service} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SectionWrapper(About, 'about');
