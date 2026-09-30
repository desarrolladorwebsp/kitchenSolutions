"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const DURATION_MS = 5600;

const SLIDES = [
  {
    src: "/images/gallery/image-07.png",
    alt: "Cocina con isla blanca, respaldo de mosaico negro y campana de vidrio",
    position: "object-center",
  },
  {
    src: "/images/gallery/image-06.png",
    alt: "Cocina de nogal y blanco con piso de mármol y horno integrado",
    position: "object-[center_42%]",
  },
  {
    src: "/images/gallery/image-02.png",
    alt: "Cocina lineal de nogal con mesón de cuarzo y luz bajo los muebles",
    position: "object-[center_40%]",
  },
  {
    src: "/images/gallery/image-03.png",
    alt: "Cocina en roble claro con columna de hornos y barra",
    position: "object-[center_38%]",
  },
  {
    src: "/images/gallery/image-04.png",
    alt: "Cocina con vitrina iluminada, muebles de madera y cubierta blanca",
    position: "object-[center_45%]",
  },
  {
    src: "/images/gallery/image-08.png",
    alt: "Cocina de madera clara con horno en columna y desayunador",
    position: "object-[center_40%]",
  },
] as const;

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    scale: 1.06,
    opacity: 1,
    zIndex: 2,
  }),
  center: {
    x: "0%",
    scale: 1,
    opacity: 1,
    zIndex: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 1,
    zIndex: 0,
  }),
};

export default function HeroCarousel() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const generation = useRef(0);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const slide = SLIDES[index];
  const held = userPaused || hovered || tabHidden || Boolean(reduce);

  const paginate = (dir: number) => {
    generation.current += 1;
    setDirection(dir);
    setIndex((current) => (current + dir + SLIDES.length) % SLIDES.length);
  };

  const goTo = (next: number) => {
    if (next === index) return;
    const forward =
      (next - index + SLIDES.length) % SLIDES.length <= SLIDES.length / 2;
    generation.current += 1;
    setDirection(forward ? 1 : -1);
    setIndex(next);
  };

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    swipeStart.current = { x: event.clientX, y: event.clientY };
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const start = swipeStart.current;
    swipeStart.current = null;
    if (!start) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
    paginate(dx < 0 ? 1 : -1);
  };

  const renderGen = generation.current;

  return (
    <div
      className="hero-carousel relative w-full max-w-[520px] lg:max-w-[680px]"
      data-paused={held ? "true" : "false"}
      role="region"
      aria-roledescription="carrusel"
      aria-label="Proyectos de cocinas"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          paginate(1);
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          paginate(-1);
        }
      }}
      onMouseEnter={() => {
        if (window.matchMedia("(hover: hover)").matches) setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#121212] shadow-[0_40px_90px_rgba(0,0,0,0.55)]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={slide.src}
            custom={direction}
            variants={reduce ? undefined : slideVariants}
            initial={reduce ? { opacity: 0 } : "enter"}
            animate={reduce ? { opacity: 1 } : "center"}
            exit={reduce ? { opacity: 0 } : "exit"}
            transition={
              reduce
                ? { duration: 0.2 }
                : {
                    x: { type: "spring", stiffness: 250, damping: 30, mass: 0.84 },
                    scale: { type: "spring", stiffness: 250, damping: 30, mass: 0.84 },
                  }
            }
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => {
              swipeStart.current = null;
            }}
            className="absolute inset-0 cursor-grab touch-pan-y overflow-hidden active:cursor-grabbing"
          >
            <motion.div
              className="absolute inset-0 will-change-transform"
              initial={{ scale: 1 }}
              animate={{ scale: reduce ? 1 : 1.1 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: DURATION_MS / 1000, ease: "linear" }
              }
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                preload={index === 0}
                sizes="(max-width: 1024px) 92vw, 680px"
                className={`object-cover ${slide.position}`}
                draggable={false}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-black/55 to-transparent" />

        <button
          type="button"
          aria-label="Foto anterior"
          onClick={() => paginate(-1)}
          className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#121212]/70 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-md transition-transform duration-200 hover:bg-[#121212]/85 active:scale-[0.98]"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
        </button>

        <button
          type="button"
          aria-label="Foto siguiente"
          onClick={() => paginate(1)}
          className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#121212]/70 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-md transition-transform duration-200 hover:bg-[#121212]/85 active:scale-[0.98]"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
        </button>

        <div className="absolute inset-x-3 bottom-3 z-30 flex items-center gap-2.5 sm:inset-x-4 sm:bottom-4">
          <div className="flex min-w-0 flex-1 items-center gap-1.5">
            {SLIDES.map((item, itemIndex) => {
              const active = itemIndex === index;
              return (
                <button
                  key={item.src}
                  type="button"
                  aria-label={`Ir a la foto ${itemIndex + 1}`}
                  aria-current={active ? "true" : undefined}
                  onClick={() => goTo(itemIndex)}
                  className="relative h-11 min-w-0 flex-1"
                >
                  <span className="absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 overflow-hidden rounded-full bg-white/35">
                    {active && !reduce ? (
                      <span
                        key={`${item.src}-${renderGen}`}
                        className="hero-slide-progress absolute inset-0 origin-left bg-white"
                        style={{ animationDuration: `${DURATION_MS}ms` }}
                        onAnimationEnd={() => {
                          if (generation.current !== renderGen) return;
                          paginate(1);
                        }}
                      />
                    ) : null}
                    {active && reduce ? (
                      <span className="absolute inset-0 bg-white" />
                    ) : null}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            aria-label={userPaused ? "Reanudar carrusel" : "Pausar carrusel"}
            aria-pressed={userPaused}
            onClick={() => setUserPaused((current) => !current)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-[#121212]/70 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-md transition-transform duration-200 hover:bg-[#121212]/85 active:scale-[0.98]"
          >
            {userPaused ? (
              <Play className="h-4 w-4" strokeWidth={1.75} />
            ) : (
              <Pause className="h-4 w-4" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Foto {index + 1} de {SLIDES.length}. {slide.alt}
      </p>
    </div>
  );
}
