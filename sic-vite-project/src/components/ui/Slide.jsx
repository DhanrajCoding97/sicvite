import React, {useRef, useEffect} from 'react'
import { motion, useInView, useAnimation } from "framer-motion";

const Slide = ({children}) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start("visible");
    }
  }, [isInview]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0},
        visible: { opacity: 1},
      }}
      transition={{
        type: "spring",
        duration: 0.2,
        damping: 80,
        delay: 0.5,
        stiffness: 100,
      }}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
}

export default Slide