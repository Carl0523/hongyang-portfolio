import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* 1. The leftborder effect + the introduction on the right*/}
      <div
        className={` ${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 select-none`}
      >
        {/* a. The leftborder make up with a rounded shape and line vertically */}
        <div className="flex flex-col justify-content items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#8053df]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* b. The introduction */}
        <div className="z-10 cursor-default">
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm{" "}
            <motion.span
              initial={{ translateY: -200, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primaryFont hover:underline underline-offset-[12px]"
            >
              <a
                href="https://github.com/Carl0523?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80"
              >
                Hong Yang
              </a>
            </motion.span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a computer science major student @{" "}
            <a
              href="https://www.vt.edu/"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer text-[#CF4420] hover:text-[#630031] duration-200 "
            >
              Virginia Tech
            </a>
            。
            <br className="sm:block hidden" />I specialize in Software
            Engineer。
          </p>
        </div>
      </div>

      {/* 2. 3d computer by using three.js */}
      <ComputersCanvas />

      {/* 3. A switch animation that notify the user to scroll down */}
      <div className="absolute xs:bottom-0 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[58px] rounded-3xl border-2 border-primaryFont flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-5 h-3 rounded-full bg-primaryFont mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
