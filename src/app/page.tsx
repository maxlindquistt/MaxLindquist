import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import TechStackSection from './components/TechStackSection';
import Reveal from './components/Reveal';

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto pb-20 lg:pb-0">
      <ProjectsSection />

      <TechStackSection />

      <Reveal>
        <AboutSection />
      </Reveal>

      <ContactSection />
    </main>
  );
}
