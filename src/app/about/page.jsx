import Image from "next/image"

export const metadata = { title: "About | HMR Group" }

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-black text-white px-6 pt-24 pb-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <Image src="/about.jpg" alt="HMR team at work" fill className="object-cover opacity-90" />
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">About HMR Group</h1>
          <p className="text-gray-300 mb-6">
            Inspirational home improvement. Property maintenance, renovation, removal and cleaning — help made easy!
            We combine craftsmanship with transparent pricing and 24/7 responsiveness.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-gray-200 mb-8">
            <li className="bg-white/5 border border-white/10 rounded-xl p-3">✔ Professional, insured team</li>
            <li className="bg-white/5 border border-white/10 rounded-xl p-3">✔ 24/7 Emergency call-out</li>
            <li className="bg-white/5 border border-white/10 rounded-xl p-3">✔ Fixed, fair quotes</li>
            <li className="bg-white/5 border border-white/10 rounded-xl p-3">✔ Clean, tidy & respectful</li>
          </ul>
          <div className="flex gap-3">
            <a href="/projects" className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition">See Projects</a>
            <a href="/quote" className="px-5 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition">Get a Quote</a>
          </div>
        </div>
      </div>
    </section>
  )
}
