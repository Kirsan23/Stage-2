import { Header } from './containers/Header';
import { HeroSection } from './containers/HeroSection';
import { AboutUs } from './containers/AboutUs';
import { OurExpereince } from './containers/OurExpereince';
import { DarkModeProvider } from './components/Context';

export function App() {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <HeroSection />
        <AboutUs />
        <OurExpereince />
      </DarkModeProvider>
    </>
  );
}
