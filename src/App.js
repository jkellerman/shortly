import FeatureSection from "./components/FeatureSection";
import GlobalStyles from "./components/Global.styles";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import LinkShortener from "./components/LinkShortener";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <main>
        <Hero />
        <LinkShortener />
        <FeatureSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default App;
