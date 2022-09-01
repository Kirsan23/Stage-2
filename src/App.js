import { Header } from './containers/Header';
import { HeroSection } from './containers/HeroSection';
import { AboutUs } from './containers/AboutUs';
import { OurExpereince } from './containers/OurExpereince';
import { ThemeProvider } from './components/Context';
import { TeamMember } from './containers/TeamMember/TeamMember';
import { OurWork } from './containers/OurWork';
import { ClientsFeedback } from './containers/ClientsFeedback';
import { OurBlog } from './containers/OurBlog';

export function App() {
  return (
    <>
      <ThemeProvider>
        {/* Let's create Pages directory and Homepage inside it and to import Header, etc into Homepage page  */}
        <Header />
        <HeroSection />
        <AboutUs />
        <OurExpereince />
        <TeamMember />
        <OurWork />
        <ClientsFeedback />
        <OurBlog />
      </ThemeProvider>
    </>
  );
}
