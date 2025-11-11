import Link from "next/link"
import Image from "next/image"
import { Wrench, PaintRoller, Trash2, Sparkles } from "lucide-react"

export const metadata = { title: "Services | HMR Group" }

const items = [
  { 
    href: "/services/maintenance", 
    title: "Property Maintenance", 
    icon: Wrench, 
    desc: "Upkeep, fixes, seasonal checks.",
    image: "/services/maintenance.jpg"
  },
  { 
    href: "/services/renovation",  
    title: "Renovation",          
    icon: PaintRoller, 
    desc: "Kitchens, bathrooms, whole-home.",
    image: "/services/renovation.jpg"
  },
  { 
    href: "/services/removal",     
    title: "Removal",             
    icon: Trash2, 
    desc: "Clear-outs and safe disposals.",
    image: "/services/removal.jpg"
  },
  { 
    href: "/services/cleaning",    
    title: "Cleaning",            
    icon: Sparkles, 
    desc: "After-builders, deep cleans.",
    image: "/services/cleaning.jpg"
  },
]

export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-black text-white px-6 pt-24 pb-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10">Our Services</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ href, title, icon: Icon, desc, image }) => (
            <Link
              key={href}
              href={href}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:-translate-y-1 transition"
            >
              {/* Service Image */}
              <div className="relative w-full h-40">
                <Image 
                  src={image} 
                  alt={title} 
                  fill 
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <Icon className="mb-3" />
                <h2 className="text-xl font-semibold mb-1">{title}</h2>
                <p className="text-gray-300 text-sm">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
