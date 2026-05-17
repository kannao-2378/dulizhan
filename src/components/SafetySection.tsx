import { ShieldCheck, Droplets, CreditCard } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface SafetyFeature {
  icon: LucideIcon
  title: string
  description: string
}

const safetyFeatures: SafetyFeature[] = [
  {
    icon: ShieldCheck,
    title: 'UL2271 & UL2849 Certified',
    description: 'Rigorously tested for battery and electrical system safety.',
  },
  {
    icon: Droplets,
    title: 'IPX7 Battery, IPX6 Frame',
    description: 'Ride with confidence in rain and wet conditions.',
  },
  {
    icon: CreditCard,
    title: 'NFC Key Card Unlock',
    description: 'Tap to unlock with a simple card—no keys needed.',
  },
]

export default function SafetySection() {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div
        ref={ref}
        className={cn(
          'max-w-7xl mx-auto',
          isVisible ? 'animate-fade-in' : 'opacity-0'
        )}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-brand-dark mb-4 leading-tight">
          Beyond Industry Safety Standards
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Every detail is engineered to keep you safe, secure, and ready for any ride.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {safetyFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue/10 text-brand-blue mb-5">
                  <Icon className="w-7 h-7" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
