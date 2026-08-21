"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  CalendarDays,
  Hammer,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

const PROCESS_BACKGROUND =
  "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1800&q=80";

const STEPS = [
  {
    icon: UsersRound,
    number: "01",
    title: "Mas de 180 familias",
    description: "ya confiaron en nosotros para transformar su cocina.",
  },
  {
    icon: Boxes,
    number: "02",
    title: "Diseno 3D incluido",
    description: "para visualizar el resultado antes de comenzar la fabricacion.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Materiales premium",
    description: "con acabados impecables pensados para durar.",
  },
  {
    icon: Hammer,
    number: "04",
    title: "Instalacion completa",
    description: "nos encargamos de todo para que disfrutes tu nueva cocina.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ProcessSection() {
  const scrollToForm = () => {
    document.getElementById("formulario-proyecto")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#121212] py-10 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={PROCESS_BACKGROUND}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center lg:object-[center_60%]"
        />
        <div className="absolute inset-0 bg-[#121212]/80 sm:bg-[#121212]/84" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/72 via-[#121212]/84 to-[#121212]/94" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mx-auto max-w-[760px] text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[#968a64] px-3 py-[6px] text-[9px] font-medium uppercase tracking-[0.16em] text-[#c4b896] sm:px-4 sm:py-[7px] sm:text-[11px]"
          >
            <Sparkles className="h-3 w-3 text-[#c4a574] sm:h-3.5 sm:w-3.5" />
            Un proceso pensado para ti
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-serif mt-5 text-[30px] font-medium leading-[1.12] text-white sm:mt-6 sm:text-[42px] lg:text-[48px]"
          >
            Un proceso simple, <span className="text-[#c4a574]">claro y seguro</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-[14px] leading-[1.6] text-white/70 sm:mt-6 sm:text-[17px] sm:leading-[1.8]">
            Asi hacemos realidad tu nueva cocina, sin complicaciones.
          </motion.p>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4"
        >
          {STEPS.map(({ icon: Icon, number, title, description }) => (
            <motion.li
              key={number}
              variants={fadeUp}
              className="relative min-h-[200px] rounded-2xl border border-[#968a64]/30 bg-white/[0.03] p-4 sm:min-h-[264px] sm:p-6"
            >
              <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#968a64]/60 text-[11px] font-semibold text-[#c4a574] sm:right-5 sm:top-5 sm:h-10 sm:w-10 sm:text-sm">
                {number}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[#c4a574] shadow-[0_12px_30px_rgba(0,0,0,0.3)] sm:h-16 sm:w-16">
                <Icon className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-[18px] font-medium leading-tight text-[#e7c17a] sm:mt-8 sm:text-[24px]">{title}</h3>
              <div className="mt-3 h-px w-7 bg-[#c4a574] sm:mt-4 sm:w-8" />
              <p className="mt-3 max-w-[220px] text-xs leading-relaxed text-white/75 sm:mt-4 sm:max-w-[240px] sm:text-sm">{description}</p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 grid items-center gap-4 rounded-2xl border border-[#968a64]/30 bg-white/[0.03] p-4 sm:grid-cols-[1fr_auto] sm:gap-6 sm:p-8 lg:grid-cols-[1fr_1fr_auto]"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#968a64]/50 text-[#c4a574] sm:h-14 sm:w-14">
              <ShieldCheck className="h-5 w-5 sm:h-7 sm:w-7" />
            </span>
            <div>
              <p className="text-sm font-medium text-white sm:text-base">Calidad garantizada en cada paso</p>
              <p className="mt-1 text-xs text-white/60 sm:text-sm">Tu satisfaccion es nuestra prioridad.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-t border-white/10 pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
            <CalendarDays className="h-5 w-5 shrink-0 text-[#c4a574] sm:h-6 sm:w-6" />
            <p className="text-xs leading-relaxed text-white/80 sm:text-sm">
              <span className="block font-medium text-[#e7c17a]">Agenda tu proyecto hoy</span>
              Da el primer paso hacia tu nueva cocina.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToForm}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#65a30d] px-5 py-3 text-[14px] font-medium text-white shadow-[0_10px_30px_rgba(101,163,13,0.32)] transition-all duration-200 hover:scale-[1.02] hover:bg-[#4d7c0f] active:scale-[0.98] sm:px-6 sm:py-3.5 sm:text-[15px]"
          >
            Agenda visita a domicilio
            <ArrowRight className="h-[16px] w-[16px] transition-transform duration-200 group-hover:translate-x-0.5 sm:h-[18px] sm:w-[18px]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}