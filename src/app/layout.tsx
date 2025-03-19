import "./globals.css";
import { Header } from '../componentes/header/index'
import { Poppins } from 'next/font/google'

const mainFontFamily = Poppins({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
})
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
