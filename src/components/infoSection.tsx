"use client";

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const formatNumber = (number: number): string => {
  if (number >= 1_000_000) {
    return `${(number / 1_000_000).toFixed(1)}M`;
  }
  if (number >= 1_000) {
    return `${(number / 1_000).toFixed(1)}K`;
  }
  return number.toString();
};

export default function InfoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <article className="bg-slate-50 w-screen p-10 flex justify-center items-center border-b-2">
      <div
        ref={sectionRef}
        className="flex flex-wrap justify-center items-center gap-14 text-center"
      >
        {/* Informação 1 */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-4xl font-bold text-zinc-900">
            {isVisible && <CountUp end={10_000} formattingFn={formatNumber} />}
          </span>
          <span className="text-zinc-800">
            Diversos produtos em nosso estoque.
          </span>
        </div>

        {/* Informação 2 */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-4xl font-bold text-zinc-900">
            {isVisible && <CountUp end={94} suffix="%" />}
          </span>
          <span className="text-zinc-800">
            Taxa de satisfação dos nossos clientes.
          </span>
        </div>

        {/* Informação 3 */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-4xl font-bold text-zinc-900">
            {isVisible && (
              <CountUp end={4.6} decimals={1} formattingFn={formatNumber} />
            )}
          </span>
          <span className="text-zinc-800">
            Avaliações médias dos clientes de 5,00!
          </span>
        </div>
      </div>
    </article>
  );
}
