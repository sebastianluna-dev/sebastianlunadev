import { motion } from "framer-motion";
import { useViewportRatio } from "@/hooks/useViewportRatio";

export const SideInAnimation = ({ id, children }) => {
  const viewportRatio = useViewportRatio(id);
  const showAnimation = Boolean(viewportRatio > .2 && viewportRatio < .8)

  const variants = {
    visible: {
      opacity: 1,
      x: 0
    },
    invisible: {
      opacity: 0,
      x: -100
    }
  }

  return (
    <div id={id}>
      <motion.div
        variants={variants}
        animate={showAnimation ? "visible" : "invisible"}
        transition={{duration: 1}}
      >
        {children}
      </motion.div>
    </div>
  );
};