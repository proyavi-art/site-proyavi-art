"use client";
import { useState, useRef, useCallback } from "react";

export default function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  const [slider, setSlider] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSlider(Math.max(5, Math.min(95, x)));
  }, []);

  const onMouseDown = () => { isDragging.current = true; };
  const onMouseUp = () => { isDragging.current = false; };
  const onMouseMove = (e: React.MouseEvent) => { if (isDragging.current) handleMove(e.clientX); };
  const onTouchMove = (e: React.TouchEvent) => { handleMove(e.touches[0].clientX); };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-gray-200"
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
      onTouchEnd={onMouseUp}
    >
      {/* After (фон) */}
      <img src={after} alt="После" className="absolute inset-0 w-full h-full object-cover" />

      {/* Before (обрезается) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${slider}%` }}>
        <img
          src={before}
          alt="До"
          className="absolute inset-0 h-full object-cover max-w-none"
          style={{ width: `${10000 / slider}%` }}
        />
      </div>

      {/* Ползунок */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white"
        style={{ left: `${slider}%`, transform: "translateX(-50%)" }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100"
          onMouseDown={onMouseDown}
          onTouchStart={onMouseDown}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 4l4 4-4 4" /><path d="M6 4l-4 4 4 4" />
          </svg>
        </div>
      </div>

      {/* Метки */}
      <span className="absolute top-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">До</span>
      <span className="absolute top-4 right-4 bg-white/80 text-black text-xs px-3 py-1 rounded-full">После</span>
    </div>
  );
}
