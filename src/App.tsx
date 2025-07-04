import Header from "./components/Header";
import { ThemeProvider } from "./ThemeProvider";
import Hero from "./components/Hero";
import ProfileCard from "./components/ProfileCard";
import ConsortiumOverview from "./components/ConsortiumOverview";
import Footer from "./components/Footer";
import FAQ from "./components/Faq";
import AboutDifferentials from "./components/AboutDifferentials";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Hero />
        <ProfileCard />
        <ConsortiumOverview />
        <FAQ />
        <AboutDifferentials />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
