import NavBar from '@/components/NavBar'
import './globals.css'
import { Roboto_Flex, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'

const roboto = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto' })

const baijamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'Bruno Rapôso',
  description: 'portfólio do Bruno Rapôso',
}

export default function RootLayout({ children,}: { children: React.ReactNode}) {
  return (
    <html lang="pt-br" className='scroll-smooth'>
      <body className={`${roboto.variable} ${baijamjuree.variable} font-sans bg-gray-900 text-gray-100 m-0 p-0 bg-[url(../assets/stars.svg)] bg-cover`}>
        <NavBar />
        <div className='flex max-h-screen flex-col overflw-y-scroll'>     
          {children}
        </div>
      </body>
    </html>
  )
}
