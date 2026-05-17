import { useState } from 'react'
import { Star, Play, X, Quote } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { images, videos } from '@/config/images'
import { cn } from '@/lib/utils'

const experts = [
  {
    image: images.experts.ebr,
    quote:
      "If you think comfort bikes can't perform, then think again. The Velotric Discover 3 mixes cruiser comfort with commuter speed, throws in two forms of suspension, and has a motor that moves with you or for you.",
    source: 'Electric Bike Review',
  },
  {
    image: images.experts.tailhappy,
    quote:
      'Right out of the box, this bike impressed me. The ride quality is fantastic, the motor is responsive, and the comfort level is off the charts. This is what a commuter ebike should feel like.',
    source: 'TailHappyTV',
  },
]

export default function ExpertReviews() {
  const [modalOpen, setModalOpen] = useState(false)
  const { ref: bannerRef, isVisible: bannerVisible } = useScrollAnimation(0.15)
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1)

  return (
    <section className="bg-white text-gray-900">
      <div
        ref={bannerRef}
        className={cn(
          'relative flex flex-col items-center justify-center overflow-hidden bg-gray-900 transition-all duration-700',
          bannerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}
      >
        <video
          src={videos.experts.review}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center px-6 py-28">
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Comfort You Can Feel
          </h2>
          <button
            onClick={() => setModalOpen(true)}
            className="mt-8 flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm ring-1 ring-white/30 transition hover:bg-white/25 hover:ring-white/50"
          >
            <Play className="h-4 w-4 fill-white text-white" />
            Watch Video
          </button>
        </div>
      </div>

      <div
        ref={cardsRef}
        className={cn(
          'mx-auto max-w-7xl px-6 py-20 transition-all duration-700',
          cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}
      >
        <h2 className="text-center text-4xl font-bold tracking-tight md:text-5xl">
          Hear from the Experts
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {experts.map((expert, i) => (
            <div
              key={expert.source}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 transition-shadow hover:shadow-lg"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row">
                <div className="h-48 w-full shrink-0 sm:h-auto sm:w-48">
                  <img
                    src={expert.image}
                    alt={expert.source}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="relative">
                    <Quote
                      className="absolute -left-2 -top-2 h-12 w-12 text-blue-100"
                      strokeWidth={1}
                    />
                    <p className="relative pl-8 text-base leading-relaxed text-gray-700 italic">
                      {expert.quote}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col gap-3">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <img
                        src={images.experts.logo}
                        alt=""
                        className="h-6 w-auto object-contain"
                      />
                      <span className="text-sm font-semibold text-gray-900">
                        {expert.source}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
            <video
              src={videos.experts.review}
              autoPlay
              controls
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}
