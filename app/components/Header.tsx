"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface HeaderProps {
  selectedProfile?: string
}

const Header: React.FC<HeaderProps> = ({ selectedProfile }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-hLG6BHspSYjoDqTpYz1qSZcvqSFpAp.png"
                alt="Jan Carlo Once"
                width={180}
                height={36}
                className="w-[120px] h-[24px] sm:w-[150px] sm:h-[30px] md:w-[180px] md:h-[36px] object-contain"
                priority
              />
            </Link>
            <nav className="hidden md:ml-8 md:flex md:space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white hover:text-gray-300 transition-colors text-base lg:text-lg font-medium tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center">
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button className="p-2 text-white hover:text-gray-300 transition-colors" aria-label="Toggle menu">
                    <Menu className="w-6 h-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-black/95 border-gray-800">
                  <button
                    className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <nav className="mt-16">
                    <ul className="flex flex-col space-y-6">
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
                    </ul>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>

            {selectedProfile && (
              <div className="ml-4">
                <Image
                  src={`/${selectedProfile.toLowerCase()}.jpg`}
                  alt={`${selectedProfile} Profile`}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

