'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import githubLogo from '../assets/github-logo.svg'
import linkedinLogo from '../assets/linkedinLogo.svg'
import whatsappLogo from '../assets/whatsapp-logo.svg'
import gmailLogo from '../assets/gmail-logo.svg'

export function Contact() {
  return(
    <section id="contact" className=" h-32 bg-gray-900 grid grid-cols-1 sm:grid-cols-2 mt-4 md:flex md:items-center md:justify-between">
      <div className="flex flex-col justify-center items-center sm:justify-start sm:h-16 px-4 sm:px-14 md:px-28">
        <ul>
          <li>E-mail para contato: brunoraposounb@gmail.com</li>
          <li>Feito por Bruno Rapôso</li>
          <li>Artes feitas através de inteligência artificial usando o <a href="https://leonardo.ai/">Leonardo.Ai</a></li>
        </ul>
      </div>
      <div className="flex items-center justify-center gap-8 py-8 sm:py-0 md:px-28 sm:px-14">
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
            <Image src={gmailLogo} alt='Whatsapp Logo' />
        </motion.a>
      </div>
    </section>
  )
}