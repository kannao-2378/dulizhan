import { Star, CheckCircle } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

const ratingBreakdown = [
  { stars: 5, percent: 95 },
  { stars: 4, percent: 3 },
  { stars: 3, percent: 1 },
  { stars: 2, percent: 0 },
  { stars: 1, percent: 1 },
]

const reviews = [
  {
    author: 'Randolph R.',
    rating: 5,
    title: "Best ebike I've ever owned",
    text: 'The comfort level is unmatched. The suspension seatpost and the saddle make every ride enjoyable, even on bumpy roads.',
    verified: true,
  },
  {
    author: 'Bob K.',
    rating: 5,
    title: 'Two new D3s',
    text: "We bought two D3s for my wife and me. We ride every weekend and couldn't be happier with the performance and comfort.",
    verified: true,
  },
  {
    author: 'Sarah M.',
    rating: 5,
    title: 'Perfect commuter bike',
    text: 'I ride 10 miles each way to work and this bike handles it effortlessly. The battery lasts all week!',
    verified: true,
  },
  {
    author: 'James T.',
    rating: 4,
    title: 'Great bike, minor assembly issues',
    text: 'The bike itself is fantastic. Super comfortable and powerful. Assembly instructions could be clearer but overall very satisfied.',
    verified: true,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            'h-4 w-4',
            i < rating
              ? 'fill-amber-400 text-amber-400'
              : 'fill-gray-200 text-gray-200'
          )}
        />
      ))}
    </div>
  )
}

export default function UserReviews() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="bg-white py-20 px-6">
      <div
        ref={ref}
        className={cn(
          'max-w-6xl mx-auto transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}
      >
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Reviews
        </h2>

        <div className="mt-10 grid gap-12 md:grid-cols-[280px_1fr]">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-8">
            <span className="text-6xl font-bold text-gray-900">4.9</span>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <p className="text-sm text-gray-500">Based on 116 Reviews</p>

            <div className="mt-4 w-full space-y-2">
              {ratingBreakdown.map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <span className="w-4 text-xs font-medium text-gray-600">
                    {item.stars}
                  </span>
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-amber-400 transition-all duration-700"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-xs text-gray-500">
                    {item.percent}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {reviews.map((review, i) => (
              <div
                key={review.author}
                className={cn(
                  'rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all duration-700',
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">
                    {review.author}
                  </span>
                  {review.verified && (
                    <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
                      <CheckCircle className="h-3.5 w-3.5" />
                      Verified Buyer
                    </span>
                  )}
                </div>
                <div className="mt-2">
                  <StarRating rating={review.rating} />
                </div>
                <h4 className="mt-3 font-bold text-gray-900">
                  {review.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button className="rounded-full border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50">
            Show More Reviews
          </button>
        </div>
      </div>
    </section>
  )
}
