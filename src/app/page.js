import Image from "next/image"
import Link from "next/link"


import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import {
  Wrench, PaintRoller, Trash2, Sparkles,
  Phone, Mail, MapPin, Instagram,

} from "lucide-react"

export default async function Home() {
  // --- Supabase REST fetch (server component) ---
  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()

  const url = `${SUPABASE_URL}/rest/v1/projects?select=*&order=created_at.desc`
  let projects = []
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        apikey: SUPABASE_ANON,
        Authorization: `Bearer ${SUPABASE_ANON}`,
      },
      cache: "no-store",
    })
    if (res.ok) {
      projects = await res.json()
    } else {
      // log server-side so you can debug in terminal without breaking render
      console.error("[Supabase REST] status:", res.status, "body:", await res.text())
    }
  } catch (e) {
    console.error("[Supabase REST] fetch failed:", e)
  }

  return (
    <>
      <Navbar />
      <Hero />

      {/* Services (anchor target) */}
      <section id="services" className="bg-black text-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-12">
            Our Services
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Maintenance */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:-translate-y-1 transition">
              <Wrench className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Property Maintenance</h3>
              <p className="text-gray-300 mb-4">Reliable upkeep, repairs and seasonal checks.</p>
              <Link href="/services/maintenance" className="text-yellow-400 hover:underline">Learn more →</Link>
            </div>

            {/* Renovation */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:-translate-y-1 transition">
              <PaintRoller className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Renovation</h3>
              <p className="text-gray-300 mb-4">Kitchen, bathroom and full-house transformations.</p>
              <Link href="/services/renovation" className="text-yellow-400 hover:underline">Learn more →</Link>
            </div>

            {/* Removal */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:-translate-y-1 transition">
              <Trash2 className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Removal</h3>
              <p className="text-gray-300 mb-4">Clear-outs and disposals handled safely and efficiently.</p>
              <Link href="/services/removal" className="text-yellow-400 hover:underline">Learn more →</Link>
            </div>

            {/* Cleaning */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:-translate-y-1 transition">
              <Sparkles className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cleaning</h3>
              <p className="text-gray-300 mb-4">After-builders, deep cleans and scheduled housekeeping.</p>
              <Link href="/services/cleaning" className="text-yellow-400 hover:underline">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects (anchor target) */}
      <section id="projects" className="bg-neutral-950 text-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">Recent Projects</h2>
            <a href="/quote" className="text-yellow-400 hover:underline">Request a Quote →</a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(projects ?? []).map((p) => (
              <div key={p.id} className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden group">
                <div className="relative aspect-[4/3]">
                  {/* Before photo */}
                  <Image
                    src={p.before_url}
                    alt={`${p.title} before`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  {/* After photo (appears on hover) */}
                  <Image
                    src={p.after_url}
                    alt={`${p.title} after`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                    Hover to see After
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-gray-300 text-sm">{p.description || "Hover to see the transformation."}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About (anchor target) */}
      <section id="about" className="bg-black text-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <Image src="/about.jpg" alt="HMR team at work" fill className="object-cover opacity-90" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">About RICH & MILLER</h2>
            <p className="text-gray-300 mb-6">
              Inspirational home improvement. Property maintenance, renovation, removal and cleaning — help made easy!
              We combine craftsmanship with transparent pricing and 24/7 responsiveness.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-200">
              <li className="bg-white/5 border border-white/10 rounded-xl p-3">✔ Professional, insured team</li>
              <li className="bg-white/5 border border-white/10 rounded-xl p-3">✔ 24/7 Emergency call-out</li>
              <li className="bg-white/5 border border-white/10 rounded-xl p-3">✔ Fixed, fair quotes</li>
              <li className="bg-white/5 border border-white/10 rounded-xl p-3">✔ Clean, tidy & respectful</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact CTA (anchor target) */}
      <section id="contact" className="bg-neutral-950 text-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-yellow-400">Need urgent help?</h3>
              <p className="text-gray-300">We’re ready for emergencies and fast turnarounds.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:+447399119497"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 transition font-semibold"
              >
                <Phone size={18} /> Call 07399 119 497
              </a>
              <a
                href="/quote"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="HMR Group" width={48} height={48} className="rounded-md object-contain" />
              <span className="text-xl font-bold text-yellow-400">RICH & MILLER</span>
            </div>
            <p className="text-gray-300">Inspirational home improvement. Help made easy.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
              <li><Link href="/#projects" className="hover:text-yellow-400">Projects</Link></li>
              <li><Link href="/#about" className="hover:text-yellow-400">About</Link></li>
              <li><Link href="/quote" className="hover:text-yellow-400">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2"><Phone size={16} /> 07399 119 497</li>
              <li className="flex items-center gap-2"><Mail size={16} /> richandmiller@richandmiller.co.uk</li>
              <li className="flex items-center gap-2"><MapPin size={16} /> London & Surrey</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Social</h4>
            <div className="flex items-center gap-4 text-gray-300">
              <Link href="https://www.instagram.com/harryrich07" className="hover:text-yellow-400" aria-label="Instagram"><Instagram /></Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} RICH & MILLER. All rights reserved.
        </div>
      </footer>
    </>
  )
}
