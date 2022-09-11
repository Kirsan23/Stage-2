import { useContext } from 'react';
import { Header } from './containers/Header';
import { HeroSection } from './containers/HeroSection';
import { AboutUs } from './containers/AboutUs';
import { OurExpereince } from './containers/OurExpereince';
import { TeamMember } from './containers/TeamMember';
import { OurWork } from './containers/OurWork';
import { ClientsFeedback } from './containers/ClientsFeedback';
import { OurBlog } from './containers/OurBlog';
import { ContactUs } from './containers/ContactUs';
import { Map } from './containers/Map';
import { Footer } from './containers/Footer';
import { DarkModeContext } from '../../components/Context';

export const HomePage = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? `dark-theme` : `light-theme`}>
      <Header />
      <HeroSection />
      <AboutUs />
      <OurExpereince />
      <TeamMember />
      <OurWork />
      <ClientsFeedback />
      <OurBlog />
      <ContactUs />
      <Map />
      <Footer />
    </div>
  );
};
