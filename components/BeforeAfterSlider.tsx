"use client";
import { useState, useRef, useCallback } from "react";

export default function BeforeAfterSlider({ 
  before, 
  after, 
  onImageClick 
}: { 
  before: string; 
  after: string; 
  onImageClick?: () => void;
}) {
  const [slider, setSlider] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const startX = useRef(0);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSlider(Math.max(2, Math.min(98, x)));
  }, []);

  const onContainerMouseDown = (e: React.MouseEvent) => {
    hasDragged.current = false;
    startX.current = e.clientX;
  };

  const onContainerMouseMove = (e: React.MouseEvent) => {
    if (Math.abs(e.clientX - startX.current) > 5) {
      hasDragged.current = true;
    }
    if (isDragging.current) handleMove(e.clientX);
  };

  const onContainerClick = () => {
    if (!hasDragged.current && onImageClick) {
      onImageClick();
    }
  };

  const onHandleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    isDragging.current = true;
    hasDragged.current = true;
  };

  const onHandleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    isDragging.current = true;
    hasDragged.current = true;
  };

  const onMouseUp = () => { isDragging.current = false; };
  const onTouchMove = (e: React.TouchEvent) => { handleMove(e.touches[0].clientX); };
  const onTouchEnd = () => { isDragging.current = false; };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-gray-100 select-none cursor-pointer"
      onMouseDown={onContainerMouseDown}
      onMouseMove={onContainerMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onClick={onContainerClick}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* After (фон) */}
      <img
        src={after}
        alt="После"
        className="w-full h-auto max-h-[85vh] object-contain mx-auto block"
        draggable={false}
      />

      {/* Before (обрезается по ширине) */}
      <div className="absolute inset-0 overflow-hidden bg-gray-100" style={{ width: `${slider}%` }}>
        <img
          src={before}
          alt="До"
          className="h-auto max-h-[85vh] object-contain max-w-none block"
          style={{ width: `${10000 / slider}%` }}
          draggable={false}
        />
      </div>

      {/* Линия разделения */}
      <div
        className="absolute inset-y-0 w-[3px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.6)]"
        style={{ left: `${slider}%`, transform: "translateX(-50%)" }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-200 cursor-ew-resize"
          onMouseDown={onHandleMouseDown}
          onTouchStart={onHandleTouchStart}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M15 18l6-6-6-6" />
            <path d="M9 6l-6 6 6 6" />
          </svg>
        </div>
      </div>

      {/* Метки */}
      <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full font-medium pointer-events-none">До</span>
      <span className="absolute top-3 right-3 bg-white/90 text-black text-xs px-3 py-1.5 rounded-full font-medium pointer-events-none">После</span>
    </div>
  );
}
