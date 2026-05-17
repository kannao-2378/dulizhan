import { images } from '@/config/images'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

const terrainCards = [
  {
    label: 'Paved Roads',
    description: 'Smooth, efficient rides on city streets and bike lanes.',
    image: images.terrain.paved,
    mobileImage: images.terrain.pavedMobile,
  },
  {
    label: 'Hill Climbs',
    description: 'Powerful motor assistance makes every hill feel flat.',
    image: images.terrain.climbing,
    mobileImage: images.terrain.climbingMobile,
  },
  {
    label: 'Gravel Paths',
    description: 'Multi-terrain tires keep you confident on loose surfaces.',
    image: images.terrain.gravel,
    mobileImage: images.terrain.gravelMobile,
  },
]

export default function TerrainSection() {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <section className="py-20 px-4 md:px-8 bg-brand-dark text-white">
      <div
        ref={ref}
        className={cn(
          'max-w-7xl mx-auto',
          isVisible ? 'animate-fade-in' : 'opacity-0'
        )}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 leading-tight">
          Smooth on streets. Confident on climbs. Free on gravel.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {terrainCards.map((card) => (
            <div
              key={card.label}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={card.image}
                alt={card.label}
                className={cn(
                  'absolute inset-0 w-full h-full object-cover',
                  'transition-transform duration-500 ease-out',
                  'group-hover:scale-105'
                )}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-1">
                  {card.label}
                </h3>
                <p className="text-sm md:text-base text-white/80">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
