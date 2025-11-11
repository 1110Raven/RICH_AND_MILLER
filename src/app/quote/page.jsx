"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Quote() {
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // minimal checks so the handler always runs cleanly
    const required = ["name", "email", "phone", "service", "message"]
    for (const f of required) {
      const v = (data.get(f) || "").toString().trim()
      if (!v) {
        alert("Please fill in all fields, including Service.")
        return
      }
    }

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        body: data, // send FormData to our Next.js API route
      })

      if (res.ok) {
        form.reset()
        router.push("/thank-you")
      } else {
        const body = await res.json().catch(() => ({}))
        alert(body?.error ?? "Submission failed. Please try again.")
      }
    } catch (err) {
      alert("Network error. Please try again.")
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 relative z-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-6">
          Get a Quote
        </h2>

        {/* same layout, now posting to /api/quote */}
        <motion.form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            autoComplete="off"
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            autoComplete="off"
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
          />

          {/* Phone number */}
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            autoComplete="off"
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
          />

          <select
            name="service"
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-600 text-white focus:outline-none focus:border-yellow-400"
            defaultValue=""
          >
            <option value="" disabled>Select a Service</option>
            <option value="maintenance">Property Maintenance</option>
            <option value="renovation">Renovation</option>
            <option value="removal">Removal</option>
            <option value="cleaning">Cleaning</option>
          </select>

          <textarea
            name="message"
            placeholder="Tell us about your project..."
            rows="5"
            autoComplete="off"
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition"
          >
            Submit Quote Request
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  )
}
