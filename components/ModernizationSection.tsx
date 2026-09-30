"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeftRight, ArrowRight, Sparkles } from "lucide-react";

const BEFORE_IMAGE = "/images/antes-despues/antes.jpeg";
const AFTER_IMAGE = "/images/antes-despues/despues.png";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export default function ModernizationSection() {
  const [sliderPosition, setSliderPosition] = useState(58);

  return (
    <section className="border-b border-[#e8e3dd] bg-[#fcfaf7]">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-8 px-4 py-10 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="order-2 max-w-[560px] lg:order-1"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[#c4b896] px-3 py-[6px] text-[9px] font-medium uppercase tracking-[0.16em] text-[#8f9a68] sm:px-4 sm:py-[7px] sm:text-[11px]"
          >
            <Sparkles className="h-3 w-3 text-[#c4a574] sm:h-3.5 sm:w-3.5" />
            REMODELACIÓN • MODERNIZACIÓN • RENOVACIÓN
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif mt-5 text-[30px] font-medium leading-[1.12] text-[#2a2a2a] sm:mt-6 sm:text-[42px] lg:text-[48px]"
          >
            Transformamos tu cocina en un{" "}
            <span className="text-[#8f9a68]">espacio moderno</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-[14px] leading-[1.6] text-neutral-700 sm:mt-6 sm:text-[17px] sm:leading-[1.8]"
          >
            Renovamos tu cocina para convertirla en un espacio donde el diseño y
            la funcionalidad se encuentran. Optimizamos cada rincón, incorporamos
            soluciones modernas y cuidamos cada detalle para aprovechar mejor el
            espacio.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-[14px] leading-[1.6] text-neutral-700 sm:mt-5 sm:text-[17px] sm:leading-[1.8]"
          >
            El resultado es una cocina más cómoda, práctica y pensada para
            disfrutarla todos los días. Un espacio que no solo se ve mejor, sino
            que también funciona mejor para ti y tu hogar.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-center sm:gap-6"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b8e0b0] sm:h-12 sm:w-12">
                <span className="text-base font-semibold text-[#2f7a3a] sm:text-lg">✓</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#2a2a2a] sm:text-base">Diseño personalizado</p>
                <p className="text-xs text-neutral-600 sm:text-sm">Adaptado a tu estilo</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3d09a] sm:h-12 sm:w-12">
                <span className="text-base font-semibold text-[#c67a18] sm:text-lg">✓</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#2a2a2a] sm:text-base">Funcionalidad mejorada</p>
                <p className="text-xs text-neutral-600 sm:text-sm">Más espacio y confort</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 sm:mt-8">
            <button
              type="button"
              onClick={() =>
                document.getElementById("formulario-proyecto")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="group inline-flex items-center gap-3 rounded-full bg-[#65a30d] px-5 py-3 text-[14px] font-medium text-white shadow-[0_10px_30px_rgba(101,163,13,0.32)] transition-all duration-200 hover:scale-[1.02] hover:bg-[#4d7c0f] active:scale-[0.98] sm:px-6 sm:py-3.5 sm:text-[15px]"
            >
              <Sparkles className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]" />
              Agenda visita a domicilio
              <ArrowRight className="h-[16px] w-[16px] transition-transform duration-200 group-hover:translate-x-0.5 sm:h-[18px] sm:w-[18px]" />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative aspect-[3/4] w-full max-w-[420px] overflow-hidden rounded-2xl border border-[#e6e1d6] bg-[#f7f4ee] shadow-[0_20px_60px_rgba(42,42,42,0.15)]">
            <div className="absolute inset-0">
              <Image
                src={BEFORE_IMAGE}
                alt="Cocina antes de la remodelación"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div
              className="absolute inset-0 z-10 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src={AFTER_IMAGE}
                alt="Cocina después de la remodelación"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="h-full w-full object-cover object-center brightness-[0.9] contrast-[1.05]"
              />
            </div>

            <div
              className="absolute inset-y-0 z-20"
              style={{ left: `calc(${sliderPosition}% - 1px)` }}
            >
              <div className="h-full w-[2px] bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
              <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-black/35 text-white shadow-lg backdrop-blur-sm">
                <ArrowLeftRight className="h-4 w-4" />
              </div>
            </div>

            <div className="absolute left-3 top-3 z-30 inline-flex items-center rounded-full border border-white/20 bg-black/20 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm sm:text-[10px]">
              Antes
            </div>
            <div className="absolute right-3 top-3 z-30 inline-flex items-center rounded-full border border-white/20 bg-black/20 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm sm:text-[10px]">
              Después
            </div>

            <input
              type="range"
              min={0}
              max={100}
              value={sliderPosition}
              onChange={(event) => setSliderPosition(Number(event.target.value))}
              aria-label="Desliza para comparar antes y después"
              className="absolute inset-0 z-40 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
