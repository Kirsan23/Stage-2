import { Header } from './containers/Header';
import { HeroSection } from './containers/HeroSection';
import { AboutUs } from './containers/AboutUs';
import { OurExpereince } from './containers/OurExpereince';
import { DarkModeProvider } from './components/Context';
import { TeamMember } from './containers/TeamMember/TeamMember';
import { OurWork } from './containers/OurWork';
import { ClientsFeedback } from './containers/ClientsFeedback';

export function App() {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <HeroSection />
        <AboutUs />
        <OurExpereince />
        <TeamMember />
        <OurWork />
        <ClientsFeedback />
      </DarkModeProvider>
    </>
  );
}
