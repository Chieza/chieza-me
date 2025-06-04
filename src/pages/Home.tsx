import useDocumentTitle from '../hooks/useDocumentTitle'
import { HeroSection, MeSection, HighlightSection, SkillsToolsSection, Footer } from '../components/sections';

interface HomeProps {
  openContact: () => void
}

export default function Home({ openContact }: HomeProps) {
  useDocumentTitle('Bruno • Product Designer')
  return (
    <>
    {/* Sections - Each section needs unique 'id' for NavHubButton */}
    <HeroSection id="hero-section" onContactClick={openContact}/>
    <MeSection id="me-section" />
    <HighlightSection id="highlight-section" />
    <SkillsToolsSection id="skills-tools-section" />
    <Footer />
    </>
  );
}
