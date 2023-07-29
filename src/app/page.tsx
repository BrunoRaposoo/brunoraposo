'use client'

import { About } from "@/components/About";
import { Contact } from "../components/Contact";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { HomePage } from "@/components/Home";
import ReactLogo from '../assets/react-logo.svg'
import TypescriptLogo from '../assets/typescript-logo.svg'
import TailwindLogo from '../assets/tailwind-logo.svg'
import GithubLogo from '../assets/github-dev-logo.svg'
import NodeLogo from '../assets/node-logo.svg'
import Image from "next/image";
import { jobs } from "@/constants/mock";

export interface SkillsProps {
  id: number,
  link: string
  image: any
  name: string
}

export const skillsContent: SkillsProps[] = [
  {
    id: 1,
    link: 'https://react.dev/',
    image: (<Image src={ReactLogo} alt="React Logo" className="hover:scale-110 duration-300 p-2"/>),
    name: 'React'
  },
  {
    id: 2,
    link: 'https://www.typescriptlang.org/',
    image: (<Image src={TypescriptLogo} alt="typeScript Logo" className="hover:scale-110 duration-300 p-2"/>),
    name: 'TypeScript'
  },
  {
    id: 3,
    link: 'https://nodejs.org/en',
    image: (<Image src={NodeLogo} alt="Node Logo" className="hover:scale-110 duration-300 p-2"/>),
    name: 'Node'
  },
  {
    id: 4,
    link: 'https://tailwindcss.com/',
    image: (<Image src={TailwindLogo} alt="Tailwindcss Logo" className="hover:scale-110 duration-300 p-2"/>),
    name: 'Tailwindcss'
  },
  {
    id: 5,
    link: 'https://github.com/',
    image: (<Image src={GithubLogo} alt="Github Logo" className="hover:scale-110 duration-300 p-2"/>),
    name: 'Git/Github'
  },
]

export default function Home() {
  return (
      <div>
        <HomePage />
        <About />
        <Skills skills={skillsContent}/>
        <Projects jobs={jobs}/>
        <Contact />
      </div>
  )
}
