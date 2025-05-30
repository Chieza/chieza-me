import useDocumentTitle from '../hooks/useDocumentTitle'
import HeroSection from '../components/sections/HeroSection'
import MeSection from '../components/sections/MeSection'
import HighlightSection from '../components/sections/HighlightSection'
import SkillsTools from '../components/sections/SkillsTools'
import Footer from '../components/sections/Footer'
import ScrollIndicator from '../components/navigation/ScrollIndicator'

interface HomeProps {
  openContact: () => void
}

export default function Home({ openContact }: HomeProps) {
  useDocumentTitle('Bruno • Product Designer')
  return (
    <>
    {/* Page Sections */}
    <HeroSection onContactClick={openContact}/>
    <ScrollIndicator />
    <MeSection />
    <HighlightSection />
    <SkillsTools />
    <Footer />
    </>
  );
}
