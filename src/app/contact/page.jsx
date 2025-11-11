import { Phone, Mail, MapPin } from "lucide-react"

export const metadata = { title: "Contact | HMR Group" }

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-neutral-950 text-white px-6 pt-24 pb-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">Contact Us</h1>
          <p className="text-gray-300 mb-6">We’re here to help. Reach out for urgent call-outs or to discuss your project.</p>

          <ul className="space-y-3 text-gray-200">
            <li className="flex items-center gap-2"><Phone size={18}/> 07399 119 497</li>
            <li className="flex items-center gap-2"><Mail size={18}/> info@hmr-group.co.uk</li>
            <li className="flex items-center gap-2"><MapPin size={18}/> London & surrounding areas</li>
          </ul>

          <div className="mt-6 flex gap-3">
            <a href="tel:+447399119497" className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 transition font-semibold">Emergency Call Out</a>
            <a href="/quote" className="px-5 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition">Get a Quote</a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Message</h2>
          <p className="text-gray-300 mb-4">Prefer email? Use the Quote form for detailed requests.</p>
          <a href="/quote" className="inline-block px-5 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition">
            Go to Quote Form
          </a>
        </div>
      </div>
    </section>
  )
}

