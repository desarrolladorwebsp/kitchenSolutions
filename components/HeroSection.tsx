"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Box,
  Maximize,
  Minimize,
  Pause,
  Play,
  RotateCcw,
  RotateCw,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Volume2,
  VolumeX,
  Wand2,
  Zap,
} from "lucide-react";

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

const SKIP_SECONDS = 10;

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const whole = Math.floor(seconds);
  const minutes = Math.floor(whole / 60);
  const rest = whole % 60;
  return `${minutes}:${rest.toString().padStart(2, "0")}`;
}

function HeroVideo() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;

    const sync = () => {
      setCurrent(video.currentTime || 0);
      if (Number.isFinite(video.duration)) setDuration(video.duration);
      setPlaying(!video.paused);
      setMuted(video.muted);
    };

    sync();
    video.addEventListener("timeupdate", sync);
    video.addEventListener("loadedmetadata", sync);
    video.addEventListener("durationchange", sync);
    video.addEventListener("play", sync);
    video.addEventListener("pause", sync);

    if (!reduce) {
      video.play().catch(() => setPlaying(false));
    }

    return () => {
      video.removeEventListener("timeupdate", sync);
      video.removeEventListener("loadedmetadata", sync);
      video.removeEventListener("durationchange", sync);
      video.removeEventListener("play", sync);
      video.removeEventListener("pause", sync);
    };
  }, [reduce]);

  useEffect(() => {
    const onChange = () => setFullscreen(document.fullscreenElement === frameRef.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
      return;
    }
    video.pause();
    setPlaying(false);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    if (!video.muted && video.volume === 0) video.volume = 1;
    setMuted(video.muted);
  };

  const skip = (delta: number) => {
    const video = videoRef.current;
    if (!video) return;
    const next = Math.min(Math.max(video.currentTime + delta, 0), video.duration || 0);
    video.currentTime = next;
    setCurrent(next);
  };

  const seek = (value: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = value;
    setCurrent(value);
  };

  const toggleFullscreen = () => {
    const frame = frameRef.current;
    if (!frame) return;
    if (document.fullscreenElement === frame) {
      document.exitFullscreen().catch(() => undefined);
      return;
    }
    frame.requestFullscreen().catch(() => undefined);
  };

  return (
    <div
      ref={frameRef}
      className="relative aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-2xl bg-[#1c1c1c] shadow-[0_40px_90px_rgba(0,0,0,0.55)] sm:max-w-[360px] lg:max-w-[400px]"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay={!reduce}
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Recorrido de una cocina diseñada y fabricada a medida"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(event) => setCurrent(event.currentTarget.currentTime)}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onVolumeChange={(event) => setMuted(event.currentTarget.muted)}
        onClick={togglePlay}
      >
        <source src="/videos/hero-section.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-3 pb-3 pt-10">
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={Math.min(current, duration || 0)}
          aria-label="Posición del video"
          onChange={(event) => seek(Number(event.target.value))}
          className="mb-2 h-1 w-full cursor-pointer appearance-none rounded-full bg-white/35 accent-white"
        />
        <div className="flex items-center gap-1.5 text-white">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pausar" : "Reproducir"}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={() => skip(-SKIP_SECONDS)}
            aria-label="Retroceder 10 segundos"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => skip(SKIP_SECONDS)}
            aria-label="Adelantar 10 segundos"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
          >
            <RotateCw className="h-4 w-4" />
          </button>
          <span className="min-w-0 flex-1 text-center text-[11px] tabular-nums text-white/90">
            {formatTime(current)} / {formatTime(duration)}
          </span>
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Activar sonido" : "Silenciar"}
            aria-pressed={muted}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
          >
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label={fullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
          >
            {fullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("formulario-proyecto")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#121212]">
      <div className="relative isolate flex min-h-[82vh] flex-col overflow-hidden md:min-h-screen">
        <div className="relative z-10 mx-auto grid w-full max-w-[1280px] flex-1 grid-cols-1 items-center gap-6 px-4 py-6 sm:px-8 sm:py-12 lg:grid-cols-12 lg:px-12 lg:gap-12 xl:gap-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-none lg:col-span-6 lg:max-w-[560px]"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[#968a64] px-3 py-[6px] text-[9px] font-medium uppercase tracking-[0.16em] text-[#c4b896] sm:px-4 sm:py-[7px] sm:text-[11px]"
          >
            <Sparkles className="h-3 w-3 text-[#968a64] sm:h-3.5 sm:w-3.5" />
            DISEÑO 3D • FABRICACIÓN PROPIA • INSTALACIÓN PREMIUM
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-serif mt-5 text-[30px] font-medium leading-[1.12] text-white sm:mt-7 sm:text-[42px] lg:text-[52px]"
          >
            Tu cocina soñada
            Diseñada y fabricada para transformar tu hogar.
          
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-[500px] text-[14px] leading-[1.6] text-white/80 sm:mt-6 sm:text-[17px] sm:leading-[1.7]"
          >
            Visualiza cada detalle de tu nuevo espacio antes de instalarlo. Nos
            encargamos de todo el proceso con materiales de alta calidad
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 sm:mt-9">
            <button
              type="button"
              onClick={scrollToForm}
              className="group inline-flex items-center gap-3 rounded-full bg-[#65a30d] px-5 py-3 text-[14px] font-medium text-white shadow-[0_10px_30px_rgba(101,163,13,0.32)] transition-all duration-200 hover:scale-[1.02] hover:bg-[#4d7c0f] active:scale-[0.98] sm:px-8 sm:py-4 sm:text-[16px]"
            >
              <Wand2 className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]" />
             Agenda visita a domicilio

              <ArrowRight className="h-[16px] w-[16px] transition-transform duration-200 group-hover:translate-x-0.5 sm:h-[18px] sm:w-[18px]" />
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-wrap items-start gap-4 text-[#c4b896] sm:mt-10 sm:gap-8"
          >
            {FEATURES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex max-w-[120px] items-start gap-2.5 sm:max-w-[150px]">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 sm:h-5 sm:w-5" strokeWidth={1.75} />
                <span className="text-[11px] leading-snug sm:text-[13px]">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:col-span-6 lg:justify-end"
        >
          <HeroVideo />
        </motion.div>
        </div>

        <div className="relative z-10 border-b border-[#e8e3dd] bg-[#fcfaf7] py-5 sm:py-8">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 divide-y divide-neutral-300/80 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-12">
            {STATS.map(({ icon: Icon, accent, rest, iconWrap }) => (
              <div key={accent} className="flex items-center gap-3 py-4 sm:gap-5 sm:px-8 sm:py-0 sm:first:pl-0 sm:last:pr-0">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-sm sm:h-16 sm:w-16 ${iconWrap}`}
                >
                  <Icon className="h-5 w-5 sm:h-7 sm:w-7" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-[16px] font-semibold leading-tight text-[#6b705c] sm:text-[20px]">
                    {accent}
                  </p>
                  <p className="mt-0.5 text-[11px] leading-snug text-neutral-600 sm:text-[14px]">{rest}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
