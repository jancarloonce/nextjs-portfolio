"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  const NavItems = () => (
    <>
      {navLinks.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-white hover:text-gray-300 transition-colors text-base lg:text-lg font-medium tracking-wide"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  )

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? "bg-black" : "bg-gradient-to-b from-black via-black to-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-2 sm:py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="block relative w-[120px] h-[24px] sm:w-[150px] sm:h-[30px] md:w-[180px] md:h-[36px] lg:w-[200px] lg:h-[40px] lg:pl-4 xl:pl-8"
          >
            <Image
              src="/images/fontbolt.png"
              alt="Jan Carlo Once"
              fill
              priority
              className="object-contain object-left"
              sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, (max-width: 1024px) 180px, 200px"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center lg:pr-4 xl:pr-8">
            <ul className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              <NavItems />
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-white hover:text-gray-300 transition-colors" aria-label="Toggle menu">
                  <Menu className="w-8 h-8 sm:w-9 sm:h-9" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] sm:w-[60vw] bg-black/95 border-gray-800">
                <button
                  className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-8 h-8 sm:w-9 sm:h-9" />
                </button>
                <nav className="mt-16">
                  <ul className="flex flex-col space-y-8">
                    <NavItems />
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

