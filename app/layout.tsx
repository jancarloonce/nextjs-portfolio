import "@/app/globals.css"
import { Inter, Roboto } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
})

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
    <html lang="en" className={`${roboto.className} ${inter.className}`}>
      <body className="bg-black text-white min-h-screen font-sans">{children}</body>
    </html>
  )
}



import './globals.css'