"use client";
import { useState, useEffect } from "react";

interface LogoSliderProps {
  images: string[];
  interval?: number;
}

export default function LogoSlider({ images, interval = 3500 }: LogoSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative mx-auto mb-6 w-auto max-w-[280px] md:max-w-[400px] h-[80px] md:h-[110px]">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`ProЯвь ${index + 1}`}
          className={`
            absolute inset-0 w-full h-full object-contain drop-shadow-lg
            transition-opacity duration-1000 ease-in-out
            ${index === current ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}
    </div>
  );
}
