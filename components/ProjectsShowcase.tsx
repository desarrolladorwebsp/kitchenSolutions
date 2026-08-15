"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

const projects = [
  {
    type: "Cocina contemporánea",
    title: "Línea clara y cálida",
    mediaType: "image",
    src: "/images/kitchen-01.jpeg",
  },
  {
    type: "Cocina premium",
    title: "Materiales nobles",
    mediaType: "image",
    src: "/images/18ef83a0-48ff-41d8-bd20-0d9250d3d074.jpeg",
  },
  {
    type: "Cocina funcional",
    title: "Espacio pensado para vivir",
    mediaType: "video",
    src: "/videos/kitchen-01.mp4",
  },
  {
    type: "Cocina moderna",
    title: "Luz, orden y diseño",
    mediaType: "image",
    src: "/images/6c7ec718-35a8-4ed6-8e8b-48f6c4742db8.jpeg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const SWIPE_OFFSET = 50;

export default function ProjectsShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swipeStartX = useRef<number | null>(null);
  const visibleProjects = [
    projects[currentIndex],
    projects[(currentIndex + 1) % projects.length],
    projects[(currentIndex + 2) % projects.length],
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="relative overflow-hidden bg-[#f7f4ee]">
      <div className="absolute inset-0 bg-[url('/images/bg/bg-vertical.png')] bg-cover bg-center bg-no-repeat md:bg-[url('/images/bg/bg-image.png')]" />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.08 },
            },
          }}
          className="mx-auto max-w-[760px] text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[#c4b896] bg-white/40 px-4 py-[7px] text-[11px] font-medium uppercase tracking-[0.18em] text-[#8f9a68]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#c4a574]" />
            Cocinas creadas con estilo
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif mt-6 text-[36px] font-medium leading-[1.2] text-[#2a2a2a] sm:text-[42px] lg:text-[48px]"
          >
            Diseños que elevan la experiencia de cocinar
          </motion.h2>
        </motion.div>

        <div className="mt-10 hidden items-center justify-end gap-3 md:flex">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Proyecto anterior"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9d0c3] bg-white/80 text-[#2a2a2a] shadow-sm transition hover:border-[#b8b09c] hover:bg-white"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Siguiente proyecto"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9d0c3] bg-white/80 text-[#2a2a2a] shadow-sm transition hover:border-[#b8b09c] hover:bg-white"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 md:hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={projects[currentIndex].title}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onPointerDown={(event) => {
                swipeStartX.current = event.clientX;
              }}
              onPointerUp={(event) => {
                const swipeOffset = event.clientX - (swipeStartX.current ?? event.clientX);
                swipeStartX.current = null;

                if (swipeOffset <= -SWIPE_OFFSET) {
                  nextSlide();
                } else if (swipeOffset >= SWIPE_OFFSET) {
                  prevSlide();
                }
              }}
              onPointerCancel={() => {
                swipeStartX.current = null;
              }}
              className="overflow-hidden rounded-2xl border border-[#e6e1d6] bg-white/60 shadow-[0_18px_50px_rgba(34,34,34,0.06)] backdrop-blur-sm"
            >
              <div className="p-4 pb-0">
                <ProjectMedia project={projects[currentIndex]} sizes="100vw" />
              </div>
              <ProjectDetails project={projects[currentIndex]} />
            </motion.article>
          </AnimatePresence>
          <div className="mt-4 flex justify-center gap-2" aria-label="Navegación de proyectos">
            {projects.map((project, index) => {
              const selected = index === currentIndex;
              return (
                <button
                  key={project.title}
                  type="button"
                  aria-label={`Ver proyecto ${index + 1}`}
                  aria-current={selected ? "true" : undefined}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-200 ${
                    selected ? "w-6 bg-[#6b705c]" : "w-2.5 bg-[#d8d2c6] hover:bg-[#968a64]"
                  }`}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-8 hidden overflow-hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
            >
              {visibleProjects.map((project, index) => (
                <motion.article
                  key={`${project.title}-${index}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group overflow-hidden rounded-2xl border border-[#e6e1d6] bg-white/60 shadow-[0_18px_50px_rgba(34,34,34,0.06)] backdrop-blur-sm"
                >
                  <div className="p-4 pb-0">
                    <ProjectMedia
                      project={project}
                      sizes="(max-width: 1280px) 50vw, 33vw"
                    />
                  </div>
                  <ProjectDetails project={project} />
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center">
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
        </div>
      </div>
    </section>
  );
}

function ProjectMedia({
  project,
  sizes,
}: {
  project: (typeof projects)[number];
  sizes: string;
}) {
  return (
    <div className="relative h-[360px] overflow-hidden rounded-[20px] border border-[#e7dfd6] bg-[#f3efe9]">
      {project.mediaType === "video" ? (
        <video
          src={project.src}
          muted
          loop
          autoPlay
          playsInline
          className="h-full w-full object-cover"
        />
      ) : (
        <Image src={project.src} alt={project.title} fill sizes={sizes} className="object-cover" />
      )}
    </div>
  );
}

function ProjectDetails({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="p-6">
      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#8f9a68]">
        {project.type}
      </span>
      <h3 className="mt-3 text-[24px] font-medium leading-tight text-[#2a2a2a]">
        {project.title}
      </h3>
    </div>
  );
}
