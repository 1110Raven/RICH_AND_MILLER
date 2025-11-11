"use client"

import { motion } from "framer-motion"
import { PhoneCall, Clock, ShieldCheck } from "lucide-react"

export default function EmergencyCallOut() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white px-6 py-20 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-10 relative z-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-500 mb-6">
          🚨 Emergency Call-Out Service
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-gray-200">
          <p>
            Emergencies don’t wait for the right time — and neither do we.
            Our team at <span className="font-semibold text-yellow-400">RICH & MILLER </span>
            is ready 24/7 to handle urgent property issues quickly and professionally.
          </p>

          <p className="flex items-start gap-3">
            <PhoneCall className="text-red-500 mt-1" size={22} />
            Call us anytime and speak directly with a member of our team.
            We’ll respond immediately and guide you through the next steps.
          </p>

          <p className="flex items-start gap-3">
            <Clock className="text-red-500 mt-1" size={22} />
            We aim for the fastest possible response time, arriving promptly
            to reduce disruption and prevent further damage.
          </p>

          <p className="flex items-start gap-3">
            <ShieldCheck className="text-red-500 mt-1" size={22} />
            Our experienced professionals will fix the issue safely and effectively,
            giving you peace of mind in stressful moments.
          </p>

          <p>
            Whether it’s a burst pipe, electrical fault, or urgent structural issue,
            we’ll make sure you’re never left stranded.
          </p>
        </div>

        {/* CALL TO ACTION */}
        <div className="text-center mt-10">
          <a
            href="tel:07400123456"
            className="inline-flex items-center gap-3 bg-red-600 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-md hover:bg-red-700 transition"
          >
            <PhoneCall size={24} /> Call Now: 07399 119 497
          </a>
        </div>
      </motion.div>
    </section>
  )
}
