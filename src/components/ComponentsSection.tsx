import { CircleDot, Disc, Lightbulb, Monitor, Settings, Package } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface ComponentItem {
  icon: LucideIcon
  title: string
  description: string
}

const componentItems: ComponentItem[] = [
  {
    icon: CircleDot,
    title: 'Multi-Terrain Gravel Tires',
    description:
      'Closely patterned tread with reinforced side knobs delivers stable, confident rides on pavement and gravel.',
  },
  {
    icon: Disc,
    title: 'Tektro Hydraulic Disc Brakes',
    description:
      'Reliable stopping power in all conditions with low-maintenance hydraulic disc brakes.',
  },
  {
    icon: Lightbulb,
    title: 'Integrated Front Light',
    description:
      'Bright, integrated headlight illuminates your path for safe night riding.',
  },
  {
    icon: Monitor,
    title: 'Color Display',
    description:
      'Clear, easy-to-read display shows speed, battery level, and assist mode at a glance.',
  },
  {
    icon: Settings,
    title: 'SHIMANO 8-Speed',
    description:
      'Smooth, reliable shifting for effortless gear changes on any terrain.',
  },
  {
    icon: Package,
    title: 'Rear Rack & Fenders',
    description:
      'Built-in rear rack and full fenders for practical everyday commuting.',
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
          {componentItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={cn(
                  'rounded-2xl p-6 border border-gray-200',
                  'hover:border-brand-blue/30 hover:shadow-sm',
                  'transition-all duration-300'
                )}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue/10 text-brand-blue mb-4">
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold text-brand-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
