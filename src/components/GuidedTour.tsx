import { useState, useRef, useEffect } from 'react'
import { Plus, X, Check } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { images, videos } from '@/config/images'
import { cn } from '@/lib/utils'

const features = [
  {
    name: 'ComfortMax™ Saddle',
    video: videos.comfort.breathableSaddle,
    description: 'Our most comfortable saddle ever, designed with dual-density foam and a widened profile for lasting comfort on every ride.',
    bulletPoints: [
      '230mm widened saddle for broader support',
      'Dual-density foam for balanced comfort and stability',
      'Vacuum-formed build for added structure',
      'Improved resistance to long-ride compression',
    ],
  },
  {
    name: 'Air Suspension',
    video: videos.comfort.airSuspension,
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
    description: 'Absorb shocks and vibrations from the road with a suspension seatpost that adds an extra layer of comfort.',
    bulletPoints: [
      'Up to 35mm travel',
      'Adjustable preload',
      'Reduces fatigue on long rides',
      'Seamless integration with frame design',
    ],
  },
]

const hotspotPositions = [
  { top: '55%', left: '50%' },
  { top: '35%', left: '30%' },
  { top: '55%', left: '65%' },
  { top: '70%', left: '45%' },
]

export default function GuidedTour() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [detailOpen, setDetailOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { ref, isVisible } = useScrollAnimation(0.1)

  const active = features[activeFeature]

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

  return (
    <section ref={ref} className="w-full py-20 px-6 bg-white">
      <style>{`
        @keyframes guided-pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <h2
          className={cn(
            'text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          Plush from the first sit.
        </h2>

        <div
          className={cn(
            'relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 mb-8 transition-all duration-700 delay-150',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          <video
            ref={videoRef}
            key={active.video}
            src={active.video}
            loop
            muted
            playsInline
            autoPlay
            className="w-full h-full object-cover"
          />

          {hotspotPositions.map((pos, i) => (
            <button
              key={i}
              onClick={() => selectFeature(i)}
              className="absolute z-10 cursor-pointer"
              style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)' }}
            >
              <span
                className="absolute inset-0 rounded-full bg-brand-blue/40"
                style={{ animation: 'guided-pulse 1.5s cubic-bezier(0, 0, 0.2, 1) infinite' }}
              />
              <span
                className={cn(
                  'relative flex items-center justify-center w-6 h-6 rounded-full border-2 transition-all duration-200',
                  activeFeature === i && detailOpen
                    ? 'bg-brand-blue border-brand-blue text-white scale-110'
                    : 'bg-white/90 border-white text-gray-700 hover:border-brand-blue hover:scale-110'
                )}
              >
                <Plus className="w-3.5 h-3.5" />
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

              <h3 className="text-xl font-bold text-gray-900 mb-3 pr-8">{active.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">{active.description}</p>

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

        <div
          className={cn(
            'flex flex-wrap justify-center gap-2 transition-all duration-700 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          {features.map((f, i) => (
            <button
              key={f.name}
              onClick={() => selectFeature(i)}
              className={cn(
                'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer',
                activeFeature === i && detailOpen
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
            >
              {f.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
