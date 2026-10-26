import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import TabSwitcher from '../components/TabSwitcher';
import IndustriesWeServe from '../components/IndustriesWeServe';
import WhyChooseMagnusCopo from '../components/WhyChooseMagnusCopo';
import ClientsLogoRunner from '../components/ClientsLogoRunner';
import content from '../data/home.json';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <Hero onNavigate={onNavigate} />
      <WhyChooseUs />
      <TabSwitcher />
      <IndustriesWeServe />
      <ClientsLogoRunner logos={content.clientLogos} />
      <WhyChooseMagnusCopo />
    </div>
  );
}
