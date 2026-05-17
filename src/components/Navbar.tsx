import { useState, useEffect } from "react";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { images } from "@/config/images";

const navLinks = ["Ebike", "Accessories", "About", "Support"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="#">
          <img src={images.logo} alt="Velotric" className="h-7" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button className="hidden text-gray-700 transition-colors hover:text-gray-900 md:block">
            <Search size={20} />
          </button>
          <button className="hidden text-gray-700 transition-colors hover:text-gray-900 md:block">
            <User size={20} />
          </button>
          <button className="relative text-gray-700 transition-colors hover:text-gray-900">
            <ShoppingCart size={20} />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gray-900 text-[10px] font-bold text-white">
              2
            </span>
          </button>
          <button
            className="text-gray-700 transition-colors hover:text-gray-900 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="border-t border-gray-100 bg-white px-4 py-4">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="block py-2.5 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
                {link}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-5 pt-3">
            <button className="text-gray-700 hover:text-gray-900">
              <Search size={20} />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <User size={20} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
