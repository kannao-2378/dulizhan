import { useState } from "react";
import { Star, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "@/config/images";

const galleryImages = images.hero.main;
const totalImages = galleryImages.length;

const colors = [
  { name: "Lemans Blue", hex: "#2B5CE6" },
  { name: "Emerald Green", hex: "#2D8B55" },
  { name: "Cherry Crimson", hex: "#C41E3A" },
  { name: "Mint", hex: "#98D8C8" },
];

const specs = [
  { icon: images.icons.range, label: "Max Range", value: "80 Miles" },
  { icon: images.icons.speed, label: "Top Speed", value: "28 MPH" },
  { icon: images.icons.sensor, label: "SensorSwap™", value: "Torque/Cadence" },
  { icon: images.icons.battery, label: "Battery", value: "730 Wh" },
  { icon: images.icons.motor, label: "Motor", value: "750W/75Nm" },
  { icon: images.icons.assist, label: "Pedal Assist Mode", value: "5 Modes" },
];

export default function HeroSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState<"Regular" | "Large">("Regular");
  const [selectedColor, setSelectedColor] = useState(0);
  const [fade, setFade] = useState(true);

  const changeImage = (idx: number) => {
    if (idx === activeIdx) return;
    setFade(false);
    setTimeout(() => {
      setActiveIdx(idx);
      setFade(true);
    }, 200);
  };

  const prev = () => changeImage((activeIdx - 1 + totalImages) % totalImages);
  const next = () => changeImage((activeIdx + 1) % totalImages);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-50">
            {galleryImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Discover 3 view ${i + 1}`}
                className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${
                  i === activeIdx && fade ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <span className="absolute bottom-3 right-3 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white">
              {activeIdx + 1} / {totalImages}
            </span>
            {activeIdx === 0 && (
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 shadow">
                360 View
              </span>
            )}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow transition hover:bg-white"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow transition hover:bg-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {galleryImages.map((src, i) => (
              <button
                key={i}
                onClick={() => changeImage(i)}
                className={`h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border-2 transition ${
                  i === activeIdx
                    ? "border-gray-900"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={src}
                  alt={`Thumbnail ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
            Ultimate Comfort Commuter Ebike
          </p>
          <h1 className="text-3xl font-bold text-gray-900 lg:text-4xl">
            Velotric Discover 3 Ebike
          </h1>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-900">4.9</span>
            <a href="#" className="text-sm text-gray-500 underline hover:text-gray-700">
              116 Reviews
            </a>
          </div>

          <p className="text-2xl font-bold text-gray-900">$1,999.00</p>
          <p className="text-sm text-gray-500">
            Pay over time with <span className="font-medium text-gray-700">Affirm</span>
          </p>

          <div>
            <p className="mb-2 text-sm font-semibold text-gray-900">Size</p>
            <div className="flex gap-2">
              {(["Regular", "Large"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                    selectedSize === s
                      ? "border-gray-900 bg-gray-900 text-white"
                      : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <p className="mt-1.5 text-xs text-gray-500">
              {selectedSize === "Regular" ? "5'4''–5'10''" : "5'9''–6'7''"}
            </p>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold text-gray-900">
              Color — <span className="font-normal text-gray-500">{colors[selectedColor].name}</span>
            </p>
            <div className="flex gap-3">
              {colors.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(i)}
                  className={`h-8 w-8 rounded-full border-2 transition ${
                    i === selectedColor ? "border-gray-900 scale-110" : "border-transparent"
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {specs.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-start rounded-xl bg-gray-50 p-3"
              >
                <img src={s.icon} alt={s.label} className="mb-1 h-[18px] w-[18px]" />
                <span className="text-xs text-gray-500">{s.label}</span>
                <span className="text-sm font-semibold text-gray-900">{s.value}</span>
              </div>
            ))}
          </div>

          <a href="#" className="text-sm font-medium text-gray-700 underline hover:text-gray-900">
            Learn about More Features
          </a>

          <div className="flex flex-wrap gap-4 text-xs text-gray-600">
            <span className="flex items-center gap-1.5">
              <Truck size={14} /> Free Shipping
            </span>
            <span className="flex items-center gap-1.5">
              <RotateCcw size={14} /> 14-Day Trial
            </span>
            <span className="flex items-center gap-1.5">
              <Shield size={14} /> 2-Year Warranty
            </span>
          </div>

          <button className="w-full rounded-full bg-black py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800">
            Buy Now
          </button>
          <button className="w-full rounded-full border border-gray-900 py-3.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50">
            Test Ride
          </button>
        </div>
      </div>
    </section>
  );
}
