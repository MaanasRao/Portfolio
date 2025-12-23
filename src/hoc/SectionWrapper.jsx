import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        id={idName}
        variants={staggerContainer()}
        initial="hidden"
        animate="show"
        className={`${styles.padding} max-w-7xl mx-auto relative overflow-visible`}
      >
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
