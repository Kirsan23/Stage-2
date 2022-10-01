import { useContext } from 'react';
import { Header } from './containers/Header';
import { HeroSection } from './containers/HeroSection';
import { AboutUs } from './containers/AboutUs';
import { OurExperience } from './containers/OurExperience';
import { TeamMember } from './containers/TeamMember';
import { OurWork } from './containers/OurWork';
import { ClientsFeedback } from './containers/ClientsFeedback';
import { OurBlog } from './containers/OurBlog';
import { ContactUs } from './containers/ContactUs';
import { Map } from './containers/Map';
import { Footer } from './containers/Footer';
import { ThemeContext } from '../../components/Context';

export const HomePage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme}-theme`}>
      <Header />
      <HeroSection />
      <AboutUs />
      <OurExperience />
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
