import { scoreLead, getAnswerLabel, type LeadFormData, type LeadScore } from "@/lib/leadScore";

const BUSINESS_EMAIL = "contacto@kitchensolution.cl";
const WHATSAPP_URL = "https://wa.me/56995382703";
const DEFAULT_SITE_URL = "https://kitchensolution.cl";

function isValidLead(data: unknown): data is LeadFormData {
  if (!data || typeof data !== "object") return false;

  const lead = data as Record<string, unknown>;
  return (
    typeof lead.fullName === "string" && lead.fullName.trim().length > 1 &&
    typeof lead.email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email) &&
    typeof lead.whatsapp === "string" && lead.whatsapp.trim().length > 6 &&
    typeof lead.projectStage === "string" && Boolean(lead.projectStage) &&
    typeof lead.kitchenSize === "string" && Boolean(lead.kitchenSize) &&
    typeof lead.ownsProperty === "string" && Boolean(lead.ownsProperty) &&
    typeof lead.budget === "string" && Boolean(lead.budget) &&
    typeof lead.timeline === "string" && Boolean(lead.timeline) &&
    typeof lead.quality === "string" && Boolean(lead.quality) &&
    lead.dataConsent === true
  );
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character] ?? character,
  );
}

function answerRows(data: LeadFormData) {
  const answers = [
    ["Nombre", data.fullName],
    ["Email", data.email],
    ["WhatsApp", data.whatsapp],
    ["Etapa del proyecto", getAnswerLabel("projectStage", data.projectStage)],
    ["Tipo de cocina", getAnswerLabel("kitchenSize", data.kitchenSize)],
    ["Propiedad", getAnswerLabel("ownsProperty", data.ownsProperty)],
    ["Presupuesto", getAnswerLabel("budget", data.budget)],
    ["Inicio", getAnswerLabel("timeline", data.timeline)],
    ["Nivel de acabado", getAnswerLabel("quality", data.quality)],
  ];

  return answers
    .map(
      ([label, value]) => `<tr><td style="padding:12px 0;border-bottom:1px solid #e6e1d6;color:#7c786f;font-size:13px;width:38%">${label}</td><td style="padding:12px 0;border-bottom:1px solid #e6e1d6;color:#121212;font-size:14px;font-weight:600">${escapeHtml(value)}</td></tr>`,
    )
    .join("");
}

function emailLayout(content: string, siteUrl: string) {
  const logoUrl = `${siteUrl}/images/logo-kitchen-solution.png`;
  return `<!doctype html><html lang="es"><body style="margin:0;background:#f7f4ee;color:#121212;font-family:Arial,Helvetica,sans-serif"><div style="max-width:620px;margin:0 auto;padding:32px 16px"><div style="background:#121212;padding:24px 28px;text-align:center"><img src="${logoUrl}" alt="Kitchen Solutions" width="190" style="max-width:100%;height:auto"><div style="margin-top:14px;color:#c4a574;font-size:11px;letter-spacing:2px;text-transform:uppercase">Diseño, fabricación e instalación</div></div><div style="background:#fcfaf7;padding:32px 28px">${content}</div><div style="background:#121212;padding:22px 28px;color:#fff;font-size:13px;line-height:1.7"><strong style="color:#c4a574">Kitchen Solutions</strong><br><a href="mailto:${BUSINESS_EMAIL}" style="color:#fff">${BUSINESS_EMAIL}</a><br><a href="${WHATSAPP_URL}" style="color:#b8e0b0">WhatsApp: +56 9 9538 2703</a></div></div></body></html>`;
}

function customerEmail(data: LeadFormData, siteUrl: string) {
  return emailLayout(`<p style="margin:0;color:#968a64;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase">Solicitud recibida</p><h1 style="margin:16px 0 12px;font-family:Georgia,serif;font-size:30px;font-weight:500">Gracias, ${escapeHtml(data.fullName)}</h1><p style="margin:0;color:#5f5b54;font-size:16px;line-height:1.7">Recibimos la información de tu proyecto. Uno de nuestros diseñadores te contactará pronto para conversar sobre tu cocina.</p><div style="margin:26px 0;padding:18px 20px;background:#f7f4ee;border-left:4px solid #6b705c;color:#45433e;font-size:14px;line-height:1.6">También puedes escribirnos directamente por WhatsApp para continuar la conversación.</div><a href="${WHATSAPP_URL}" style="display:inline-block;background:#65a30d;color:#fff;text-decoration:none;padding:13px 18px;border-radius:999px;font-size:14px;font-weight:bold">Escribir por WhatsApp</a><p style="margin:28px 0 0;color:#7c786f;font-size:13px">Este correo confirma la recepción de tu solicitud en <a href="${siteUrl}" style="color:#6b705c">kitchensolution.cl</a>.</p>`, siteUrl);
}

const TIER_COLORS: Record<LeadScore["tier"], string> = {
  hot: "#16a34a",
  warm: "#ca8a04",
  cold: "#dc2626",
};

function businessEmail(data: LeadFormData, siteUrl: string) {
  const score = scoreLead(data);
  const tierColor = TIER_COLORS[score.tier];
  return emailLayout(`<p style="margin:0;color:#968a64;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase">Nuevo contacto web</p><h1 style="margin:16px 0 8px;font-family:Georgia,serif;font-size:30px;font-weight:500">${escapeHtml(data.fullName)}</h1><p style="margin:0 0 24px;color:#5f5b54;font-size:15px"><span style="display:inline-block;width:10px;height:10px;border-radius:999px;background:${tierColor};margin-right:6px"></span><strong style="color:${tierColor}">${score.tierLabel}</strong> · ${score.total}/${score.max} puntos</p><table role="presentation" style="width:100%;border-collapse:collapse">${answerRows(data)}</table><div style="margin-top:26px"><a href="mailto:${escapeHtml(data.email)}" style="display:inline-block;background:#65a30d;color:#fff;text-decoration:none;padding:12px 17px;border-radius:999px;font-size:13px;font-weight:bold">Responder por correo</a>&nbsp; <a href="${WHATSAPP_URL}" style="display:inline-block;background:#6b705c;color:#fff;text-decoration:none;padding:12px 17px;border-radius:999px;font-size:13px;font-weight:bold">Abrir WhatsApp</a></div>`, siteUrl);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEADS_FROM_EMAIL;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;

  if (!apiKey || !from) {
    return Response.json({ error: "El servicio de correo no está configurado." }, { status: 503 });
  }

  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  if (!isValidLead(data)) {
    return Response.json({ error: "Completa todos los campos requeridos." }, { status: 400 });
  }

  const lead = data;
  const score = scoreLead(lead);
  const resendResponse = await fetch("https://api.resend.com/emails/batch", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify([
      { from, to: [BUSINESS_EMAIL], reply_to: lead.email, subject: `[${score.tierLabel}] Nuevo lead - ${lead.fullName}`, html: businessEmail(lead, siteUrl) },
      { from, to: [lead.email], subject: "Recibimos tu solicitud | Kitchen Solutions", html: customerEmail(lead, siteUrl) },
    ]),
  });

  if (!resendResponse.ok) {
    console.error("Resend error", await resendResponse.text());
    return Response.json({ error: "No fue posible enviar los correos." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
