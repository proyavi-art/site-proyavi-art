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
    setSlider(Math.max(2, Math.min(98, x)));
  }, []);

  const onMouseDown = () => { isDragging.current = true; };
  const onMouseUp = () => { isDragging.current = false; };
  const onMouseMove = (e: React.MouseEvent) => { if (isDragging.current) handleMove(e.clientX); };
  const onTouchMove = (e: React.TouchEvent) => { handleMove(e.touches[0].clientX); };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-gray-100 select-none cursor-ew-resize"
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
      onTouchEnd={onMouseUp}
    >
      {/* After (фон) */}
      <img
        src={after}
        alt="После"
        className="w-full h-auto max-h-[85vh] object-contain mx-auto block"
      />

      {/* Before (обрезается по ширине) */}
      <div className="absolute inset-0 overflow-hidden bg-gray-100" style={{ width: `${slider}%` }}>
        <img
          src={before}
          alt="До"
          className="h-auto max-h-[85vh] object-contain max-w-none block"
          style={{ width: `${10000 / slider}%` }}
        />
      </div>

      {/* Линия разделения — толстая, с тенью, от края до края */}
      <div
        className="absolute inset-y-0 w-[3px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.6)]"
        style={{ left: `${slider}%`, transform: "translateX(-50%)" }}
      >
        {/* Кружок ползунка */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-200"
          onMouseDown={onMouseDown}
          onTouchStart={onMouseDown}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M15 18l6-6-6-6" />
            <path d="M9 6l-6 6 6 6" />
          </svg>
        </div>
      </div>

      {/* Метки */}
      <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full font-medium">До</span>
      <span className="absolute top-3 right-3 bg-white/90 text-black text-xs px-3 py-1.5 rounded-full font-medium">После</span>
    </div>
  );
}
