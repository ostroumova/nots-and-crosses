import "./App.scss";
import AppMain from "./components/AppMain";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App: React.FC = () => {
  const headerTitle = "Noughts And Crosses";
  const headerSubtitle = "Use your brain";

  const copyright = "© Noughts And Crosses";
  const date = "Created 13 March 2024";
  return (
    <div className="app-container">
      <Header title={headerTitle} subtitle={headerSubtitle} />
      <AppMain />
      <Footer copyright={copyright} date={date} />
    </div>
  );
};

export default App;
