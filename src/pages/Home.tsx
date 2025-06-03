import useDocumentTitle from '../hooks/useDocumentTitle'
import { HeroSection, MeSection, HighlightSection, SkillsToolsSection, Footer } from '../components/sections';
import ScrollIndicator from '../components/navigation/ScrollIndicator'

interface HomeProps {
  openContact: () => void
}

export default function Home({ openContact }: HomeProps) {
  useDocumentTitle('Bruno • Product Designer')
  return (
    <>
    <ScrollIndicator />

    {/* Page Sections - Each section needs a unique 'id' to have a respective NavHubButton */}
    <HeroSection id="hero-section" onContactClick={openContact}/>
    <MeSection id="me-section" />
    <HighlightSection id="highlight-section" />
    <SkillsToolsSection id="skills-tools-section" />
    <Footer />
    </>
  );
}
