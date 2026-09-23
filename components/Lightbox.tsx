"use client";
import { useEffect, useCallback } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  before: string;
  after: string;
  desc: string;
  note?: string;
  review?: string;
}

export default function Lightbox({ isOpen, onClose, before, after, desc, note, review }: LightboxProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Затемнение */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

      {/* Карточка */}
      <div 
        className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Крестик */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors text-lg"
          aria-label="Закрыть"
        >
          ✕
        </button>

        <div className="p-4 md:p-8">
          <BeforeAfterSlider before={before} after={after} />

          <div className="mt-8 space-y-6">
            <p className="text-gray-500 text-center text-base">{desc}</p>

            {note && (
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">О работе</h4>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{note}</p>
              </div>
            )}

            {review && (
              <div className="bg-[#A7D48D]/20 rounded-xl p-6 border border-[#A7D48D]/40">
                <h4 className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-3">Отзыв заказчика</h4>
                <p className="text-gray-800 italic leading-relaxed text-lg">«{review}»</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
