'use client'

import TypeIt, { TypeItProps } from 'typeit-react'
import Image from 'next/image'
import HomePageImage from '../assets/homePageImg.svg'
import { motion } from 'framer-motion'

export function HomePage() {
  return (
    <section id='home' className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-20 md:py-32 lg:py-44 leading-relaxed items-center">
      <div className='flex flex-col w-full h-full items-center justify-center space-y-10'>
        <motion.h1 
          className="w-full space-y-6 font-alt text-5xl md:text-6xl text-gray-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1}}
        >
          Olá, eu sou o Bruno
          <br />
          <div className='h-24 sm:h-10 md:h-10 lg:h-10'>
            <TypeIt
              className='absolute text-transparent tracking-wider bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400'
              options={{loop: true}}
              getBeforeInit={(instance) => {
                instance.type("Desenvolvedor web").pause(750).delete(17).pause(500).type("Front-End");

                return instance;
              }}
            />
          </div>
        </motion.h1>
        <motion.p 
          className="relative m-4 text-lg -translate-x-2 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{ delay: 0.5, duration: 1}}   
        >
          Dev front-end especializado em React. Transformo designs em
          sites interativos e de alta qualidade. Estou pronto para contribuir com 
          projetos inovadores e fazer a diferença na próxima geração de 
          experiências digitais.
        </motion.p>
      </div>
      <motion.div 
        className='flex flex-col items-center justify-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ delay: 1, duration: 1}}
      >
        <Image src={HomePageImage} alt='luz roxa' className='animate-float' />
      </motion.div>
      <div className="absolute right-0 top-1/3 h-[288px] w-[526px] -translate-y-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
    </section>
  )
}