import { useState } from 'react'
import { Check, X, Award, ChevronDown } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

const rows = [
  { feature: 'Price', d3: '$1,999', dm: '$2,499' },
  { feature: 'Bike Weight', d3: '61 lbs', dm: '60 lbs' },
  { feature: 'Motor', d3: 'Hub Motor 750W, 1100W(Peak), 75Nm', dm: 'VeloCore™ Mid-Drive 500W, 960W(Peak), 90Nm' },
  { feature: 'Battery', d3: '730Wh', dm: '608Wh' },
  { feature: 'Max Range', d3: '80 Miles', dm: '55 Miles' },
  { feature: 'Top Speed', d3: '28 MPH', dm: '28 MPH' },
  { feature: 'Sensor', d3: 'SensorSwap™ Torque/Cadence', dm: 'Torque Sensor' },
  { feature: 'Pedal Assist', d3: '5 Modes', dm: '4 Modes + Smart Mode' },
  { feature: 'Fork', d3: 'Air suspension 80mm', dm: 'Air suspension 120mm' },
  { feature: 'Frame', d3: 'Triple-Butted Aluminum Alloy', dm: 'Triple-Butted Aluminum Alloy' },
  { feature: 'Brake', d3: 'Tektro Hydraulic Disc Brake', dm: 'Tektro Hydraulic Disc Brake' },
  { feature: 'Throttle', d3: 'Included, Trigger-control', dm: 'Included, Trigger-control' },
  { feature: 'Rear Derailleur', d3: 'SHIMANO 8-speed', dm: 'SHIMANO Cues, 9-speed' },
  { feature: 'UL Certified', d3: 'UL 2849', dm: 'UL 2849' },
  { feature: 'Turn Signals', d3: 'Yes', dm: 'Yes' },
  { feature: 'Works with Apple Find My', d3: 'Yes', dm: 'Yes' },
]

function renderCell(value: string) {
  if (value === 'Yes') return <Check className="mx-auto h-5 w-5 text-emerald-500" />
  if (value === 'No') return <X className="mx-auto h-5 w-5 text-red-400" />
  return value
}

const faqItems = [
  {
    question: 'What is the difference between Discover M and Discover 3?',
    discoverM: ['More natural riding feel', 'Higher efficiency', 'Better suited for long-distance and mixed-terrain riding'],
    discover3: ['More direct assistance', 'Lighter riding feel', 'Better suited for relaxed and casual riding'],
  },
]

export default function ComparisonTable() {
  const { ref: tableRef, isVisible: tableVisible } = useScrollAnimation(0.1)
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation(0.1)
  const [faqOpen, setFaqOpen] = useState(false)

  return (
    <section className="bg-white text-gray-900">
      <div
        ref={tableRef}
        className={cn(
          'mx-auto max-w-5xl px-6 py-20 transition-all duration-700',
          tableVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}
      >
        <h2 className="text-center text-4xl font-bold tracking-tight md:text-5xl">
          Which One Is Right for You?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-gray-500">
          Compare the Discover 3 and Discover M side by side.
        </p>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full min-w-[540px] text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="sticky left-0 z-10 bg-gray-50 px-5 py-4 text-left font-semibold text-gray-600">
                  Feature
                </th>
                <th className="relative px-5 py-4 text-center font-semibold">
                  <div className="flex items-center justify-center gap-2">
                    <span>Discover 3</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      <Award className="h-3 w-3" />
                      Best Seller
                    </span>
                  </div>
                </th>
                <th className="px-5 py-4 text-center font-semibold text-gray-600">
                  Discover M
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={cn(
                    'border-b border-gray-100 transition-colors',
                    i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'
                  )}
                >
                  <td
                    className={cn(
                      'sticky left-0 z-10 px-5 py-3.5 font-medium text-gray-700',
                      i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'
                    )}
                  >
                    {row.feature}
                  </td>
                  <td className="bg-blue-50/40 px-5 py-3.5 text-center text-gray-800">
                    {renderCell(row.d3)}
                  </td>
                  <td className="px-5 py-3.5 text-center text-gray-600">
                    {renderCell(row.dm)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        ref={faqRef}
        className={cn(
          'mx-auto max-w-3xl px-6 pb-20 transition-all duration-700',
          faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}
      >
        {faqItems.map((faq) => (
          <div key={faq.question} className="rounded-2xl border border-gray-200 bg-gray-50">
            <button
              onClick={() => setFaqOpen(!faqOpen)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <span className="text-base font-semibold text-gray-900">{faq.question}</span>
              <ChevronDown
                className={cn(
                  'h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300',
                  faqOpen && 'rotate-180'
                )}
              />
            </button>
            <div
              className={cn(
                'grid overflow-hidden transition-all duration-300',
                faqOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="px-6 pb-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl border border-gray-200 bg-white p-5">
                    <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">
                      Discover M
                    </h4>
                    <ul className="space-y-2">
                      {faq.discoverM.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-5">
                    <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-600">
                      Discover 3
                    </h4>
                    <ul className="space-y-2">
                      {faq.discover3.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
