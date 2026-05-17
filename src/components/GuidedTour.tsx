import { useState, useEffect, useRef, useCallback } from 'react'
import { Plus, X, Check } from 'lucide-react'
import { images, videos } from '@/config/images'
import { cn } from '@/lib/utils'

const features = [
  {
    name: 'ComfortMax™ Saddle',
    video: videos.comfort.breathableSaddle,
    videoMobile: videos.comfort.breathableSaddleMobile,
    hotspots: [{ x: 50, y: 55, title: 'How Our Saddle Evolved' }],
    description: 'Our most comfortable saddle ever, designed with dual-density foam and a widened profile for lasting comfort on every ride.',
    bulletPoints: [
      '230mm widened saddle for broader support',
      'Dual-density foam for balanced comfort and stability',
      'Vacuum-formed build for added structure',
      'Improved resistance to long-ride compression',
    ],
  },
  {
    name: 'Adjustable Air Suspension',
    video: videos.comfort.airSuspension,
    videoMobile: videos.comfort.airSuspensionMobile,
    hotspots: [{ x: 30, y: 35, title: 'Air Suspension' }],
    description: 'Fine-tune your ride with adjustable air suspension that absorbs bumps and vibrations for a smoother journey.',
    bulletPoints: [
      'Adjustable air pressure for rider weight',
      'Lock-out feature for efficient pedaling',
      'Rebound adjustment for customized feel',
      '80mm travel for versatile terrain handling',
    ],
  },
  {
    name: 'Breathable Saddle',
    video: videos.comfort.breathableSaddle,
    videoMobile: videos.comfort.breathableSaddleMobile,
    hotspots: [{ x: 65, y: 55, title: 'Breathable Design' }],
    description: 'Engineered with ventilation channels to keep you cool and comfortable, even on warm-weather rides.',
    bulletPoints: [
      'Strategic ventilation channels',
      'Pressure-relief design',
      'Moisture-wicking cover material',
      'Ergonomic shape for natural riding position',
    ],
  },
  {
    name: 'Suspension Seatpost',
    video: videos.comfort.suspensionSeatpost,
    videoMobile: videos.comfort.suspensionSeatpostMobile,
    hotspots: [{ x: 45, y: 70, title: 'Suspension Seatpost' }],
    description: 'Absorb shocks and vibrations from the road with a suspension seatpost that adds an extra layer of comfort.',
    bulletPoints: [
      'Up to 35mm travel',
      'Adjustable preload',
      'Reduces fatigue on long rides',
      'Seamless integration with frame design',
    ],
  },
]

export default function GuidedTour() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [detailOpen, setDetailOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  const active = features[activeFeature]

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const scrollableHeight = container.scrollHeight - window.innerHeight
    if (scrollableHeight <= 0) return
    const scrolled = -rect.top
    const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight))
    const index = Math.min(
      features.length - 1,
      Math.floor(progress * features.length)
    )
    setActiveFeature(prev => (prev !== index ? index : prev))
  }, [])

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(handleScroll)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [handleScroll])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(() => {})
    }
  }, [activeFeature])

  const selectFeature = (index: number) => {
    setActiveFeature(index)
    setDetailOpen(true)
  }

  const videoSrc = isMobile && active.videoMobile ? active.videoMobile : active.video

  return (
    <section className="w-full bg-white">
      <style>{`
        @keyframes guided-pulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>

      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 py-16 md:py-24">
        Plush from the first sit.
      </h2>

      <div ref={scrollContainerRef} style={{ height: `${400}vh` }}>
        <div className="sticky top-[10vh] h-[80vh] mx-auto max-w-6xl px-6">
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-100">
            <img
              src={images.hero.main[0]}
              alt="Velotric Discover 3"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                opacity: 0.15,
                transition: 'opacity 0.6s ease',
              }}
            />

            <video
              ref={videoRef}
              key={videoSrc}
              src={videoSrc}
              loop
              muted
              playsInline
              autoPlay
              preload="none"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transition: 'opacity 0.5s ease' }}
            />

            <div
              className="absolute top-6 left-0 right-0 text-center z-10"
              style={{ transition: 'opacity 0.4s ease' }}
            >
              <span className="inline-block px-5 py-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-900 font-semibold text-sm md:text-base shadow-lg">
                {active.name}
              </span>
            </div>

            {features[activeFeature].hotspots.map((hs, i) => (
              <button
                key={`${activeFeature}-${i}`}
                onClick={() => selectFeature(activeFeature)}
                className="absolute z-10 cursor-pointer"
                style={{
                  left: `${hs.x}%`,
                  top: `${hs.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <span
                  className="absolute inset-0 rounded-full bg-brand-blue/40"
                  style={{
                    width: 24,
                    height: 24,
                    animation: 'guided-pulse 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
                  }}
                />
                <span
                  className={cn(
                    'relative flex items-center justify-center w-6 h-6 rounded-full border-2 transition-all duration-200',
                    detailOpen && activeFeature === activeFeature
                      ? 'bg-brand-blue border-brand-blue text-white scale-110'
                      : 'bg-white/90 border-white text-gray-700 hover:border-brand-blue hover:scale-110'
                  )}
                >
                  <Plus className="w-3.5 h-3.5" />
                </span>
                <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-white bg-black/60 backdrop-blur-sm px-2 py-1 rounded">
                  {hs.title}
                </span>
              </button>
            ))}

            <div
              className={cn(
                'absolute top-0 right-0 h-full w-full sm:w-[420px] z-20',
                'bg-white/95 backdrop-blur-md shadow-2xl',
                'transition-transform duration-500 ease-out',
                detailOpen ? 'translate-x-0' : 'translate-x-full'
              )}
            >
              <div className="p-8 h-full overflow-y-auto">
                <button
                  onClick={() => setDetailOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                <h3 className="text-xl font-bold text-gray-900 mb-3 pr-8">
                  {active.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {active.description}
                </p>

                <ul className="space-y-3">
                  {active.bulletPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-blue/10 shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-brand-blue" />
                      </span>
                      <span className="text-sm text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 py-12 px-6">
        {features.map((f, i) => (
          <button
            key={f.name}
            onClick={() => selectFeature(i)}
            className={cn(
              'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer',
              activeFeature === i
                ? 'bg-gray-900 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            )}
          >
            {f.name}
          </button>
        ))}
      </div>
    </section>
  )
}
