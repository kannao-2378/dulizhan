import { useState } from 'react'
import { Plus, Minus, MessageCircle } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

const faqItems = [
  {
    question: 'What is the difference between Discover M and Discover 3?',
    answer:
      'Discover M: More natural riding feel, Higher efficiency, Better suited for long-distance and mixed-terrain riding. Discover 3: More direct assistance, Lighter riding feel, Better suited for relaxed and casual riding.',
  },
  {
    question: 'What is the range of the Discover 3?',
    answer:
      'The Discover 3 has a maximum range of up to 80 miles on a single charge, depending on riding conditions, terrain, rider weight, and assist level used.',
  },
  {
    question: 'How long does it take to charge the battery?',
    answer:
      'The 730Wh battery takes approximately 5 hours to fully charge from empty using the included 48V 3A smart charger.',
  },
  {
    question: 'Is the Discover 3 waterproof?',
    answer:
      'Yes, the Discover 3 features an IPX7-rated battery and IPX6-rated frame, meaning it can handle rain and wet conditions with confidence.',
  },
  {
    question: 'What is SensorSwap™?',
    answer:
      'SensorSwap™ allows you to switch between a torque sensor and a cadence sensor. Torque sensor provides a more natural, responsive riding feel, while cadence sensor offers consistent power delivery regardless of pedal effort.',
  },
  {
    question: 'Does the Discover 3 come assembled?',
    answer:
      "The Discover 3 comes mostly assembled. You'll need to attach the front wheel, handlebar, pedals, and a few other components. A toolkit and instructions are included.",
  },
  {
    question: 'What is the warranty?',
    answer:
      'The Discover 3 comes with a comprehensive 2-year warranty covering all electrical components and the frame. See full warranty details for more information.',
  },
  {
    question:
      'The suspension seatpost feels too tall. What can I do?',
    answer:
      'You can adjust the seatpost height using the quick-release clamp. If you need a shorter seatpost, contact our support team for options.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { ref, isVisible } = useScrollAnimation(0.1)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white py-20 px-6">
      <div
        ref={ref}
        className={cn(
          'max-w-3xl mx-auto transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-gray-500">
              Answers to most common questions about products, orders, shipments,
              and payments.
            </p>
          </div>
          <a
            href="#"
            className="flex shrink-0 items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
          >
            <MessageCircle className="h-4 w-4" />
            Contact Us
          </a>
        </div>

        <div className="mt-10 divide-y divide-gray-100">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="py-1">
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-medium text-gray-900">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0 text-gray-400" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-gray-400" />
                  )}
                </button>
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    isOpen ? 'max-h-48 pb-5' : 'max-h-0'
                  )}
                >
                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
