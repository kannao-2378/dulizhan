import { Star, Check } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { images } from '@/config/images'

const leftBullets = [
  'Dual-density foam for balanced comfort and stability',
  'Upper layer: 30A comfort foam for a softer, pressure-relieving feel',
  'Lower layer: 35A high-density support foam for stable support over longer rides',
  '230mm widened saddle with vibration-damping design',
]

const rightBullets = [
  '230mm widened saddle for broader support',
  'Vacuum-formed build for added structure',
  'Improved resistance to long-ride compression',
]

const saddleGens = [
  {
    gen: 'Gen 1',
    label: 'ComfortMax™ Saddle Gen 1',
    desc: 'The original comfort saddle that started it all — wide, soft, and rider-friendly.',
    image: images.comfort.saddleGen1,
  },
  {
    gen: 'Gen 2',
    label: 'ComfortMax™ Saddle Gen 2',
    desc: 'Refined foam density and shape for better pressure distribution on longer rides.',
    image: images.comfort.saddleGen2,
  },
  {
    gen: 'Gen 3',
    label: 'ComfortMax™ Saddle Gen 3',
    desc: 'Our most advanced saddle — dual-density foam, vacuum-formed structure, and vibration damping.',
    image: images.comfort.saddleGen3,
    current: true,
  },
]

export default function ComfortSection() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.15)
  const { ref: evoRef, isVisible: evoVisible } = useScrollAnimation(0.15)
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation(0.2)

  return (
    <section className="bg-white text-gray-900">
      <div
        ref={heroRef}
        className={`mx-auto max-w-7xl px-6 py-20 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          ComfortMax™ — Ride in Ultimate Comfort
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
          From your wrists to your arms, back, hips, spine and knees—designed to
          reduce pressure while you ride. An upright riding position means better
          posture, less pain, more confidence, and lasting comfort.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
            <h3 className="text-2xl font-semibold">
              Soft on top. Support underneath.
            </h3>
            <ul className="mt-5 space-y-3">
              {leftBullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-700">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
            <h3 className="text-2xl font-semibold">
              More support for longer rides.
            </h3>
            <ul className="mt-5 space-y-3">
              {rightBullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-700">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 overflow-hidden rounded-xl">
              <img
                src={images.comfort.saddleGen1}
                alt="ComfortMax Saddle Gen 1"
                className="h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={evoRef}
        className={`bg-gray-50 px-6 py-20 transition-all duration-700 ${evoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="mx-auto max-w-7xl">
          <h3 className="text-center text-3xl font-bold md:text-4xl">
            ComfortMax™ Saddle Gen 3
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-center text-gray-500">
            Three generations of refinement — our latest saddle delivers the best
            ride yet.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {saddleGens.map((s) => (
              <div
                key={s.gen}
                className={`relative overflow-hidden rounded-2xl border bg-white p-6 transition-shadow ${
                  s.current
                    ? 'border-emerald-400 shadow-lg shadow-emerald-100'
                    : 'border-gray-200'
                }`}
              >
                {s.current && (
                  <span className="absolute right-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
                    Current
                  </span>
                )}
                <img
                  src={s.image}
                  alt={s.label}
                  className="h-44 w-full rounded-xl object-cover"
                />
                <h4 className="mt-4 text-lg font-semibold">{s.label}</h4>
                <p className="mt-1 text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={quoteRef}
        className={`mx-auto max-w-4xl px-6 py-20 text-center transition-all duration-700 ${quoteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-6 w-6 fill-amber-400 text-amber-400"
            />
          ))}
        </div>
        <blockquote className="mt-6 text-2xl font-medium leading-relaxed italic text-gray-800 md:text-3xl">
          "The seat is incredibly comfortable, and the suspension post really
          makes a difference. The ride feels much smoother—super comfortable, yet
          still powerful on hills."
        </blockquote>
        <p className="mt-6 text-lg font-semibold text-gray-600">Ric L.</p>
      </div>
    </section>
  )
}
