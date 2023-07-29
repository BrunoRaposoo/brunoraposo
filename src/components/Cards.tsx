import { motion } from 'framer-motion'

export interface JobsItemsProps {
  link: string
  image: string
  title: string
}

export function Card({link, image, title}: JobsItemsProps) {
  return (
      <div className='relative group hover:scale-105 duration-500'>
          <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-400 
          rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500'/>
          <a href={link} target='_blank'>
            <div 
            className="relative h-64 w-64 rounded-lg"
            >
              <motion.img src={image} alt={title} className='w-full h-full rounded-lg' whileTap={{ scale: 0.9 }} />
            </div>
          </a>
      </div>
  )
}