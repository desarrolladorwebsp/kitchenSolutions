export type LeadFormData = {
  fullName: string;
  email: string;
  whatsapp: string;
  projectStage: string;
  kitchenSize: string;
  ownsProperty: string;
  budget: string;
  timeline: string;
  quality: string;
  dataConsent: boolean;
};

export type LeadTier = "hot" | "warm" | "cold";

export type ScoreBreakdown = {
  label: string;
  answer: string;
  points: number;
  max: number;
};

export type LeadScore = {
  total: number;
  max: number;
  tier: LeadTier;
  tierLabel: string;
  action: string;
  breakdown: ScoreBreakdown[];
};

const LABELS: Record<string, Record<string, string>> = {
  projectStage: {
    exploring: "Está explorando ideas de manera seria",
    comparing: "Ya tiene claro lo que quiere y compara opciones",
    ready: "Quiere avanzar y tomar una decisión pronto",
  },
  kitchenSize: {
    small: "Cocina pequeña",
    medium: "Cocina mediana",
    large: "Cocina grande / concepto abierto",
    unsure: "No está seguro, necesita evaluación",
  },
  ownsProperty: {
    yes: "Sí, la propiedad es suya",
    no: "No / es de un tercero",
  },
  budget: {
    "2-5": "Entre $2.500.000 y $5.000.000",
    "5-8": "Entre $5.000.000 y $8.000.000",
    "8-12": "Entre $8.000.000 y $12.000.000",
    "12+": "Más de $12.000.000",
    "in-person": "Prefiere hablarlo en persona",
  },
  timeline: {
    "this-week": "Esta semana",
    "this-month": "Este mes",
    "3-months": "En 3 meses",
  },
  quality: {
    premium: "Busca calidad premium",
    economy: "Busca la opción más económica",
  },
};

function budgetPoints(value: string) {
  if (value === "12+" || value === "8-12") return 40;
  if (value === "5-8") return 35;
  if (value === "in-person") return 20;
  if (value === "2-5") return 10;
  return 0;
}

function timelinePoints(value: string) {
  if (value === "this-week" || value === "this-month") return 30;
  if (value === "3-months") return 10;
  return 0;
}

export function getAnswerLabel(field: keyof typeof LABELS, value: string) {
  return LABELS[field]?.[value] ?? (value || "—");
}

export function scoreLead(data: LeadFormData): LeadScore {
  const breakdown: ScoreBreakdown[] = [
    {
      label: "Presupuesto",
      answer: getAnswerLabel("budget", data.budget),
      points: budgetPoints(data.budget),
      max: 40,
    },
    {
      label: "Inicio del proyecto",
      answer: getAnswerLabel("timeline", data.timeline),
      points: timelinePoints(data.timeline),
      max: 30,
    },
    {
      label: "Propiedad propia",
      answer: getAnswerLabel("ownsProperty", data.ownsProperty),
      points: data.ownsProperty === "yes" ? 20 : 0,
      max: 20,
    },
    {
      label: "Nivel de calidad",
      answer: getAnswerLabel("quality", data.quality),
      points: data.quality === "premium" ? 10 : 0,
      max: 10,
    },
  ];

  const total = breakdown.reduce((sum, item) => sum + item.points, 0);
  const max = breakdown.reduce((sum, item) => sum + item.max, 0);

  const tier: LeadTier = total >= 70 ? "hot" : total >= 40 ? "warm" : "cold";

  const tierMeta = {
    hot: {
      tierLabel: "Cliente verde",
      action: "Priorizar: agendar visita o videollamada ahora.",
    },
    warm: {
      tierLabel: "Cliente amarillo",
      action: "Enviar información adicional y seguimiento comercial.",
    },
    cold: {
      tierLabel: "Cliente rojo",
      action: "No agendar aún. Dejar en campaña de nutrición.",
    },
  }[tier];

  return { total, max, tier, ...tierMeta, breakdown };
}
