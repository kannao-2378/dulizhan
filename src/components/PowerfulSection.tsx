import { Zap, Battery, Gauge } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useCountUp } from '@/hooks/useCountUp'
import { images } from '@/config/images'

const stats = [
  { value: 750, suffix: 'W', label: 'Quiet Hub Motor', Icon: Zap },
  { value: 1100, suffix: 'W', label: 'Peak Power', Icon: Gauge },
  { value: 75, suffix: 'Nm', label: 'Torque', Icon: Battery },
] as const

function StatCard({
  value,
  suffix,
  label,
  Icon,
  shouldStart,
}: {
  value: number
  suffix: string
  label: string
  Icon: typeof Zap
  shouldStart: boolean
}) {
  const count = useCountUp(value, 2000, 0, shouldStart)

  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-sm">
      <Icon className="h-8 w-8 text-emerald-400" />
      <span className="text-5xl font-extrabold tracking-tight text-white md:text-6xl">
        {count}
        <span className="text-emerald-400">{suffix}</span>
      </span>
      <span className="text-sm font-medium uppercase tracking-widest text-gray-400">
        {label}
      </span>
    </div>
  )
}

export default function PowerfulSection() {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2)
  const { ref: rangeRef, isVisible: rangeVisible } = useScrollAnimation(0.2)
  const rangeCount = useCountUp(80, 2200, 0, rangeVisible)

  return (
    <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div
        ref={statsRef}
        className={`mx-auto max-w-7xl px-6 py-24 transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Powerful On Everyday Hills
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-400">
          A powerful motor delivers the torque you need on every hill—no sweat,
          just smooth riding.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <StatCard
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              Icon={s.Icon}
              shouldStart={statsVisible}
            />
          ))}
        </div>
      </div>

      <div
        ref={rangeRef}
        className={`mx-auto max-w-7xl px-6 pb-24 transition-all duration-700 ${rangeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-center p-10 md:p-14">
              <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">
                Range
              </span>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-6xl font-extrabold tracking-tight md:text-7xl">
                  {rangeCount}
                </span>
                <span className="text-2xl font-semibold text-gray-400">
                  Miles
                </span>
              </div>
              <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                Up to 80 Miles Range
              </h3>
              <p className="mt-4 leading-relaxed text-gray-400">
                Powered by a high-capacity battery, the Discover 3 keeps you
                riding farther between charges. Whether it's your daily commute
                or a weekend adventure, go the distance with confidence.
              </p>
            </div>
            <div className="relative min-h-[320px]">
              <img
                src={images.powerful.range}
                alt="Velotric Discover 3 range"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
