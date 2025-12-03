"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "Our Story", href: "#story" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-cream/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="#home" className="flex flex-col">
            <span className="font-serif text-xl leading-tight text-leaf-green md:text-2xl">Cafe Bengaluru</span>
            <span className="text-[10px] tracking-widest text-saffron md:text-xs">SOUTH INDIAN CAFE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-coffee transition-colors hover:text-saffron"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Button
              asChild
              variant="outline"
              className="border-saffron bg-transparent text-saffron hover:bg-saffron hover:text-cream"
            >
              <a href="http://zoma.to/r/20767801" target="_blank" rel="noopener noreferrer">
                Order on Zomato
              </a>
            </Button>
            <Button asChild className="bg-saffron text-cream hover:bg-saffron-dark">
              <a
                href="https://www.swiggy.com/city/raipur/cafe-bengaluru-shrinagar-rest739473"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on Swiggy
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-coffee md:hidden"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-cream-dark bg-cream/95 backdrop-blur-md md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-coffee transition-colors hover:bg-saffron/10 hover:text-saffron"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button
                asChild
                variant="outline"
                className="w-full border-saffron text-saffron hover:bg-saffron hover:text-cream bg-transparent"
              >
                <a href="http://zoma.to/r/20767801" target="_blank" rel="noopener noreferrer">
                  Order on Zomato
                </a>
              </Button>
              <Button asChild className="w-full bg-saffron text-cream hover:bg-saffron-dark">
                <a
                  href="https://www.swiggy.com/city/raipur/cafe-bengaluru-shrinagar-rest739473"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order on Swiggy
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
