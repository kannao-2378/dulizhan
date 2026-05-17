import { Store, ShieldCheck, Droplets } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

const badges = [
  {
    icon: Store,
    title: '1,200+ dealer shops',
    subtitle: 'Reliable and Trusted',
  },
  {
    icon: ShieldCheck,
    title: 'Safety Certified',
    subtitle: 'UL2271/UL2849 Certification',
  },
  {
    icon: Droplets,
    title: 'Waterproof',
    subtitle: 'IPX7 Battery, IPX6 Frame',
  },
]

export default function TrustBadges() {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <section
      ref={ref}
      className="w-full py-16 px-6"
      style={{ backgroundColor: '#f4f4f6' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        {badges.map((badge, i) => {
          const Icon = badge.icon
          return (
            <div
              key={badge.title}
              className={cn(
                'flex flex-col items-center text-center gap-3 transition-all duration-700',
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Icon className="w-7 h-7 text-gray-800" strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{badge.title}</h3>
              <p className="text-sm text-gray-500 max-w-[200px]">{badge.subtitle}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
