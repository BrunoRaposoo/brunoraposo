'use client'

import Image from "next/image";
import TypeIt from "typeit-react";
import AstronautAboutPage from '../assets/astronaut-about-page.svg'
import { RevealImage } from "./Reveal-image";
import { RevealTitle } from "./Reveal-title";
import { RevealParagraph } from "./Reveal-paragraph";

export function About() {
  return (
    <section id='about' className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-20 md:py-32 lg:py-44 leading-relaxed items-center bg-gray-800 bg-[url(../assets/stars.svg)] bg-cover">
      <RevealImage>
        <div className='flex flex-col items-center justify-center'>
          <Image src={AstronautAboutPage} alt="Ilustração de um astronauta" className="animate-float" />
        </div>
      </RevealImage>
      <div className='flex flex-col w-full h-full items-center justify-center space-y-6'>
        <RevealTitle>
          <h1 
            className="w-full font-alt text-5xl md:text-6xl text-gray-50">
            <TypeIt
              className='tracking-wider flex justify-center'
              options={{loop: true}}
              getBeforeInit={(instance) => {
                instance.type("Sobre mim").pause(750)

                return instance;
              }}
            />
          </h1>
        </RevealTitle>
        <RevealParagraph>
          <p className="relative m-4 text-lg -translate-x-2 leading-relaxed">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Olá, sou o Bruno e estou em transição de carreira para trabalhar como desenvolvedor
            web. Meu foco é no desenvolvimento front-end com ReactJS e estou animado
            em continuar aprimorando minhas habilidades nessa área.
            Estou em busca de novas oportunidades para desenvolver meus conhecimentos
            e contribuir para projetos modernos. Se você está procurando um 
            desenvolvedor ReactJS dedicado, não hesite em entrar em contato comigo!
            Mal posso esperar para trabalhar em novos projetos.
          </p>
        </RevealParagraph>
      </div>
      <div className="relative right-0 -top-full h-[288px] w-[526px] -translate-y-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
    </section>
  )
}