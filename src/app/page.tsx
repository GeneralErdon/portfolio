import Layout from "@/components/Layout/Layout";
import AboutMeSection from "@/components/Portfolio/sections/AboutMeSection";
import ContactSection from "@/components/Portfolio/sections/ContactSection";
import HeroSection from "@/components/Portfolio/sections/HeroSection";
import ProjectsSection from "@/components/Portfolio/sections/ProjectSection";
import SkillsSection from "@/components/Portfolio/sections/SkillsSection";


export default function Home() {
  return (
    <Layout >
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </Layout>
  );
}
