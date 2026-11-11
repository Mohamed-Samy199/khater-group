import AboutSection from '../components/home/AboutSection';
import ClientsSection from '../components/home/Clientssection';
import GlobalPresence from '../components/home/GlobalPresence';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <GlobalPresence />
      <ClientsSection />
    </>
  );
}
