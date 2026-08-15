"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const MODERNIZATION_IMAGE = "/images/8067d353-09b9-4027-b9cb-61408a3c9fce.jpeg";

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
    <section className="border-b border-[#e8e3dd] bg-[#fcfaf7]">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="order-2 max-w-[560px] lg:order-1"
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
            className="font-serif mt-6 text-[36px] font-medium leading-[1.2] text-[#2a2a2a] sm:text-[42px] lg:text-[48px]"
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
              className="group inline-flex items-center gap-3 rounded-full bg-[#65a30d] px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_10px_30px_rgba(101,163,13,0.32)] transition-all duration-200 hover:scale-[1.02] hover:bg-[#4d7c0f] active:scale-[0.98]"
            >
              <Sparkles className="h-[18px] w-[18px]" />
              Agenda visita a domicilio
              <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative aspect-[4/5] w-full max-w-[500px] overflow-hidden rounded-2xl border border-[#e6e1d6] bg-[#f7f4ee] shadow-[0_20px_60px_rgba(42,42,42,0.15)]">
            <Image
              src={MODERNIZATION_IMAGE}
              alt="Cocina renovada con mobiliario de madera y cubierta clara"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
