import { Star, Play, Quote } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { images } from '@/config/images'
import { cn } from '@/lib/utils'

const experts = [
  {
    image: images.experts.ebr,
    quote:
      'If you think comfort bikes can\'t perform, then think again. The Velotric Discover 3 mixes cruiser comfort with commuter speed, throws in two forms of suspension, and has a motor that moves with you or for you.',
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
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1)
  const { ref: bannerRef, isVisible: bannerVisible } = useScrollAnimation(0.15)

  return (
    <section className="bg-white text-gray-900">
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
        <p className="mx-auto mt-3 max-w-xl text-center text-gray-500">
          Trusted voices in the ebike community share their take on the Discover 3.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {experts.map((expert, i) => (
            <div
              key={expert.source}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 transition-shadow hover:shadow-lg"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row">
                <div className="h-48 w-full shrink-0 sm:h-auto sm:w-44">
                  <img
                    src={expert.image}
                    alt={expert.source}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="relative">
                    <Quote
                      className="absolute -left-1 -top-1 h-8 w-8 text-blue-100"
                      strokeWidth={1.5}
                    />
                    <p className="relative pl-6 text-base leading-relaxed text-gray-700 italic">
                      {expert.quote}
                    </p>
                  </div>
                  <div className="mt-5 flex flex-col gap-3">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-900">
                        {expert.source}
                      </span>
                      <button className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50">
                        <Play className="h-3.5 w-3.5 fill-gray-700" />
                        Watch Video
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={bannerRef}
        className={cn(
          'relative flex flex-col items-center justify-center overflow-hidden bg-gray-900 px-6 py-24 transition-all duration-700',
          bannerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/70" />
        <button className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm ring-2 ring-white/30 transition hover:bg-white/20 hover:ring-white/50">
          <Play className="h-8 w-8 fill-white text-white" />
        </button>
        <p className="relative z-10 mt-6 text-xl font-semibold text-white">
          Watch the Full Review
        </p>
      </div>
    </section>
  )
}
