import FeatureSection from "./components/FeatureSection";
import GlobalStyles from "./components/Global.styles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LinkShortener from "./components/LinkShortener";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
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
