import GlobalStyles from "./components/Global.styled";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LinkShortener from "./components/LinkShortener";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <LinkShortener />
    </>
  );
};

export default App;
