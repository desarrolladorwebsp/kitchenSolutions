"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, X } from "lucide-react";

const galleryProjects = [
  { title: "Línea clara", subtitle: "Minimalista", src: "/images/gallery/image-01.png" },
  { title: "Materiales nobles", subtitle: "Cálido", src: "/images/gallery/image-02.png" },
  { title: "Espacio vivo", subtitle: "Funcional", src: "/images/gallery/image-03.png" },
  { title: "Luz moderna", subtitle: "Contemporáneo", src: "/images/gallery/image-04.png" },
  { title: "Elegancia atemporal", subtitle: "Premium", src: "/images/gallery/image-05.png" },
  { title: "Orden y estilo", subtitle: "Refinamiento", src: "/images/gallery/image-06.png" },
  { title: "Calidez natural", subtitle: "Acogedor", src: "/images/gallery/image-07.png" },
  { title: "Diseño pensado", subtitle: "Residencial", src: "/images/gallery/image-08.png" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ProjectsShowcase() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryProjects)[number] | null
  >(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const swipeStartX = useRef<number | null>(null);

  const mobileProject = galleryProjects[mobileIndex];

  const nextMobileImage = () => {
    setMobileIndex((prev) => (prev + 1) % galleryProjects.length);
  };

  const prevMobileImage = () => {
    setMobileIndex(
      (prev) => (prev - 1 + galleryProjects.length) % galleryProjects.length,
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#f7f4ee]">
      <div className="absolute inset-0 bg-[url('/images/bg/bg-vertical.png')] bg-cover bg-center bg-no-repeat md:bg-[url('/images/bg/bg-image.png')]" />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 py-14 sm:px-6 sm:py-18 lg:px-12 lg:py-24">
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
            className="inline-flex items-center gap-2 rounded-full border border-[#c4b896] bg-white/60 px-4 py-[7px] text-[10px] font-medium uppercase tracking-[0.2em] text-[#8f9a68] shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#c4a574]" />
            Cocinas creadas con estilo
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-5 font-serif text-[30px] font-medium leading-[1.15] text-[#2a2a2a] sm:text-[40px] lg:text-[48px]"
          >
            Diseño moderno para vivir mejor cada día
          </motion.h2>
        </motion.div>

        <div className="mt-8 sm:mt-10">
          <div className="block md:hidden">
            <div
              className="relative overflow-hidden rounded-[24px] border border-[#e9e1d7] bg-white/60 shadow-[0_18px_50px_rgba(34,34,34,0.06)]"
              onPointerDown={(event) => {
                swipeStartX.current = event.clientX;
              }}
              onPointerUp={(event) => {
                const swipeOffset = event.clientX - (swipeStartX.current ?? event.clientX);
                swipeStartX.current = null;

                if (swipeOffset <= -40) {
                  nextMobileImage();
                } else if (swipeOffset >= 40) {
                  prevMobileImage();
                }
              }}
              onPointerLeave={() => {
                swipeStartX.current = null;
              }}
            >
              <motion.div
                key={mobileProject.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.28 }}
                className="relative h-[380px] overflow-hidden"
              >
                <div
                  onClick={() => setSelectedImage(mobileProject)}
                  className="relative h-full w-full cursor-pointer"
                >
                  <Image
                    src={mobileProject.src}
                    alt={mobileProject.title}
                    fill
                    sizes="100vw"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 via-[#1a1a1a]/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <span className="mb-2 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm">
                      {mobileProject.subtitle}
                    </span>
                    <h3 className="max-w-[14ch] text-[30px] font-medium leading-[1.05] text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.35)]">
                      {mobileProject.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2" aria-label="Navegación de imágenes móviles">
              {galleryProjects.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  aria-label={`Ver imagen ${index + 1}`}
                  aria-current={index === mobileIndex ? "true" : undefined}
                  onClick={() => setMobileIndex(index)}
                  className={`h-2.4 rounded-full transition-all duration-200 ${
                    index === mobileIndex ? "w-7 bg-[#6b705c]" : "w-2.4 bg-[#d8d2c6]"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="hidden gap-3 sm:gap-4 md:grid md:grid-cols-2 xl:grid-cols-4">
            {galleryProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative cursor-pointer overflow-hidden rounded-[24px] border border-[#e9e1d7] bg-white/60 shadow-[0_18px_50px_rgba(34,34,34,0.06)]"
                onClick={() => setSelectedImage(project)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedImage(project);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Abrir imagen de ${project.title}`}
              >
                <div className="relative h-[340px] overflow-hidden sm:h-[420px] xl:h-[500px]">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 via-[#1a1a1a]/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <span className="mb-2 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm">
                      {project.subtitle}
                    </span>
                    <h3 className="max-w-[16ch] text-[22px] font-medium leading-[1.08] text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.35)] sm:text-[26px]">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111]/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-[#171717] shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
              <button
                type="button"
                aria-label="Cerrar imagen"
                onClick={() => setSelectedImage(null)}
                className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white transition hover:bg-black/50"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-[#111111]/90 px-5 py-4 text-white">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#d4d1c8]">
                    {selectedImage.subtitle}
                  </p>
                  <h3 className="mt-1 text-xl font-medium sm:text-2xl">
                    {selectedImage.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-9 flex justify-center">
          <button
            type="button"
            onClick={() =>
              document.getElementById("formulario-proyecto")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="group inline-flex items-center gap-3 rounded-full bg-[#65a30d] px-5 py-3 text-[14px] font-medium text-white shadow-[0_10px_30px_rgba(101,163,13,0.32)] transition-all duration-200 hover:scale-[1.02] hover:bg-[#4d7c0f] active:scale-[0.98] sm:px-6 sm:text-[15px]"
          >
            <Sparkles className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]" />
            Agenda una visita
            <ArrowRight className="h-[16px] w-[16px] transition-transform duration-200 group-hover:translate-x-0.5 sm:h-[18px] sm:w-[18px]" />
          </button>
        </div>
      </div>
    </section>
  );
}
