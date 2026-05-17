import { useState } from 'react'
import { Instagram, Facebook, Youtube, Mail, Send } from 'lucide-react'
import { images } from '@/config/images'

const shopLinks = ['Electric Bikes', 'Accessories', 'Parts', 'Gift Cards']
const supportLinks = ['Help Center', 'Warranty', 'Returns', 'Contact Us']
const companyLinks = ['About Us', 'Careers', 'Press', 'Dealers']

const socialIcons = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Youtube, label: 'YouTube' },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src={images.logo}
              alt="Velotric"
              className="h-8 brightness-0 invert"
            />
            <p className="mt-4 text-sm text-gray-400">We're here to help.</p>
            <div className="mt-5 flex gap-4">
              {socialIcons.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
              <a
                href="#"
                aria-label="TikTok"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.2a8.16 8.16 0 005.58 2.18V12a4.83 4.83 0 01-3.77-1.55V6.69h3.77z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Shop
            </h4>
            <ul className="mt-4 space-y-3">
              {shopLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Support
            </h4>
            <ul className="mt-4 space-y-3">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-xl border border-gray-700 p-6">
          <h4 className="text-lg font-semibold">Stay Updated.</h4>
          <div className="mt-4 flex gap-3">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-600 bg-transparent py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-white"
              />
            </div>
            <button className="flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-brand-dark transition-opacity hover:opacity-90">
              <Send className="h-4 w-4" />
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-xs text-gray-500">
            © 2025 Velotric. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
