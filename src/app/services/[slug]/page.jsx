import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export const metadata = { title: "Service | HMR Group" }

const SERVICES = {
  cleaning: {
    title: "Cleaning",
    lead: `
Rich & Miller provides thorough and reliable residential cleaning to give you back your time and peace of mind.

Our standard cleaning includes vacuuming, mopping, dusting all surfaces, and cleaning kitchens and bathrooms to a high standard. We offer add-on services like deep cleaning, which goes room-by-room, cleaning behind appliances, and removing tough grime, plus window cleaning for a complete shine.
    `,
    image: "/services/cleaning.jpg",
  },

  maintenance: {
    title: "Property Maintenance",
    lead: `
Managing a property can be demanding. From routine checks to unexpected repairs, ensuring your investment remains in top condition and compliant with safety standards requires constant attention.

Our mission at Rich & Miller is to take the worry off your shoulders, providing comprehensive, high-quality maintenance solutions tailored to your needs.
We work with homeowners, landlords, and commercial businesses across London and Surrey, ensuring every property is safe, functional, and aesthetically appealing. Our team of experienced, fully vetted, and highly skilled tradespeople is equipped to handle jobs of all sizes, from a blocked sink to a full property refurbishment.
    `,
    image: "/services/maintenance.jpg",
  },

  renovation: {
    title: "Renovations",
    lead: `
We offer expert, full-service home renovation, specializing in transforming outdated properties into modern, efficient living spaces. Our services cover everything from structural modifications and full electrical rewiring to custom kitchen installations and fine finishing details.

We manage the entire process, from design to construction, ensuring a seamless experience and a finished product that adds lasting value to your home. Contact us today for a free consultation.
    `,
    image: "/services/renovation.jpg",
  },

  removal: {
    title: "Removal",
    lead: `
At Rich & Miller, we understand that every move is unique. Our dedicated team is here to provide a seamless moving experience, backed by years of expertise and a commitment to customer satisfaction.

We offer a full range of services, including:

• Residential Moving: Expert handling of your household belongings, big or small.  
• Professional Packing & Unpacking: Let our team securely pack your items using quality materials.  
• Speciality Item Transport: Experienced in moving pianos, antiques, and other delicate items.

We're licensed, insured, and ready to provide a transparent quote. See why our customers rate us 5 stars – contact us today to discuss your move!
    `,
    image: "/services/removal.jpg",
  },
}

export default function ServicePage({ params }) {
  const data = SERVICES[params.slug]
  if (!data) return notFound()

  return (
    <section className="min-h-screen bg-black text-white px-6 pt-24 pb-16 flex flex-col items-center text-center">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 mb-6">
          {data.title}
        </h1>

        {/* Lead paragraphs */}
        <div className="text-gray-300 text-lg leading-relaxed mb-10 space-y-6">
          {data.lead
            .trim()
            .split(/\n\s*\n/)
            .map((para, i) => (
              <p key={i} className="whitespace-pre-line">
                {para.trim()}
              </p>
            ))}
        </div>

        {/* Image (optimized for vertical) */}
        <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-white/5 mb-10 shadow-lg">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/quote"
            className="px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
          >
            Get a Quote
          </a>
          <a
            href="tel:+447399119497"
            className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 transition font-semibold"
          >
            Emergency Call Out
          </a>
        </div>
      </div>
    </section>
  )
}
