import { motion } from "framer-motion"
import { RevealProjectsItems } from "./RevealProjectsitems"

export interface SkillsItemProps {
  link: string
  image: any
  name: string
}

export function SkillContent({link, image, name}: SkillsItemProps) {
  return (
    <RevealProjectsItems>
      <li>
        <motion.a
          href={link}
          target="_blank"
        >
          {image}
          {name}
        </motion.a>
      </li>
    </RevealProjectsItems>
  )
}