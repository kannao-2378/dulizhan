import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

interface Spec {
  label: string
  value: string
}

interface SpecGroup {
  title: string
  specs: Spec[]
}

const specGroups: SpecGroup[] = [
  {
    title: 'FRAME',
    specs: [
      { label: 'Model', value: 'Velotric Discover 3' },
      { label: 'Colors', value: 'Emerald Green, Lemans Blue, Cherry Crimson, Mint' },
      { label: 'Frame Material', value: 'Triple-Butted Aluminum Alloy' },
      { label: 'Frame Size', value: "Regular (5'4''-5'10''), Large (5'9''-6'7'')" },
    ],
  },
  {
    title: 'FORK',
    specs: [
      { label: 'Fork', value: 'Air suspension 80mm Travel with Lock-out' },
    ],
  },
  {
    title: 'MOTOR & BATTERY',
    specs: [
      { label: 'Motor', value: '750W Hub Motor, 1100W Peak Power, 75Nm Torque' },
      { label: 'Battery', value: '48V, 15.2Ah (730Wh), IPX7, UL 2271 Certified' },
      { label: 'Cell', value: 'Samsung/LG 21700 cell, UL 2271 Certified' },
      { label: 'Charger', value: '48V 3A Smart Charger' },
      { label: 'Charging Time', value: '~5 Hours' },
    ],
  },
  {
    title: 'DRIVetrain',
    specs: [
      { label: 'Chainrings', value: '46T Narrow-Wide Chainring' },
      { label: 'Crankset', value: 'Aluminum Alloy, 170mm' },
      { label: 'Freewheel', value: '8-speed, 11-40T' },
      { label: 'Rear Derailleur', value: 'SHIMANO 8-speed' },
      { label: 'Shift Lever', value: 'SHIMANO 8-speed' },
      { label: 'Chain', value: 'KMC 8-speed' },
    ],
  },
  {
    title: 'BRAKE',
    specs: [
      { label: 'Brake', value: 'Tektro Hydraulic Disc Brake' },
      { label: 'Rotors', value: '180mm Front/180mm Rear' },
      { label: 'Brake Levers', value: 'Aluminum Alloy, with Power Cutoff' },
    ],
  },
  {
    title: 'WHEEL',
    specs: [
      { label: 'Rims', value: 'Aluminum Alloy' },
      { label: 'Front Hub', value: 'NOVATEC Aluminum Alloy, 15x110mm Thru-axle' },
      { label: 'Tire', value: 'KENDA 27.5x2.4" eBike Puncture Resistant Tires' },
    ],
  },
  {
    title: 'COCKPIT',
    specs: [
      { label: 'Handlebar', value: 'Aluminum Alloy, Φ31.8mm, 680mm(R)/700mm(L)' },
      { label: 'Grips', value: 'Durable Ergonomic Grips, Lockable' },
      { label: 'Stem', value: 'Adjustable, Aluminum Alloy, Φ31.8mm, 60mm Length' },
      { label: 'Saddle', value: 'VELOTRIC Comfort Ergonomic Seat' },
      { label: 'Seatpost', value: 'Suspension Seatpost, Aluminum Alloy' },
    ],
  },
  {
    title: 'DISPLAY & ELECTRONICS',
    specs: [
      { label: 'Display', value: 'Full-Color LCD Display' },
      { label: 'Sensors', value: 'SensorSwap™ Torque/Cadence' },
      { label: 'Connectivity', value: 'Bluetooth, App Compatible' },
      { label: 'NFC', value: 'Key Card Unlock' },
    ],
  },
  {
    title: 'OTHER',
    specs: [
      { label: 'Headlight', value: 'Integrated LED Headlight' },
      { label: 'Rear Light', value: 'Steady/Flash, Integrated with Rear Rack' },
      { label: 'Turn Signals', value: 'Integrated Front & Rear' },
      { label: 'Kickstand', value: 'Included' },
      { label: 'Rear Rack', value: 'Aluminum Alloy, 55lbs Capacity' },
      { label: 'Fenders', value: 'Full Front & Rear Fenders' },
      { label: 'Max Load', value: '440 lbs' },
      { label: 'Bike Weight', value: '61 lbs' },
    ],
  },
]

export default function Specifications() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [expanded, setExpanded] = useState<Record<string, boolean>>(
    () => Object.fromEntries(specGroups.map((g) => [g.title, true]))
  )

  const toggle = (title: string) =>
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }))

  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div
        ref={ref}
        className={cn(
          'max-w-4xl mx-auto',
          isVisible ? 'animate-fade-in' : 'opacity-0'
        )}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark text-center">
          Specifications
        </h2>
        <p className="mt-3 text-center text-gray-500 text-lg">
          Velotric Discover 3
        </p>

        <div className="mt-12 space-y-4">
          {specGroups.map((group) => {
            const isOpen = expanded[group.title]
            return (
              <div
                key={group.title}
                className="rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggle(group.title)}
                  className="flex w-full items-center justify-between bg-gray-50 px-6 py-4 text-left transition-colors hover:bg-gray-100"
                >
                  <span className="text-sm font-bold tracking-wider text-brand-dark">
                    {group.title}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 text-gray-500 transition-transform duration-200',
                      isOpen ? 'rotate-0' : '-rotate-90'
                    )}
                  />
                </button>

                <div
                  className={cn(
                    'grid transition-all duration-200',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="divide-y divide-gray-100">
                      {group.specs.map((spec, i) => (
                        <div
                          key={spec.label}
                          className={cn(
                            'grid grid-cols-1 md:grid-cols-2 gap-1 px-6 py-3 text-sm',
                            i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'
                          )}
                        >
                          <span className="font-medium text-gray-500">
                            {spec.label}
                          </span>
                          <span className="text-brand-dark">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
