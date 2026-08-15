"use client";

import { useEffect, useMemo, useState, type ComponentType, type FormEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  CalendarDays,
  Check,
  Compass,
  HelpCircle,
  Home,
  LayoutGrid,
  Mail,
  Maximize2,
  MessageCircle,
  Rocket,
  Scale,
  Send,
  Sparkles,
  User,
} from "lucide-react";
import {
  getAnswerLabel,
  scoreLead,
  type LeadFormData,
} from "@/lib/leadScore";

const TOTAL_STEPS = 4;
const KITCHEN_IMAGE =
  "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2400&q=80";

type FormData = LeadFormData;

const INITIAL_DATA: FormData = {
  fullName: "",
  email: "",
  whatsapp: "",
  projectStage: "",
  kitchenSize: "",
  ownsProperty: "",
  budget: "",
  timeline: "",
  quality: "",
  dataConsent: false,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PROJECT_STAGES = [
  {
    value: "exploring",
    label: "Estoy explorando ideas y estilos para mi cocina de manera seria.",
    icon: Compass,
  },
  {
    value: "comparing",
    label: "Ya tengo claro lo que quiero y estoy comparando opciones.",
    icon: Scale,
  },
  {
    value: "ready",
    label: "Quiero avanzar con mi proyecto y tomar una decisión pronto.",
    icon: Rocket,
  },
];

const KITCHEN_SIZES = [
  {
    value: "small",
    label: "Cocina pequeña (departamento o espacio reducido)",
    icon: LayoutGrid,
  },
  {
    value: "medium",
    label: "Cocina mediana (hogar promedio)",
    icon: Sparkles,
  },
  {
    value: "large",
    label: "Cocina grande (espacios amplios o concepto abierto)",
    icon: Maximize2,
  },
  {
    value: "unsure",
    label: "No estoy seguro, necesito evaluación",
    icon: HelpCircle,
  },
];

const BUDGET_OPTIONS = [
  { value: "2-5", label: "Entre $2.000.000 a $5.000.000" },
  { value: "5-8", label: "Entre $5.000.000 a $8.000.000" },
  { value: "8-12", label: "Entre $8.000.000 a $12.000.000" },
  { value: "12+", label: "Más de $12.000.000" },
  { value: "in-person", label: "Prefiero hablarlo en persona" },
];

const TIMELINE_OPTIONS = [
  { value: "this-week", label: "Esta semana", icon: Rocket },
  { value: "this-month", label: "Este mes", icon: CalendarClock },
  { value: "3-months", label: "En 3 meses", icon: CalendarDays },
];

const PROPERTY_OPTIONS = [
  { value: "yes", label: "Sí, la propiedad es mía", icon: Home },
  { value: "no", label: "No, aún no / es de un tercero", icon: HelpCircle },
];

const QUALITY_OPTIONS = [
  {
    value: "premium",
    label: "Busco calidad premium y materiales de alta gama",
    icon: Sparkles,
  },
  {
    value: "economy",
    label: "Busco la opción más económica posible",
    icon: Scale,
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 48 : -48,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -48 : 48,
    opacity: 0,
  }),
};

export default function KitchenLeadForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);

  const isSuccess = step > TOTAL_STEPS;

  useEffect(() => {
    if (!isSuccess) return;
    const timer = window.setTimeout(() => {
      document.getElementById("lead-interno")?.scrollIntoView({ behavior: "smooth" });
    }, 350);
    return () => window.clearTimeout(timer);
  }, [isSuccess]);

  const canContinue = useMemo(() => {
    switch (step) {
      case 1:
        return (
          formData.fullName.trim().length > 1 &&
          EMAIL_PATTERN.test(formData.email.trim()) &&
          formData.whatsapp.trim().length > 6
        );
      case 2:
        return Boolean(formData.projectStage);
      case 3:
        return Boolean(formData.kitchenSize && formData.ownsProperty);
      case 4:
        return Boolean(
          formData.budget && formData.timeline && formData.quality && formData.dataConsent,
        );
      default:
        return false;
    }
  }, [formData, step]);

  const updateField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const goTo = (nextStep: number) => {
    setDirection(nextStep > step ? 1 : -1);
    setStep(nextStep);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canContinue || isSuccess) return;
    if (step === TOTAL_STEPS) {
      goTo(5);
      return;
    }
    goTo(step + 1);
  };

  return (
    <>
    <section
      id="formulario-proyecto"
      className="relative isolate min-h-dvh scroll-mt-4 overflow-hidden"
    >
      <Image
        src={KITCHEN_IMAGE}
        alt="Cocina moderna premium con acabados elegantes"
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-2xl items-center px-4 py-10 sm:px-6">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full overflow-hidden rounded-2xl border border-[#e6e1d6] bg-[#fcfaf7]/95 shadow-[0_24px_80px_rgba(18,18,18,0.18)] backdrop-blur-sm"
        >
          <div className="h-1.5 bg-[#ece8df]">
            <motion.div
              className="h-full origin-left bg-[#6b705c]"
              initial={false}
              animate={{ width: `${isSuccess ? 100 : (step / TOTAL_STEPS) * 100}%` }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-6 p-6 sm:p-8">
            {!isSuccess && (
              <div className="space-y-3">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#968a64]">
                  Paso {step} de {TOTAL_STEPS}
                </p>
                <h2 className="font-serif text-2xl font-medium leading-snug tracking-tight text-[#121212] sm:text-[1.7rem]">
                  Aprovecha esta oportunidad y rellena el formulario para comenzar tu proyecto
                </h2>
                <div className="h-px w-full bg-gradient-to-r from-[#968a64]/50 via-[#e6e1d6] to-transparent" />
              </div>
            )}

            <div className="relative min-h-[280px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="space-y-5"
                >
                  {step === 1 && (
                    <StepContact formData={formData} updateField={updateField} />
                  )}
                  {step === 2 && (
                    <StepOptions
                      question="¿En qué etapa estás hoy con tu proyecto de cocina?"
                      options={PROJECT_STAGES}
                      value={formData.projectStage}
                      onChange={(value) => updateField("projectStage", value)}
                    />
                  )}
                  {step === 3 && (
                    <div className="space-y-7">
                      <StepOptions
                        question="¿Qué tipo de proyecto estás evaluando?"
                        options={KITCHEN_SIZES}
                        value={formData.kitchenSize}
                        onChange={(value) => updateField("kitchenSize", value)}
                      />
                      <StepOptions
                        question="¿La propiedad donde se instalará la cocina es tuya?"
                        options={PROPERTY_OPTIONS}
                        value={formData.ownsProperty}
                        onChange={(value) => updateField("ownsProperty", value)}
                      />
                    </div>
                  )}
                  {step === 4 && (
                    <StepQualification
                      formData={formData}
                      updateField={updateField}
                    />
                  )}
                  {isSuccess && <StepSuccess />}
                </motion.div>
              </AnimatePresence>
            </div>

            {!isSuccess && step === TOTAL_STEPS && (
              <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-[#e6e1d6] bg-white p-4">
                <input
                  type="checkbox"
                  checked={Boolean(formData.dataConsent)}
                  onChange={(e) => updateField("dataConsent", e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#6b705c]"
                />
                <span className="text-xs leading-relaxed text-neutral-600">
                  Autorizo el tratamiento de mis datos personales (nombre, correo, WhatsApp y
                  respuestas de este formulario) para ser contactado respecto de mi proyecto de
                  cocina, de conformidad con la Ley N° 19.628 sobre Protección de la Vida Privada
                  y la Ley N° 21.719 sobre Protección de Datos Personales de Chile. Podré revocar
                  este consentimiento en cualquier momento.
                </span>
              </label>
            )}

            {!isSuccess && (
              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => goTo(step - 1)}
                  disabled={step === 1}
                  className="inline-flex items-center gap-2 rounded-full border border-[#d8d2c6] bg-white px-5 py-2.5 text-sm font-medium text-[#121212] transition-all duration-200 hover:border-[#968a64] hover:bg-[#fcfaf7] hover:scale-[1.02] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-30"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Atrás
                </button>

                <button
                  type="submit"
                  disabled={!canContinue}
                  className="inline-flex items-center gap-2 rounded-full bg-[#65a30d] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(101,163,13,0.32)] transition-all duration-200 hover:scale-[1.03] hover:bg-[#4d7c0f] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40"
                >
                  {step === TOTAL_STEPS ? "Enviar" : "Continuar"}
                  {step === TOTAL_STEPS ? (
                    <Send className="h-4 w-4" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </button>
              </div>
            )}
          </div>
        </motion.form>
      </div>
    </section>

    {isSuccess && (
      <section id="lead-interno" className="bg-[#121212] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <InternalLeadPreview formData={formData} />
        </div>
      </section>
    )}
    </>
  );
}

function StepContact({
  formData,
  updateField,
}: {
  formData: FormData;
  updateField: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
}) {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="fullName" className="block text-sm font-medium text-[#121212]">
          Nombre completo
        </label>
        <div className="relative">
          <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#968a64]" />
          <input
            id="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="Ej. María González"
            value={formData.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            className="w-full rounded-2xl border border-[#e6e1d6] bg-white py-3.5 pl-11 pr-4 text-[#121212] outline-none transition placeholder:text-neutral-400 focus:border-[#6b705c] focus:ring-2 focus:ring-[#6b705c]/20"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-[#121212]">
          Email
        </label>
        <div className="relative">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#968a64]" />
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Ej. maria@correo.com"
            value={formData.email ?? ""}
            onChange={(e) => updateField("email", e.target.value)}
            className="w-full rounded-2xl border border-[#e6e1d6] bg-white py-3.5 pl-11 pr-4 text-[#121212] outline-none transition placeholder:text-neutral-400 focus:border-[#6b705c] focus:ring-2 focus:ring-[#6b705c]/20"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="whatsapp" className="block text-sm font-medium text-[#121212]">
          WhatsApp
        </label>
        <div className="relative">
          <MessageCircle className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#968a64]" />
          <input
            id="whatsapp"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+56 9 1234 5678"
            value={formData.whatsapp}
            onChange={(e) => updateField("whatsapp", e.target.value)}
            className="w-full rounded-2xl border border-[#e6e1d6] bg-white py-3.5 pl-11 pr-4 text-[#121212] outline-none transition placeholder:text-neutral-400 focus:border-[#6b705c] focus:ring-2 focus:ring-[#6b705c]/20"
          />
        </div>
        <p className="text-xs text-[#968a64]">Asegúrate de escribirlo correctamente</p>
      </div>
    </div>
  );
}

function StepOptions({
  question,
  options,
  value,
  onChange,
}: {
  question: string;
  options: { value: string; label: string; icon?: ComponentType<{ className?: string }> }[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium leading-snug text-[#121212]">{question}</h2>
      <div className="grid gap-3">
        {options.map((option) => {
          const selected = value === option.value;
          const Icon = option.icon;
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(option.value)}
              className={`group flex w-full items-start gap-3 rounded-2xl border px-4 py-4 text-left transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] ${
                selected
                  ? "border-[#6b705c] bg-[#6b705c]/10 shadow-[0_0_0_1px_rgba(107,112,92,0.2)]"
                  : "border-[#e6e1d6] bg-white hover:border-[#968a64]/60 hover:bg-[#fcfaf7]"
              }`}
            >
              {Icon && (
                <span
                  className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition ${
                    selected
                      ? "border-[#6b705c]/40 bg-[#6b705c]/15 text-[#6b705c]"
                      : "border-[#e6e1d6] bg-[#fcfaf7] text-[#968a64] group-hover:text-[#6b705c]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>
              )}
              <span className="text-sm leading-relaxed text-[#121212]">{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepQualification({
  formData,
  updateField,
}: {
  formData: FormData;
  updateField: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
}) {
  return (
    <div className="space-y-7">
      <StepOptions
        question="Pensando en una cocina moderna, funcional y completamente personalizada, con un proceso organizado y una instalación rápida, ¿Qué rango de inversión tienes considerado para tu proyecto?"
        options={BUDGET_OPTIONS}
        value={formData.budget}
        onChange={(value) => updateField("budget", value)}
      />
      <StepOptions
        question="¿Cuándo deseas comenzar?"
        options={TIMELINE_OPTIONS}
        value={formData.timeline}
        onChange={(value) => updateField("timeline", value)}
      />
      <StepOptions
        question="¿Qué nivel de acabado buscas para tu cocina?"
        options={QUALITY_OPTIONS}
        value={formData.quality}
        onChange={(value) => updateField("quality", value)}
      />
    </div>
  );
}

const TIER_DOT = {
  hot: "bg-[#2f7a3a]",
  warm: "bg-[#e2b336]",
  cold: "bg-[#c23b3b]",
} as const;

function StepSuccess() {
  return (
    <div className="flex flex-col items-center py-8 text-center sm:py-12">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#b8e0b0] ring-1 ring-[#6b705c]/20"
      >
        <motion.div
          initial={{ scale: 0, rotate: -50 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.18, type: "spring", stiffness: 300, damping: 16 }}
        >
          <Check className="h-10 w-10 text-[#2f7a3a]" strokeWidth={2.75} />
        </motion.div>
      </motion.div>
      <h2 className="font-serif text-2xl font-medium text-[#121212] sm:text-3xl">
        ¡Solicitud recibida con éxito!
      </h2>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base">
        Uno de nuestros diseñadores expertos en cocinas te contactará por WhatsApp muy pronto para revisar los detalles de tu proyecto.
      </p>
    </div>
  );
}

function InternalLeadPreview({ formData }: { formData: FormData }) {
  const score = scoreLead(formData);

  return (
    <div className="rounded-3xl border border-white/10 bg-[#fcfaf7] p-6 sm:p-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#968a64]">
        Vista interna · modo prueba
      </p>
      <p className="mt-1 text-sm text-neutral-500">
        Esto es lo que llegaría a nuestro correo. El cliente no ve esta sección.
      </p>

      <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#ece8df] bg-white px-4 py-4">
        <span
          className={`mt-1 h-3.5 w-3.5 shrink-0 rounded-full ${TIER_DOT[score.tier]}`}
          aria-hidden
        />
        <div>
          <p className="text-base font-semibold text-[#121212]">
            {score.tierLabel} · {score.total}/{score.max} pts
          </p>
          <p className="mt-0.5 text-sm text-neutral-600">{score.action}</p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Ponderación
        </p>
        {score.breakdown.map((item) => (
          <div
            key={item.label}
            className="flex items-start justify-between gap-4 border-b border-[#ece8df] py-3 last:border-b-0"
          >
            <div>
              <p className="text-sm font-medium text-[#121212]">{item.label}</p>
              <p className="text-xs text-neutral-500">{item.answer}</p>
            </div>
            <p className="shrink-0 text-sm font-semibold text-[#6b705c]">
              +{item.points}/{item.max}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-2 rounded-2xl bg-[#121212] px-5 py-5 text-sm text-[#fcfaf7]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c4b896]">
          Correo interno
        </p>
        <p>
          <span className="text-[#c4b896]">Asunto:</span> [{score.tierLabel}] Nuevo lead —{" "}
          {formData.fullName}
        </p>
        <p>
          <span className="text-[#c4b896]">Nombre:</span> {formData.fullName}
        </p>
        <p>
          <span className="text-[#c4b896]">Email:</span> {formData.email}
        </p>
        <p>
          <span className="text-[#c4b896]">WhatsApp:</span> {formData.whatsapp}
        </p>
        <p>
          <span className="text-[#c4b896]">Consentimiento de datos:</span>{" "}
          {formData.dataConsent ? "Autorizado (Ley 19.628 / 21.719)" : "No autorizado"}
        </p>
        <p>
          <span className="text-[#c4b896]">Etapa:</span>{" "}
          {getAnswerLabel("projectStage", formData.projectStage)}
        </p>
        <p>
          <span className="text-[#c4b896]">Tipo de cocina:</span>{" "}
          {getAnswerLabel("kitchenSize", formData.kitchenSize)}
        </p>
        <p>
          <span className="text-[#c4b896]">Propiedad:</span>{" "}
          {getAnswerLabel("ownsProperty", formData.ownsProperty)}
        </p>
        <p>
          <span className="text-[#c4b896]">Presupuesto:</span>{" "}
          {getAnswerLabel("budget", formData.budget)}
        </p>
        <p>
          <span className="text-[#c4b896]">Inicio:</span>{" "}
          {getAnswerLabel("timeline", formData.timeline)}
        </p>
        <p>
          <span className="text-[#c4b896]">Calidad:</span>{" "}
          {getAnswerLabel("quality", formData.quality)}
        </p>
      </div>
    </div>
  );
}
