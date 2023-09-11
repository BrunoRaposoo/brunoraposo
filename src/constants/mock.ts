import ReactLogo from '../assets/react-logo.svg'
import TypescriptLogo from '../assets/typescript-logo.svg'
import TailwindLogo from '../assets/tailwind-logo.svg'
import GithubLogo from '../assets/github-dev-logo.svg'
import NodeLogo from '../assets/node-logo.svg'


export interface SkillsProps {
  id: number
  link: string
  image: string
  name: string
}


export const skillsContent: SkillsProps[] = [
  {
    id: 1,
    link: 'https://react.dev/',
    image: ReactLogo,
    name: 'React'
  },
  {
    id: 2,
    link: 'https://www.typescriptlang.org/',
    image: TypescriptLogo,
    name: 'TypeScript'
  },
  {
    id: 3,
    link: 'https://nodejs.org/en',
    image: NodeLogo,
    name: 'Node'
  },
  {
    id: 4,
    link: 'https://tailwindcss.com/',
    image: TailwindLogo,
    name: 'Tailwind CSS'
  },
  {
    id: 5,
    link: 'https://github.com/',
    image: GithubLogo,
    name: 'Git/Github'
  },
]

export interface JobsProps {
  id: number
  title: string
  link: string
  image: string
}

export const jobs: JobsProps[] = [
  {
    id: 1,
    title: 'dt money',
    link: 'https://dt-money-one-mauve.vercel.app/',
    image: 'https://i.ibb.co/WsRb5km/dt-money.png',
  },
  {
    id: 2,
    title: 'todo list',
    link: 'https://todo-list-wheat-ten.vercel.app/',
    image: 'https://i.ibb.co/kg4hThw/todo.png',
  },
  {
    id: 3,
    title: 'ignite feed',
    link: 'https://ignite-feed-ten-theta.vercel.app/',
    image: 'https://i.ibb.co/nCtHspL/feed.png',
  },
  {
    id: 4,
    title: 'ui twitter',
    link: 'https://ui-twitter-flame.vercel.app/',
    image: 'https://i.ibb.co/PGWz2Rq/twitter.png',
  },
  {
    id: 5,
    title: 'ignite timer',
    link: 'https://ignite-timer-dusky.vercel.app/',
    image: 'https://i.ibb.co/MBwKH9R/timer.png',
  },
  {
    id: 6,
    title: 'card lab',
    link: 'https://explorer-lab-snowy.vercel.app/',
    image: 'https://i.ibb.co/d7N9y1x/credit-card.png',
  },
]
