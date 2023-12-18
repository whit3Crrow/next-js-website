import './globals.css'
import { Source_Sans_3 } from 'next/font/google'

const source = Source_Sans_3({subsets:['latin'],
weight: ['400','300','200','600']})

export const metadata = {
  charset: "UTF-8",
  author: "BensariSolution (https://bensarisolution.com/)",
  description: "BensariSolution (https://bensarisolution.com/) 100 SEO 100 Performance 100 Accessibility",
  keywords: "bensari solution, tom bensari, bensari, adam bensari",
  viewport: "width=device-width, initial-scale=1.0",
  title: "Bensari Solution Project",
};
console.warn = function() {};
export default function RootLayout({ children }) {

  return (
    <html lang="pl">
      
      <body className={source.className}>
        {children}
      </body>
    </html>
  )
}
