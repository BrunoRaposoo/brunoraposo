import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
  children: JSX.Element;
  width?: "fit-content" | "100%"
}

export const RevealTitle = ({ children, width = "fit-content"}: RevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])

  return (
    <div ref={ref} className="relative, overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0},
          visible: { opacity: 1},
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 1 }}
      >{children}</motion.div>
    </div>
  )
}