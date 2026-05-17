import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { images } from '@/config/images'
import { cn } from '@/lib/utils'

const safetyFeatures = [
  {
    image: images.safety.ulCert,
    title: 'UL2271 & UL2849 Certified',
    description: 'Rigorously tested for battery and electrical system safety.',
  },
  {
    image: images.safety.waterproof,
    title: 'IPX7 Battery, IPX6 Frame',
    description: 'Ride with confidence in rain and wet conditions.',
  },
  {
    image: images.safety.nfc,
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
          {safetyFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-[4/3] w-full bg-gray-100">
                <img
                  src={feature.image}
                  alt={feature.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-brand-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
