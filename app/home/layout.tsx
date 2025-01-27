"use client"

import Header from "../components/Header"
import { usePathname } from "next/navigation"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const showHeader = pathname !== "/profiles"

  return (
    <>
      {showHeader && <Header />}
      {children}
    </>
  )
}

