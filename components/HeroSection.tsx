"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Box,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wand2,
  Zap,
} from "lucide-react";

const KITCHEN_BG =
  "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1800&q=80";
const FOLIAGE_BG =
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80";
const VIDEO_SRC = "/videos/hero-section.mp4";

const FEATURES = [
  { icon: Box, label: "Renderizado 3D real" },
  { icon: Zap, label: "Instalación en tiempo récord" },
  { icon: ShieldCheck, label: "Garantía por escrito" },
];

const STATS = [
  {
    icon: Users,
    accent: "+250",
    rest: "cocinas entregadas en todo el país",
    iconWrap: "bg-[#b8e0b0] text-[#2f7a3a]",
  },
  {
    icon: Star,
    accent: "+5 años",
    rest: "de experiencia creando espacios únicos",
    iconWrap: "bg-[#f3d09a] text-[#c67a18]",
  },
  {
    icon: ShieldCheck,
    accent: "Garantía de instalación",
    rest: "Tranquilidad total con respaldo escrito en cada proyecto",
    iconWrap: "bg-[#c5e8b8] text-[#2f7a3a]",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("formulario-proyecto")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#121212]">
      <div className="relative isolate flex min-h-screen flex-col overflow-hidden">
        <div className="pointer-events-none absolute inset-0 lg:hidden">
          <Image
            src={KITCHEN_BG}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[40%] lg:block">
          <Image
            src={KITCHEN_BG}
            alt=""
            fill
            priority
            sizes="40vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/45 to-black/10" />
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[28%] overflow-hidden lg:block">
          <Image
            src={FOLIAGE_BG}
            alt=""
            fill
            sizes="28vw"
            className="scale-125 object-cover object-left opacity-80 blur-[6px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/25 via-[#121212]/30 to-[#121212]" />
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[58%] bg-gradient-to-r from-[#121212]/25 via-[#121212]/10 to-transparent lg:block" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1280px] flex-1 grid-cols-1 items-center gap-12 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-12 lg:px-12 xl:gap-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="-mx-6 -mt-10 max-w-none bg-black/85 px-6 pb-10 pt-10 sm:-mx-8 sm:-mt-12 sm:px-8 sm:pt-12 lg:mx-0 lg:my-0 lg:max-w-[560px] lg:bg-transparent lg:px-0 lg:py-0 lg:col-span-6"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[#968a64] px-4 py-[7px] text-[11px] font-medium uppercase tracking-[0.18em] text-[#c4b896]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#968a64]" />
            DISEÑO 3D • FABRICACIÓN PROPIA • INSTALACIÓN PREMIUM
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-serif mt-7 text-[40px] font-medium leading-[1.18] text-white sm:text-[42px] lg:text-[52px]"
          >
            Tu cocina soñada,{" "}
            <span className="text-[#8f9a68]">diseñada en 3D</span> y fabricada
            sin retrasos{" "}
          
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-[500px] text-[17px] leading-[1.7] text-white/80"
          >
            Visualiza cada detalle de tu nuevo espacio antes de instalarlo. Nos
            encargamos de todo el proceso con materiales de alta gama y fechas
            de entrega garantizadas por contrato.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9">
            <button
              type="button"
              onClick={scrollToForm}
              className="group inline-flex items-center gap-3 rounded-full bg-[#65a30d] px-8 py-4 text-[16px] font-medium text-white shadow-[0_10px_30px_rgba(101,163,13,0.32)] transition-all duration-200 hover:scale-[1.02] hover:bg-[#4d7c0f] active:scale-[0.98]"
            >
              <Wand2 className="h-[18px] w-[18px]" />
             Agenda visita a domicilio

              <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-start gap-8 text-[#c4b896]"
          >
            {FEATURES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex max-w-[150px] items-start gap-2.5">
                <Icon className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.75} />
                <span className="text-[13px] leading-snug">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="-mx-6 flex justify-center bg-black/50 px-6 py-8 sm:-mx-8 sm:px-8 lg:mx-0 lg:col-span-6 lg:justify-end lg:bg-transparent lg:p-0"
        >
          <div className="relative w-full max-w-[430px] overflow-hidden rounded-2xl shadow-[0_40px_90px_rgba(0,0,0,0.55)] lg:max-w-[560px]">
            <div className="relative aspect-[4/5] w-full lg:aspect-[16/10]">
              <video
                src={VIDEO_SRC}
                aria-label="Recorrido por mi cocina moderna"
                autoPlay
                muted
                loop
                controls
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
        </div>

        <div className="relative z-10 border-b border-[#e8e3dd] bg-[#fcfaf7] py-8">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 divide-y divide-neutral-300/80 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-12">
            {STATS.map(({ icon: Icon, accent, rest, iconWrap }) => (
              <div key={accent} className="flex items-center gap-5 py-6 sm:px-8 sm:py-0 sm:first:pl-0 sm:last:pr-0">
                <span
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full shadow-sm ${iconWrap}`}
                >
                  <Icon className="h-7 w-7" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-[20px] font-semibold leading-tight text-[#6b705c]">
                    {accent}
                  </p>
                  <p className="mt-0.5 text-[14px] leading-snug text-neutral-600">{rest}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
