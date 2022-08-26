import { Header } from './containers/Header';
import { HeroSection } from './containers/HeroSection';
import { AboutUs } from './containers/AboutUs';
import { OurExpereince } from './containers/OurExpereince';
import { DarkModeProvider } from './components/Context';
import { TeamMember } from './containers/TeamMember/TeamMember';

export function App() {
  return (
    <>
      <DarkModeProvider>
        {/* Let's create Pages directory and Homepage inside it and to import Header, etc into Homepage page  */}
        <Header />
        <HeroSection />
        <AboutUs />
        <OurExpereince />
        <TeamMember />
      </DarkModeProvider>
    </>
  );
}
