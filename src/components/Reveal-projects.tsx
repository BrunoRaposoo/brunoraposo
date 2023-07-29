import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
  children: JSX.Element;
  width?: "fit-content" | "100%"
}

export const RevealProjects = ({ children, width = "fit-content"}: RevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])
  
  const projectsContainerVariants = {
    visible: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.5,
      },
    },
  }

  return (
    <div ref={ref} className="relative, overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={projectsContainerVariants}
      >{children}</motion.div>
    </div>
  )
}