import Header from "./components/Header";
import { ThemeProvider } from "./ThemeProvider";
import Hero from "./components/Hero";
import ProfileCard from "./components/ProfileCard";
import ConsortiumOverview from "./components/ConsortiumOverview";
import Footer from "./components/Footer";
import FAQ from "./components/Faq";
import AboutDifferentials from "./components/AboutDifferentials";
import CustomerStories from "./components/CustomerStories";
import FloatingButton from "./components/FloatingButton";

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
        <CustomerStories />
        <Footer />
        <FloatingButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
