import "./globals.css"
import { Inter, Roboto } from "next/font/google"
import Header from "./components/Header"

const inter = Inter({ subsets: ["latin"] })
const roboto = Roboto({ weight: ["700", "900"], subsets: ["latin"], variable: "--font-roboto" })

export const metadata = {
  title: "Jan Carlo Once - Portfolio",
  description: "Full Stack Developer & UI/UX Designer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${inter.className}`}>
      <body className="bg-black text-white min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  )
}

