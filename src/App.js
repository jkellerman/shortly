import FeatureSection from "./components/FeatureSection";
import GlobalStyles from "./components/Global.styles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LinkShortener from "./components/LinkShortener";
import CTA from "./components/CTA";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <LinkShortener />
      <FeatureSection />
      <CTA />
    </>
  );
};

export default App;
