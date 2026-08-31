import Image from "next/image";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

const COMPANY_URL = "https://kitchensolution.cl";
const LOGO_URL = "/images/logo-kitchen-solution.png";
const HABITISSIMO_URL = "/images/logo-habitissimo.png";
const KITCHEN_CENTER_URL = "/images/logo-kitchen-center.png";
const MERCADO_PAGO_URL = "/images/logo-mercado-pago.png";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#968a64]/30 bg-[#0d0d0d] text-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <a
              href={COMPANY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
              aria-label="Visitar Kitchen Solutions"
            >
              <Image
                src={LOGO_URL}
                alt="Kitchen Solutions"
                width={220}
                height={80}
                sizes="220px"
                className="h-auto w-[190px] rounded-xl object-contain sm:w-[220px]"
              />
            </a>
            <p className="mt-7 max-w-[510px] text-sm leading-relaxed text-white/70">
              Empresa presente en el mercado mobiliario desde 1999, con gran especialización en
              proyectos de cocina, baños y closets. Contamos con profesionales en diseño y
              fabricación, e integramos estilos modernos y funcionales a cada proyecto.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://web.facebook.com/profile.php?id=100057641851989"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80 transition-all duration-200 hover:scale-[1.02] hover:border-[#c4a574] hover:text-white"
              >
                Facebook
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://www.instagram.com/kitchensolutions_ltda/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80 transition-all duration-200 hover:scale-[1.02] hover:border-[#c4a574] hover:text-white"
              >
                Instagram
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#c4a574]">
              Contacto
            </p>
            <div className="mt-6 space-y-5">
              <a
                href="tel:+56995382703"
                className="flex items-start gap-3 text-white/80 transition hover:text-white"
              >
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#c4a574]" />
                <span>
                  <span className="block text-sm text-white/55">Ventas</span>
                  <span className="mt-1 block font-medium">+56 9 ---- ----</span>
                </span>
              </a>
    
              <a
                href="mailto:ventas@kitchensolution.cl"
                className="flex items-center gap-3 text-sm text-white/80 transition hover:text-white"
              >
                <Mail className="h-5 w-5 shrink-0 text-[#c4a574]" />
                ventas@kitchensolution.cl
              </a>
           
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#c4a574]">
              Alianzas y pago
            </p>
            <div className="mt-6 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://empresas.habitissimo.cl/pro/kitchen-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-16 w-[156px] items-center justify-center rounded-xl border border-[#968a64]/35 bg-white/[0.04] px-4 transition hover:border-[#c4a574]"
                  aria-label="Kitchen Solutions en Habitissimo"
                >
                  <Image
                    src={HABITISSIMO_URL}
                    alt="Habitissimo"
                    width={132}
                    height={48}
                    sizes="132px"
                    className="h-auto max-h-10 w-auto object-contain"
                  />
                </a>
                <a
                  href="https://online.fliphtml5.com/socv/vnrj/#p=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-16 w-[156px] items-center justify-center rounded-xl border border-[#968a64]/35 bg-white/[0.04] px-4 transition hover:border-[#c4a574]"
                  aria-label="Catálogo Kitchen Center"
                >
                  <Image
                    src={KITCHEN_CENTER_URL}
                    alt="Kitchen Center"
                    width={128}
                    height={48}
                    sizes="128px"
                    className="h-auto max-h-12 w-auto object-contain"
                  />
                </a>
              </div>
              <p className="text-sm text-white/70">Puedes pagar online con:</p>
              <a
                href="https://link.mercadopago.cl/pagokitchensolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-[210px] items-center justify-center rounded-xl border border-[#968a64]/35 bg-white/[0.04] px-5 transition hover:border-[#c4a574]"
                aria-label="Pagar con Mercado Pago"
              >
                <Image
                  src={MERCADO_PAGO_URL}
                  alt="Mercado Pago"
                  width={172}
                  height={48}
                  sizes="172px"
                  className="h-auto max-h-10 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-2 px-6 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <p>© {new Date().getFullYear()} Kitchen Solutions. Todos los derechos reservados.</p>
            <a
              href="https://www.smartpro.cl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Creado por SmartPro"
              className="inline-flex items-center gap-2 text-white/55 transition hover:text-white"
            >
              <span>Creado por</span>
              <Image
                src="/images/logo-smartpro.png"
                alt="SmartPro"
                width={104}
                height={36}
                sizes="140px"
                className="h-12 w-auto object-containß rounded-sm p-0.5 px-2"
              />
            </a>
          </div>
          <p>Diseño, fabricación e instalación de espacios a medida.</p>
        </div>
      </div>
    </footer>
  );
}