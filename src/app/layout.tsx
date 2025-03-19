import "./globals.css";
import { Header } from '../componentes/header/index'
import { Poppins } from 'next/font/google'

const mainFontFamily = Poppins({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
})

//Toda esta parte até a cima de export é para dar rank no site! Dando um maior rank ano nosso projeto!!
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home - Tutor',
  description: 'Alunos BayArea desenvolvendo o projeto Tutor!',
  openGraph: {         //openGraph serve para criar uma pré visualização do projeto, quando for enviado em link!
    title: 'Desenvolvendo o projeto Tutor, com os alunos IESB',
    description: 'Alunos BayArea desenvolvendo o projeto Tutor!',
    images: ['https://www.google.com/imgres?q=iesb&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Finstagram%2Fiesb_oficial%2Fprofile_pic.jpg&imgrefurl=https%3A%2F%2Fwww.instagram.com%2Fiesb_oficial%2F&docid=7chrGlDs4us11M&tbnid=dt9la5cJDbqIBM&vet=12ahUKEwiTsdCEhpeMAxXvKrkGHfjINMoQM3oECFIQAA..i&w=640&h=640&hcb=2&ved=2ahUKEwiTsdCEhpeMAxXvKrkGHfjINMoQM3oECFIQAA']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={mainFontFamily.className}
      >

        <Header />

        {children}
      </body>
    </html>
  );
}
