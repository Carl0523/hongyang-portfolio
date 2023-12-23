import { motion } from "framer-motion";

import {BsFillRocketFill} from 'react-icons/bs';




const BackToTop = () => {
    return (
        <div
          onClick={() => window.scrollTo(0, 0)}
          className="sm:flex hidden flex-col fixed justify-center items-center  w-14 h-14 rounded-full bg-slate-200 z-20 cursor-pointer hover:scale-110 bottom-10 right-10"
        >
          <p className="text-tertiary font-bold text-[13px]">TOP</p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <BsFillRocketFill size="1.75rem" color="#151030" />
          </motion.div>
        </div>
    )
}


export default BackToTop;