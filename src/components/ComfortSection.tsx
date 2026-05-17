import { useState } from 'react'
import { Star, Check, Play } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { images, videos } from '@/config/images'

const videoTabs = [
  { label: 'Upright Riding Posture', src: videos.comfort.uprightRiding, mobileSrc: videos.comfort.uprightRidingMobile },
  { label: 'Adjustable Air Suspension', src: videos.comfort.airSuspension, mobileSrc: videos.comfort.airSuspensionMobile },
  { label: 'Breathable Saddle', src: videos.comfort.breathableSaddle, mobileSrc: videos.comfort.breathableSaddleMobile },
  { label: 'Suspension Seatpost', src: videos.comfort.suspensionSeatpost, mobileSrc: videos.comfort.suspensionSeatpostMobile },
  { label: 'Comfy Grips', src: videos.comfort.comfyGrips, mobileSrc: videos.comfort.comfyGrips },
]

const leftBullets = [
  'Dual-density foam for balanced comfort and stability',
  'Upper layer: 30A comfort foam for a softer, pressure-relieving feel',
  'Lower layer: 35A high-density support foam for stable support over longer rides',
]

const rightBullets = [
  '230mm widened saddle for broader support',
  'Vacuum-formed build for added structure',
  'Improved resistance to long-ride compression',
]

const saddleGens = [
  { gen: 'Gen 1', label: 'ComfortMax™ Saddle Gen 1', desc: 'The original comfort saddle that started it all — wide, soft, and rider-friendly.', image: images.comfort.saddleGen1 },
  { gen: 'Gen 2', label: 'ComfortMax™ Saddle Gen 2', desc: 'Refined foam density and shape for better pressure distribution on longer rides.', image: images.comfort.saddleGen2 },
  { gen: 'Gen 3', label: 'ComfortMax™ Saddle Gen 3', desc: 'Our most advanced saddle — dual-density foam, vacuum-formed structure, and vibration damping.', image: images.comfort.saddleGen3, current: true },
]

export default function ComfortSection() {
  const [activeTab, setActiveTab] = useState(0)
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.15)
  const { ref: videoRef, isVisible: videoVisible } = useScrollAnimation(0.15)
  const { ref: evoRef, isVisible: evoVisible } = useScrollAnimation(0.15)
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation(0.2)
  const { ref: sensorRef, isVisible: sensorVisible } = useScrollAnimation(0.15)

  return (
    <section className="bg-white text-gray-900">
      {/* ── Hero Banner ── */}
      <div
        ref={heroRef}
        className={`relative h-[60vh] min-h-[420px] overflow-hidden transition-opacity duration-700 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <img
          src={images.comfort.hero}
          alt="ComfortMax hero"
          className="absolute inset-0 h-full w-full object-cover hidden md:block"
        />
        <img
          src={images.comfort.heroMobile}
          alt="ComfortMax hero"
          className="absolute inset-0 h-full w-full object-cover block md:hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />
        <div
          className={`relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            ComfortMax™ — Ride in Ultimate Comfort
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            From your wrists to your arms, back, hips, spine and knees—designed to
            reduce pressure while you ride. An upright riding position means better
            posture, less pain, more confidence, and lasting comfort.
          </p>
        </div>
      </div>

      {/* ── Video Scenes ── */}
      <div
        ref={videoRef}
        className={`mx-auto max-w-7xl px-6 py-20 transition-all duration-700 ${videoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="flex flex-wrap gap-2 md:gap-3">
          {videoTabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all md:px-5 md:py-2.5 md:text-base ${
                activeTab === i
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {activeTab === i && <Play className="h-3.5 w-3.5 fill-current" />}
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative mt-8 overflow-hidden rounded-2xl bg-gray-100 aspect-video">
          <video
            key={`desktop-${activeTab}`}
            src={videoTabs[activeTab].src}
            muted
            playsInline
            autoPlay
            loop
            className="absolute inset-0 h-full w-full object-cover hidden md:block"
          />
          <video
            key={`mobile-${activeTab}`}
            src={videoTabs[activeTab].mobileSrc}
            muted
            playsInline
            autoPlay
            loop
            className="absolute inset-0 h-full w-full object-cover block md:hidden"
          />
        </div>
      </div>

      {/* ── Saddle Evolution ── */}
      <div
        ref={evoRef}
        className={`bg-gray-50 px-6 py-20 transition-all duration-700 ${evoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="mx-auto max-w-7xl">
          <h3 className="text-center text-3xl font-bold md:text-4xl">
            More support for longer rides.
          </h3>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-8">
              <h4 className="text-2xl font-semibold">Soft on top. Support underneath.</h4>
              <ul className="mt-5 space-y-3">
                {leftBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-gray-700">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-8">
              <h4 className="text-2xl font-semibold">More support for longer rides.</h4>
              <ul className="mt-5 space-y-3">
                {rightBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-gray-700">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

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
                <h5 className="mt-4 text-lg font-semibold">{s.label}</h5>
                <p className="mt-1 text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── User Testimonial ── */}
      <div
        ref={quoteRef}
        className={`mx-auto max-w-4xl px-6 py-20 text-center transition-all duration-700 ${quoteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <blockquote className="mt-6 text-2xl font-medium leading-relaxed italic text-gray-800 md:text-3xl">
          "The seat is incredibly comfortable, and the suspension post really
          makes a difference. The ride feels much smoother—super comfortable, yet
          still powerful on hills."
        </blockquote>
        <p className="mt-6 text-lg font-semibold text-gray-600">Ric L.</p>
      </div>

      {/* ── Sensor Section ── */}
      <div
        ref={sensorRef}
        className={`relative h-[50vh] min-h-[360px] overflow-hidden transition-opacity duration-700 ${sensorVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <img
          src={images.comfort.sensor}
          alt="SensorSwap torque cadence sensor"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />
        <div
          className={`relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white transition-all duration-700 delay-200 ${sensorVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h3 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            SensorSwap™ — Seamless Power Delivery
          </h3>
          <p className="mt-3 max-w-2xl text-lg text-white/80">
            Switch between torque and cadence sensors for the ride feel you prefer.
          </p>
        </div>
      </div>
    </section>
  )
}
