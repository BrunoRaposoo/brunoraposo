import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
  children: JSX.Element;
  width?: "fit-content" | "100%"
}

export const RevealProjectsItems = ({ children, width = "fit-content"}: RevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])
  
  const projectsItemVariants = {
    hidden: { y: 20, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <div ref={ref} className="relative, overflow-hidden">
      <motion.div
        variants={projectsItemVariants}
      >{children}</motion.div>
    </div>
  )
}