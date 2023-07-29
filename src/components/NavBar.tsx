'use client'

import Image from 'next/image'
import logo from '../assets/logo.svg'
import linkedinLogo from '../assets/linkedinLogo.svg'
import githubLogo from '../assets/github-logo.svg'
import whatsappLogo from '../assets/whatsapp-logo.svg'
import gmailLogo from '../assets/gmail-logo.svg'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useScrollPosition } from '@/hooks/scrollPosition'
import { usePathname } from 'next/navigation'

interface CustomLinkProps {
  href: string
  title: string
  className?: string
}

const CustomLink = ({href, title, className=""}: CustomLinkProps) => {
  const pathname = usePathname()

  const isActive = pathname.startsWith(href)
  return(
    <Link href={href} className={`${className} relative group scroll-smooth`} >
      {title}

      <span className={`h-[3px] inline-block bg-purple-800 absolute
      left-1/2 -bottom-0.5 transform -translate-x-1/2 group-hover:w-full transition-[width] ease duration-300
      ${isActive ? 'w-full' : 'w-0'}`}>
        &nbsp;</span>

      <span className={`h-[3px] inline-block bg-purple-800 absolute
      right-1/2 -bottom-0.5 transform -translate-x-1/2 group-hover:w-4 transition-[width] ease duration-300
      ${isActive ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

export default function NavBar() {
  const scrollPosition = useScrollPosition()
  return (
    <nav className={`fixed top-0 z-50 w-full h-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-transparent justify-start md:justify-around flex
    gap-4 sm:gap-4 md:gap-6 text-gray-50 font-alt items-center text-lg bg-black transition-shadow
     ${scrollPosition > 0 ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter"
      : "shadow-none"}`}
     >
      <Link href='#' className="hidden md:flex first-letter:mr-6 sm:mr-8 md:mr-12 hover:-translate-y-1 duration-300">
        <Image src={logo} alt="Logo" className='w-40 h-12 sm:w-48 sm:h-14' />
      </Link>
      <CustomLink href={"#"} title={"Início"} className='text-sm sm:text-base md:text-lg' />
      <CustomLink href={"#about"} title={"Sobre"} className='text-sm sm:text-base md:text-lg' />
      <CustomLink href={"#skills"} title={"Habilidades"} className='text-sm sm:text-base md:text-lg' />
      <CustomLink href={"#projects"} title={"Projetos"} className='text-sm sm:text-base md:text-lg' />
      <CustomLink href={"#contact"} title={"Contatos"} className='text-sm sm:text-base md:text-lg' />
      <div className='hidden md:flex gap-2 px-4 sm:px-8 md:px-12'>
        <motion.a 
          href="https://github.com/BrunoRaposoo"
          target='_blank'
          whileHover={{y: -2}}
          whileTap={{scale: 1.1}}
        >
            <Image src={githubLogo} alt='Github Logo'/>
        </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/bruno-raposo-dev/"
            target='_blank'
            whileHover={{y: -2}}
            whileTap={{scale: 1.1}}  
          >
            <Image src={linkedinLogo} alt="Linkedin Logo" />
          </motion.a>
          <motion.a 
            href="https://wa.me/5561981299948"
            target='_blank'
            whileHover={{y: -2}}
            whileTap={{scale: 1.1}}  
          >
            <Image src={whatsappLogo} alt='Whatsapp Logo' />
        </motion.a>
          <motion.a
            href="mailto:brunoraposounb@gmail.com"
            target='_blank'
            whileHover={{y: -2}}
            whileTap={{scale: 1.1}}  
          >
            <Image src={gmailLogo} alt='Gmail logo' className='-translate-y-1' />
        </motion.a>
      </div>
      </nav>
  )
}