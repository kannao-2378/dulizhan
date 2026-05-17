import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { images } from '@/config/images'
import { cn } from '@/lib/utils'

const componentItems = [
  {
    image: images.components.tires,
    title: 'Multi-Terrain Gravel Tires',
    description: 'Closely patterned tread with reinforced side knobs delivers stable, confident rides on pavement and gravel.',
  },
  {
    image: images.components.brakes,
    title: 'Tektro Hydraulic Disc Brakes',
    description: 'Reliable stopping power in all conditions with low-maintenance hydraulic disc brakes.',
  },
  {
    image: images.components.tires,
    title: 'Integrated Front Light',
    description: 'Bright, integrated headlight illuminates your path for safe night riding.',
  },
  {
    image: images.components.brakes,
    title: 'Color Display',
    description: 'Clear, easy-to-read display shows speed, battery level, and assist mode at a glance.',
  },
  {
    image: images.components.tires,
    title: 'SHIMANO 8-Speed',
    description: 'Smooth, reliable shifting for effortless gear changes on any terrain.',
  },
  {
    image: images.components.brakes,
    title: 'Rear Rack & Fenders',
    description: 'Built-in rear rack and full fenders for practical everyday commuting.',
  },
]

export default function ComponentsSection() {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div
        ref={ref}
        className={cn(
          'max-w-7xl mx-auto',
          isVisible ? 'animate-fade-in' : 'opacity-0'
        )}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-brand-dark mb-4 leading-tight">
          Built with Industry-Leading Components
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Premium parts engineered for performance, durability, and everyday reliability.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {componentItems.map((item) => (
            <div
              key={item.title}
              className={cn(
                'rounded-2xl overflow-hidden border border-gray-200',
                'hover:border-brand-blue/30 hover:shadow-sm',
                'transition-all duration-300'
              )}
            >
              <div className="aspect-[4/3] w-full bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-brand-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
