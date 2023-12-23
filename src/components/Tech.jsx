import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <div className="text-center">
        <h2 className={`${styles.heroHeadText}`}>Technical Skill</h2>
        <p className={styles.sectionSubText}>
          I specialized in full stack development, especially MERN stack
        </p>
      </div>

      <div className="flex flex-wrap flex-row justify-center gap-10 mt-20">
        {technologies.map((tech) => (
          <div className="flex flex-col gap-1 items-center cursor-default select-none" key={tech.name}>
            <div className="w-28 h-28">
              <BallCanvas icon={tech.icon} />
            </div>
            <h3 className="text-[18px]">{tech.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
