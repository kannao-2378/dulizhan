import { useState } from 'react'
import { Plus, X, ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { images } from '@/config/images'
import { cn } from '@/lib/utils'

const features = [
  {
    name: 'ComfortMax™ Saddle',
    description:
      'Our most comfortable saddle ever, designed with dual-density foam and a widened profile for lasting comfort on every ride.',
    bulletPoints: [
      '230mm widened saddle for broader support',
      'Dual-density foam for balanced comfort and stability',
      'Vacuum-formed build for added structure',
      'Improved resistance to long-ride compression',
    ],
  },
  {
    name: 'Adjustable Air Suspension',
    description:
      'Fine-tune your ride with adjustable air suspension that absorbs bumps and vibrations for a smoother journey.',
    bulletPoints: [
      'Adjustable air pressure for rider weight',
      'Lock-out feature for efficient pedaling',
      'Rebound adjustment for customized feel',
      '80mm travel for versatile terrain handling',
    ],
  },
  {
    name: 'Breathable Saddle',
    description:
      'Engineered with ventilation channels to keep you cool and comfortable, even on warm-weather rides.',
    bulletPoints: [
      'Strategic ventilation channels',
      'Pressure-relief design',
      'Moisture-wicking cover material',
      'Ergonomic shape for natural riding position',
    ],
  },
  {
    name: 'Suspension Seatpost',
    description:
      'Absorb shocks and vibrations from the road with a suspension seatpost that adds an extra layer of comfort.',
    bulletPoints: [
      'Up to 35mm travel',
      'Adjustable preload',
      'Reduces fatigue on long rides',
      'Seamless integration with frame design',
    ],
  },
]

const hotspots = [
  { x: '50%', y: '35%', featureIndex: 0 },
  { x: '30%', y: '55%', featureIndex: 1 },
  { x: '55%', y: '60%', featureIndex: 2 },
  { x: '45%', y: '75%', featureIndex: 3 },
]

export default function GuidedTour() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [detailOpen, setDetailOpen] = useState(false)
  const { ref, isVisible } = useScrollAnimation(0.1)

  const active = features[activeFeature]

  return (
    <section ref={ref} className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2
          className={cn(
            'text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          Plush from the first sit.
        </h2>

        <div
          className={cn(
            'relative max-w-4xl mx-auto mb-10 transition-all duration-700 delay-150',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100">
            <img
              src={images.hero.main[0]}
              alt="Velotric Discover 3"
              className="w-full h-full object-cover"
            />

            {hotspots.map((spot, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveFeature(spot.featureIndex)
                  setDetailOpen(true)
                }}
                className={cn(
                  'absolute z-10 group cursor-pointer',
                  'transition-transform duration-200 hover:scale-125'
                )}
                style={{ left: spot.x, top: spot.y, transform: 'translate(-50%, -50%)' }}
              >
                <span className="absolute inset-0 rounded-full bg-blue-500/30 animate-hotspot-ping" />
                <span
                  className={cn(
                    'relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors duration-200',
                    activeFeature === spot.featureIndex
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : 'bg-white/90 border-white text-gray-700 group-hover:border-blue-400'
                  )}
                >
                  <Plus className="w-4 h-4" />
                </span>
              </button>
            ))}
          </div>

          {detailOpen && (
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={() => setDetailOpen(false)}
                className="w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        <div
          className={cn(
            'flex flex-wrap justify-center gap-2 mb-8 transition-all duration-700 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          {features.map((f, i) => (
            <button
              key={f.name}
              onClick={() => {
                setActiveFeature(i)
                setDetailOpen(true)
              }}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer',
                activeFeature === i
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
            >
              {f.name}
            </button>
          ))}
        </div>

        <div
          className={cn(
            'max-w-3xl mx-auto overflow-hidden transition-all duration-500',
            detailOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{active.name}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{active.description}</p>

            {activeFeature === 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  How Our Saddle Evolved
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Gen 1', img: images.comfort.saddleGen1 },
                    { label: 'Gen 2', img: images.comfort.saddleGen2 },
                    { label: 'Gen 3', img: images.comfort.saddleGen3 },
                  ].map((gen) => (
                    <div key={gen.label} className="text-center">
                      <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-200 mb-2">
                        <img
                          src={gen.img}
                          alt={gen.label}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-500">{gen.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <ul className="space-y-3">
              {active.bulletPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
