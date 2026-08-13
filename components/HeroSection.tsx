"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Box,
  Play,
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
const VIDEO_THUMB =
  "https://images.unsplash.com/photo-1617228069096-4638a7ffc906?auto=format&fit=crop&w=1400&q=80";
const AVATAR =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80";
const YOUTUBE_ID = "5dSyy7ou7iA";
const VIDEO_EMBED = `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`;

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

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.13-2.14C19.5 3.7 12 3.7 12 3.7s-7.5 0-9.37.36A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 .1 12a31.6 31.6 0 0 0 .4 5.8 3.02 3.02 0 0 0 2.13 2.14c1.87.36 9.37.36 9.37.36s7.5 0 9.37-.36a3.02 3.02 0 0 0 2.13-2.14A31.6 31.6 0 0 0 23.9 12a31.6 31.6 0 0 0-.4-5.8ZM9.75 15.52V8.48L15.84 12l-6.09 3.52Z" />
    </svg>
  );
}

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollToForm = () => {
    document.getElementById("formulario-proyecto")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#121212]">
      <div className="relative isolate flex min-h-screen flex-col overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[40%]">
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

        <div className="pointer-events-none absolute inset-y-0 left-0 w-[28%] overflow-hidden">
          <Image
            src={FOLIAGE_BG}
            alt=""
            fill
            sizes="28vw"
            className="scale-125 object-cover object-left opacity-80 blur-[6px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/25 via-[#121212]/30 to-[#121212]" />
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-[58%] bg-gradient-to-r from-[#121212]/25 via-[#121212]/10 to-transparent" />

        <div className="relative z-10 mx-auto grid w-full flex-1 max-w-[1280px] grid-cols-12 items-center gap-12 px-12 py-12 xl:gap-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="col-span-6 max-w-[560px]"
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
            className="font-serif mt-7 text-[52px] font-medium leading-[1.18] tracking-tight text-white"
          >
            Tu cocina soñada,{" "}
            <span className="text-[#8f9a68]">diseñada en 3D</span> y fabricada
            sin retrasos{" "}
            <span className="text-[#c4a574]">ni costos ocultos</span>
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
              className="group inline-flex items-center gap-3 rounded-full bg-[#6b705c] px-8 py-4 text-[16px] font-medium text-white transition-all duration-200 hover:bg-[#5f6452] hover:scale-[1.02] active:scale-[0.98]"
            >
              <Wand2 className="h-[18px] w-[18px]" />
              Cotizar mi cocina ahora
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
          className="col-span-6 flex justify-end"
        >
          <div className="relative w-full max-w-[430px] overflow-hidden rounded-[28px] shadow-[0_40px_90px_rgba(0,0,0,0.55)]">
            <div className="relative aspect-[4/5] w-full">
              {isPlaying ? (
                <iframe
                  src={VIDEO_EMBED}
                  title="Recorrido por mi cocina moderna"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <>
                  <Image
                    src={VIDEO_THUMB}
                    alt="Proyecto real de cocina a medida"
                    fill
                    priority
                    sizes="430px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/15" />

                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    aria-label="Reproducir video del proyecto"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.span
                      className="flex h-[84px] w-[84px] items-center justify-center rounded-full bg-[#6b705c]/85 text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-[2px]"
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <Play className="ml-1 h-8 w-8 fill-white" />
                    </motion.span>
                  </button>

                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-black/45 px-4 py-3.5 backdrop-blur-md">
                    <div className="flex min-w-0 items-center gap-3">
                      <Image
                        src={AVATAR}
                        alt=""
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-full object-cover"
                      />
                      <div className="min-w-0">
                        <p className="truncate text-[13px] font-semibold text-white">
                          Recorrido por mi cocina moderna
                        </p>
                        <p className="text-[12px] text-white/70">Proyecto real</p>
                      </div>
                    </div>
                    <a
                      href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex shrink-0 items-center gap-1.5 text-[12px] font-medium text-white/90 transition hover:text-white"
                    >
                      Ver en YouTube
                      <YouTubeIcon className="h-4 w-4" />
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
        </div>

        <div className="relative z-10 bg-[#fcfaf7]">
          <div className="mx-auto grid max-w-[1280px] grid-cols-3 divide-x divide-neutral-300/80 px-12 py-8">
            {STATS.map(({ icon: Icon, accent, rest, iconWrap }) => (
              <div key={accent} className="flex items-center gap-5 px-8 first:pl-0 last:pr-0">
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
