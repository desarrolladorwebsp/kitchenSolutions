import HeroSection from "@/components/HeroSection";
import ModernizationSection from "@/components/ModernizationSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ProcessSection from "@/components/ProcessSection";
import KitchenLeadForm from "@/components/KitchenLeadForm";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ModernizationSection />
      <ProjectsShowcase />
      <ProcessSection />
      <KitchenLeadForm />
    </main>
  );
}
