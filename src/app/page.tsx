'use client'

import { About } from "@/components/About";
import { Contact } from "../components/Contact";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { HomePage } from "@/components/Home";
import { jobs, skillsContent } from "@/constants/mock";

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
