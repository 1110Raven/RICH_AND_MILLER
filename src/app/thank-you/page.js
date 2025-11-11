"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function ThankYou() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center max-w-lg">
        <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-yellow-400">
          <span className="text-4xl text-black">✓</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Thank you!</h1>
        <p className="text-gray-300 mb-8">We’ll be in touch shortly.</p>
        <a href="/" className="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition">
          Back to Home
        </a>
      </div>
    </section>
  )
}

