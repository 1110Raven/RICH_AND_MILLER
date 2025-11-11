import Image from "next/image"
import Link from "next/link"

export const metadata = { title: "Projects | HMR Group" }

export default function ProjectsPage() {
  const items = [1,2,3,4,5,6]

  return (
    <section className="min-h-screen bg-neutral-950 text-white px-6 pt-24 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">Recent Projects</h1>
          <Link href="/quote" className="text-yellow-400 hover:underline">Request a Quote →</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((n) => (
            <div key={n} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative aspect-[4/3]">
                <Image
                  src={`/projects/${n}.jpg`}  // put images in public/projects/
                  alt={`Project ${n}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">HMR Project #{n}</h3>
                <p className="text-gray-300 text-sm">Before & after upgrade — premium finish.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
