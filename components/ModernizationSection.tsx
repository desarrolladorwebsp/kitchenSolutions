"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

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
  return (
    <section className="relative bg-[#fcfaf7] overflow-hidden border-b border-[#e8e3dd]">
      {/* Decorative background elements for depth and relief */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left gradient orb */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#f5f1ed] to-[#f9f7f5] opacity-60 blur-3xl" />
        
        {/* Bottom-right gradient orb */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-tl from-[#e8e3dd] to-[#f5f1ed] opacity-50 blur-3xl" />
        
        {/* Subtle diagonal gradient for relief */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fdfbf9]/40 via-transparent to-[#f0ebe5]/30" />
      </div>

      <div className="relative mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-12 py-16 xl:gap-16 xl:py-24">
        {/* Left Column - Text Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="order-2 lg:order-1"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[#c4b896] px-4 py-[7px] text-[11px] font-medium uppercase tracking-[0.18em] text-[#8f9a68]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#c4a574]" />
            REMODELACIÓN • MODERNIZACIÓN • RENOVACIÓN
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif mt-8 text-[42px] lg:text-[48px] font-medium leading-[1.2] tracking-tight text-[#2a2a2a]"
          >
            Transformamos tu cocina en un{" "}
            <span className="text-[#8f9a68]">espacio moderno</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-[17px] leading-[1.8] text-neutral-700"
          >
            Renovamos tu cocina para convertirla en un espacio donde el diseño y
            la funcionalidad se encuentran. Optimizamos cada rincón, incorporamos
            soluciones modernas y cuidamos cada detalle para aprovechar mejor el
            espacio.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-[17px] leading-[1.8] text-neutral-700"
          >
            El resultado es una cocina más cómoda, práctica y pensada para
            disfrutarla todos los días. Un espacio que no solo se ve mejor, sino
            que también funciona mejor para ti y tu hogar.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b8e0b0]">
                <span className="text-lg font-semibold text-[#2f7a3a]">✓</span>
              </div>
              <div>
                <p className="font-semibold text-[#2a2a2a]">Diseño personalizado</p>
                <p className="text-sm text-neutral-600">Adaptado a tu estilo</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3d09a]">
                <span className="text-lg font-semibold text-[#c67a18]">✓</span>
              </div>
              <div>
                <p className="font-semibold text-[#2a2a2a]">Funcionalidad mejorada</p>
                <p className="text-sm text-neutral-600">Más espacio y confort</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8">
            <button
              type="button"
              onClick={() =>
                document.getElementById("formulario-proyecto")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="group inline-flex items-center gap-3 rounded-full bg-[#6b705c] px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_12px_30px_rgba(107,112,92,0.28)] transition-all duration-200 hover:bg-[#5f6452] hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="h-[18px] w-[18px]" />
              Agenda visita a domicilio
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column - Image Container */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[500px]">
            {/* Decorative background elements */}
            <div className="absolute -inset-8 bg-gradient-to-br from-[#ede9e4]/40 to-[#ddd7d0]/20 rounded-[32px] blur-xl opacity-60 pointer-events-none" />
            
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] shadow-[0_20px_60px_rgba(42,42,42,0.15)] bg-neutral-200 border border-[#e8e3dd]">
              {/* Placeholder for kitchen modernization image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#f5f3f0] to-[#ede9e4]">
                <div className="text-center">
                  <div className="text-neutral-400 text-6xl mb-3">🖼️</div>
                  <p className="text-neutral-500 text-sm font-medium">
                    Espacio para imagen de cocina
                  </p>
                  <p className="text-neutral-400 text-xs mt-1">
                    (Se reemplazará fácilmente)
                  </p>
                </div>
              </div>

              {/* 
                Replace the placeholder above with your image:
                <Image
                  src="/path-to-your-kitchen-image"
                  alt="Cocina moderna remodelada"
                  fill
                  priority
                  sizes="500px"
                  className="object-cover"
                />
              */}
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-[#8f9a68]/10 blur-2xl" />
            <div className="absolute -top-6 -left-6 h-20 w-20 rounded-full bg-[#c4b896]/8 blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
