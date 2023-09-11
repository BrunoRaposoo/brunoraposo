'use client'

import { Card } from "@/components/Cards";
import { JobsProps } from "@/constants/mock";
import TypeIt from "typeit-react";
import { RevealTitle } from "./Reveal-title";
import { RevealProjects } from "./Reveal-projects";

export interface listJobsProps {
  jobs: JobsProps[]
}

export function Projects({jobs}: listJobsProps) {
  return (
    <RevealProjects>
      <div 
        id="projects" 
        className="w-full min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-800 flex flex-col gap-6 items-center justify-center bg-[url(../assets/stars.svg)] bg-cover">
        <div className="absolute left-0 h-[288px] w-[526px] -translate-y-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        <RevealTitle>
          <h1 
            className="flex h-16 sm:h-20 md:h-24 mt-20 sm:mt-14 md:mt-10 items-center justify-center font-alt text-5xl md:text-6xl text-gray-50">
            <TypeIt
              className='tracking-wider'
              options={{loop: true}}
              getBeforeInit={(instance) => {
                instance.type("Projetos").pause(750)

                return instance;
              }}
            />
          </h1>
        </RevealTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-4 gap-7 place-content-center">
            {jobs.map(({id, link, image, title}: JobsProps)=> (
              <Card
              key={id}
              link={link}
              image={image}
              title={title}
              />
            ))}
          </div>
        {/* <motion.button 
          className="-mt-64 text-xl text-gray-50 font-bold border-0 px-10 py-2 rounded bg-gradient-to-r from-purple-600 via-purple-500 to-pink-400"
          whileHover={{
            scale: 1.1
          }}
          >
          Ver mais
        </motion.button> */}
      </div>
    </RevealProjects>
  )
}