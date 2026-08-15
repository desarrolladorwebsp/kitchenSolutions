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
    <section className="relative isolate overflow-hidden bg-[#121212] py-16 sm:py-20 lg:py-24">
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

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mx-auto max-w-[760px] text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[#968a64] px-4 py-[7px] text-[11px] font-medium uppercase tracking-[0.18em] text-[#c4b896]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#c4a574]" />
            Un proceso pensado para ti
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-serif mt-6 text-[36px] font-medium leading-[1.2] text-white sm:text-[42px] lg:text-[48px]"
          >
            Un proceso simple, <span className="text-[#c4a574]">claro y seguro</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-[17px] leading-[1.8] text-white/70">
            Asi hacemos realidad tu nueva cocina, sin complicaciones.
          </motion.p>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {STEPS.map(({ icon: Icon, number, title, description }) => (
            <motion.li
              key={number}
              variants={fadeUp}
              className="relative min-h-[264px] rounded-2xl border border-[#968a64]/30 bg-white/[0.03] p-6"
            >
              <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#968a64]/60 text-sm font-semibold text-[#c4a574]">
                {number}
              </span>
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[#c4a574] shadow-[0_12px_30px_rgba(0,0,0,0.3)]">
                <Icon className="h-8 w-8" strokeWidth={1.75} />
              </span>
              <h3 className="mt-8 text-[24px] font-medium leading-tight text-[#e7c17a]">{title}</h3>
              <div className="mt-4 h-px w-8 bg-[#c4a574]" />
              <p className="mt-4 max-w-[240px] text-sm leading-relaxed text-white/75">{description}</p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 grid items-center gap-6 rounded-2xl border border-[#968a64]/30 bg-white/[0.03] p-6 sm:grid-cols-[1fr_auto] sm:p-8 lg:grid-cols-[1fr_1fr_auto]"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#968a64]/50 text-[#c4a574]">
              <ShieldCheck className="h-7 w-7" />
            </span>
            <div>
              <p className="font-medium text-white">Calidad garantizada en cada paso</p>
              <p className="mt-1 text-sm text-white/60">Tu satisfaccion es nuestra prioridad.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-t border-white/10 pt-6 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
            <CalendarDays className="h-6 w-6 shrink-0 text-[#c4a574]" />
            <p className="text-sm leading-relaxed text-white/80">
              <span className="block font-medium text-[#e7c17a]">Agenda tu proyecto hoy</span>
              Da el primer paso hacia tu nueva cocina.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToForm}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#65a30d] px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_10px_30px_rgba(101,163,13,0.32)] transition-all duration-200 hover:scale-[1.02] hover:bg-[#4d7c0f] active:scale-[0.98]"
          >
            Agenda visita a domicilio
            <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}