import type { Metadata } from "next";
import { Kurale, Geist_Mono, Nunito, Merriweather } from 'next/font/google'
import { NeatGradientComp } from '@/component/neat-gradient'
import './globals.css'
import AnimatedWaves from '@/component/animatedWaves'
import AOSInit from '@/component/aos-init'
import 'aos/dist/aos.css'
import localFont from 'next/font/local'
import { BackgroundGradient } from '@/component/background-gradient';

const kurale = Kurale({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  variable: '--font-kurale',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-nunito',
})

const merriweatherRegular = localFont({
  src: '../../public/font/merriweatherRegular.ttf',
  variable: '--font-merriweatherRegular',
  weight: '400',
  style: 'normal',
})

export const metadata: Metadata = {
  title: 'Neoma WebStudio',
  description:
    'Neoma WebStudio	- ваш надійний партнер у світі цифрових рішень. Ми спеціалізуємося на створенні інноваційних веб-сайтів, мобільних додатків та комплексних цифрових стратегій, які допомагають бізнесам зростати та досягати нових висот. Наша команда експертів поєднує креативність, технології та досвід, щоб забезпечити найкращі результати для наших клієнтів. Долучайтеся до нас і відкрийте нові можливості для вашого бізнесу в цифровому світі.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`relative ${merriweatherRegular.className} antialiased`}>
        {' '}
        {/* ${kurale.className} ${geistMono.variable} ${nunito.className} ${merriweather.className} */}
        <AOSInit />
        {/* <NeatGradientComp /> */}
        <BackgroundGradient />
        {/* <AnimatedWaves /> */}
        {children}
      </body>
    </html>
  )
}
