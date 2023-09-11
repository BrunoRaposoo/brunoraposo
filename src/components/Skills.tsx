'use client'

import { SkillContent } from './SkillsContent'
import { Reveal } from './Reveal'
import TypeIt from 'typeit-react'
import { RevealTitle } from './Reveal-title'
import { RevealProjects } from './Reveal-projects'
import { SkillsProps } from '@/constants/mock'

export interface listSkillsProps {
  skills: SkillsProps[]
}

export function Skills({skills}: listSkillsProps) {
  return (
    <section id='skills' className='w-full min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col justify-center bg-gray-900 bg-[url(../assets/stars.svg)] bg-cover'>
      <div className="absolute z-0 right-0 h-[288px] w-[526px] -translate-y-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
      <RevealTitle>
          <h1 
            className="flex items-center justify-center mb-16 sm:mb-20 md:mb-24 font-alt text-5xl md:text-6xl text-gray-50">
            <TypeIt
              className='tracking-wider'
              options={{loop: true}}
              getBeforeInit={(instance) => {
                instance.type("Habilidades").pause(750)

                return instance;
              }}
            />
          </h1>
      </RevealTitle>
      <Reveal>
      <RevealProjects>
        <ul className='relative flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 text-center'>
          {skills.map(({id, link, image, name}: SkillsProps) => (
            <SkillContent 
              key={id}
              link={link}
              image={image}
              name={name}
            />
          ))}
        </ul>
      </RevealProjects>
      </Reveal>
    </section>
  )
}