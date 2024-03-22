import "./App.scss";
import Board from "./components/Board";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App: React.FC = () => {
  const headerTitle = "Noughts And Crosses";
  const hearderSubtitle = "Use your brain";

  const copyrights = "© Noughts And Crosses";
  const date = "Created 13 March 2024";
  return (
    <div className="app-container">
      <Header title={headerTitle} subtitle={hearderSubtitle} />
      <Board />
      <Footer copyrights={copyrights} date={date} />
    </div>
  );
};

export default App;
