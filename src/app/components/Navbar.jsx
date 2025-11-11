"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Menu,
  X,
  ChevronDown,
  Wrench,
  PaintRoller,
  Trash2,
  Sparkles,
  PhoneCall,
} from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className="max-w-7xl mx-auto relative flex items-center justify-between px-6 py-3
                    backdrop-blur-md bg-black/30 rounded-b-2xl shadow-lg"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="HMR Group Logo"
            width={70}
            height={70}
            className="object-contain"
          />
        </Link>

        {/* CENTERED DESKTOP MENU */}
        <div
          className="hidden md:flex items-center gap-8 text-white font-medium
                      absolute left-1/2 -translate-x-1/2"
        >
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>

          {/* Services dropdown (flicker-free version) */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={`inline-flex items-center gap-1 transition ${servicesOpen ? "text-yellow-400" : "hover:text-yellow-400"
                }`}
            >
              <span>Services</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[640px] max-w-[90vw]
                          rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl shadow-2xl p-4
                          transform transition-all duration-200 ease-out z-50
                          ${servicesOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
                }`}
            >
              <div
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45
                            bg-black/90 border-l border-t border-white/10"
              />

              <div className="flex items-center justify-between px-2 pb-2 text-sm">
                <span className="text-gray-300">Quick links</span>
                <Link
                  href="/#services"
                  className="text-yellow-400 hover:underline"
                >
                  All services on Home →
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <Link
                  href="/services/maintenance"
                  className="flex items-start gap-3 rounded-xl p-3 hover:bg-white/10 transition"
                >
                  <Wrench className="mt-0.5" size={18} />
                  <div>
                    <div className="font-semibold">Property Maintenance</div>
                    <div className="text-sm text-gray-300">
                      Upkeep, fixes & seasonal checks.
                    </div>
                  </div>
                </Link>

                <Link
                  href="/services/renovation"
                  className="flex items-start gap-3 rounded-xl p-3 hover:bg-white/10 transition"
                >
                  <PaintRoller className="mt-0.5" size={18} />
                  <div>
                    <div className="font-semibold">Renovation</div>
                    <div className="text-sm text-gray-300">
                      Kitchens, bathrooms & full refits.
                    </div>
                  </div>
                </Link>

                <Link
                  href="/services/removal"
                  className="flex items-start gap-3 rounded-xl p-3 hover:bg-white/10 transition"
                >
                  <Trash2 className="mt-0.5" size={18} />
                  <div>
                    <div className="font-semibold">Removal</div>
                    <div className="text-sm text-gray-300">
                      Clear-outs & compliant disposals.
                    </div>
                  </div>
                </Link>

                <Link
                  href="/services/cleaning"
                  className="flex items-start gap-3 rounded-xl p-3 hover:bg-white/10 transition"
                >
                  <Sparkles className="mt-0.5" size={18} />
                  <div>
                    <div className="font-semibold">Cleaning</div>
                    <div className="text-sm text-gray-300">
                      After-builders, deep cleans & more.
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/#projects" className="hover:text-yellow-400 transition">
            Projects
          </Link>
          <Link href="/#about" className="hover:text-yellow-400 transition">
            About
          </Link>
          <Link
            href="/#contact"
            className="hover:text-yellow-400 transition mr-6"
          >
            Contact
          </Link>
        </div>

        {/* CTA (right) */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/emergency-call-out"
            className="px-5 py-2 bg-red-600 text-white font-semibold rounded-xl shadow-md flex items-center gap-2 hover:bg-red-700 transition"
          >
            <PhoneCall size={18} />{" "}
            <span className="font-extrabold">Emergency</span> Call-Out
          </Link>

          <Link
            href="/quote"
            className="px-5 py-2 bg-yellow-400 text-black font-semibold rounded-xl shadow-md hover:bg-yellow-300 transition"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE PANEL */}
      {isOpen && (
        <div className="md:hidden bg-black/90 text-white py-6 space-y-2">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-2 hover:text-yellow-400"
          >
            Home
          </Link>

          {/* Services collapsible */}
          <div className="px-6">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex items-center justify-between py-2"
              aria-expanded={servicesOpen}
            >
              <span>Services</span>
              <ChevronDown
                size={18}
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""
                  }`}
              />
            </button>
            {servicesOpen && (
              <div className="mt-1 pl-3 space-y-2 text-sm">
                <Link
                  href="/#services"
                  onClick={() => setIsOpen(false)}
                  className="block py-1.5 text-yellow-400"
                >
                  All services on Home →
                </Link>
                <Link
                  href="/services/maintenance"
                  onClick={() => setIsOpen(false)}
                  className="block py-1.5 hover:text-yellow-400"
                >
                  Property Maintenance
                </Link>
                <Link
                  href="/services/renovation"
                  onClick={() => setIsOpen(false)}
                  className="block py-1.5 hover:text-yellow-400"
                >
                  Renovation
                </Link>
                <Link
                  href="/services/removal"
                  onClick={() => setIsOpen(false)}
                  className="block py-1.5 hover:text-yellow-400"
                >
                  Removal
                </Link>
                <Link
                  href="/services/cleaning"
                  onClick={() => setIsOpen(false)}
                  className="block py-1.5 hover:text-yellow-400"
                >
                  Cleaning
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/#projects"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-2 hover:text-yellow-400"
          >
            Projects
          </Link>
          <Link
            href="/#about"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-2 hover:text-yellow-400"
          >
            About
          </Link>
          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-2 hover:text-yellow-400"
          >
            Contact
          </Link>

          {/* Emergency button for mobile */}
          <Link
            href="/emergency-call-out"
            onClick={() => setIsOpen(false)}
            className="block mx-6 mt-2 px-5 py-2 text-center bg-red-600 text-white font-extrabold rounded-xl shadow-md hover:bg-red-700"
          >
            🚨 Emergency Call-Out
          </Link>

          <Link
            href="/quote"
            onClick={() => setIsOpen(false)}
            className="block mx-6 mt-2 px-5 py-2 text-center bg-yellow-400 text-black font-semibold rounded-xl shadow-md hover:bg-yellow-300"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  )
}
