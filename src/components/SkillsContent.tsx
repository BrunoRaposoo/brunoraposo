import { motion } from "framer-motion"
import { RevealProjectsItems } from "./RevealProjectsitems"
import Image from "next/image"

export interface SkillsItemProps {
  link: string
  image: string
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
          <Image src={image} alt={name} className="hover:scale-110 duration-300 p-1"/>
          {name}
        </motion.a>
      </li>
    </RevealProjectsItems>
  )
}