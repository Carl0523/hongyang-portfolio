import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { projects } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative h-[650px] w-full flex flex-col justify-between">
          <div>
            {/* 1. The image of the project */}
            <img
              src={image}
              alt={name}
              className="w-full h-[275px] object-cover rounded-2xl"
            />

            {/* 2. The github icon appear on the top left */}
            <div className="absolute inset-0 flex justify-start m-3 card-image_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-2/3 h-2/3  hover:scale-150"
                />
              </div>
            </div>

            {/* 3. The name and description of the project */}
            <div className="mt-5">
              <h3 className="font-bold text-[22px]">{name}</h3>
              <p className="text-secondary mt-2 text-[14px]">{description}</p>
            </div>
          </div>

          {/* 4. The languagues tags for this project */}
          <div className="mt-4 flex flex-wrap">
            {tags.map((tag) => {
              return (
                <p key={tag.name} className={`text-[14px] mr-2 ${tag.color}`}>
                  #{tag.name}
                </p>
              );
            })}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <React.Fragment>
      {/* 1. The header and the sub-header */}
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Works</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      {/* 2. The description section */}
      <div className="w-full flex">
        <motion.p
          variant={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Welcome to my Projects showcase, where you can find my recently
          worked-on project. Each of them representing a unique challenge and an
          opportunity for growth. Furthermore, each project is briefly described
          with a link to code repositories.
        </motion.p>
      </div>

      {/* 3. Projects showcase */}
      <div className="mt-20 flex flex-wrap gap-8">
        {projects.map((project, index) => {
          return (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default SectionWrapper(Projects, "project");
