"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Hero() {
  const [showNumber, setShowNumber] = useState(false)

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Desktop video */}
      <video
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/renovation-desktop.mov"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Mobile video */}
      <video
        className="block md:hidden absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/renovation-mobile.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold drop-shadow-lg tracking-wide"
        >
          RICH & MILLER
        </motion.h1>

        {/* Small subtitle directly under title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-2 text-lg md:text-2xl font-medium text-yellow-400"
        >
          Inspirational home improvement.
        </motion.p>

        {/* Tagline lower down */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 text-base md:text-xl leading-relaxed max-w-3xl text-gray-200"
        >
          Property maintenance, Renovation, Removal and cleaning company. <br />
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent font-semibold">
            Help made easy!
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          {/* Emergency Call Out (reveal number on click) */}
          <button
            onClick={() => setShowNumber(true)}
            className="px-5 py-2 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-500 transition"
          >
            {showNumber ? "📞 07399 119497" : "Emergency Call Out"}
          </button>

          {/* <a
            href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/20 border border-white text-white rounded-xl font-semibold hover:bg-white/30 transition transform hover:scale-105"
          >
            Watch Full Video
          </a> */}
        </motion.div>
      </div>
    </section>
  )
}
