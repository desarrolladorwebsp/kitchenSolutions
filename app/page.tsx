import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ModernizationSection from "@/components/ModernizationSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ProcessSection from "@/components/ProcessSection";
import KitchenLeadForm from "@/components/KitchenLeadForm";

export const metadata: Metadata = {
  title: "Cocinas Premium a Medida en Chile",
  description:
    "Diseño, fabricación e instalación de cocinas premium a medida en Chile. Cocina moderna, remodelación y asesoría personalizada con planificación 3D.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Kitchen Solutions",
    image: "https://kitchensolution.cl/images/og_grahp.jpg",
    url: "https://kitchensolution.cl",
    telephone: "+56 9 9538 2703",
    email: "ventas@kitchensolution.cl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Galería San Martín local C2, parcela 20",
      addressLocality: "Chicureo",
      addressRegion: "Metropolitana",
      postalCode: "8150000",
      addressCountry: "CL",
    },
    areaServed: ["Chile", "Santiago", "Chicureo", "Colina"],
    priceRange: "$$$",
    description:
      "Kitchen Solutions diseña, fabrica e instala cocinas premium a medida con enfoque moderno, funcional y personalizado para proyectos residenciales en Chile.",
    sameAs: [
      "https://www.instagram.com/kitchensolutions_ltda/",
      "https://web.facebook.com/profile.php?id=100057641851989",
      "https://empresas.habitissimo.cl/pro/kitchen-solutions",
    ],
    openingHours: ["Mo-Fr 09:00-18:00"],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <ModernizationSection />
      <ProjectsShowcase />
      <ProcessSection />
      <KitchenLeadForm />
    </main>
  );
}
