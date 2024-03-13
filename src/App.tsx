import "./App.scss";
import Board from "./components/Board";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <Board />
      <Footer />
    </div>
  );
};

export default App;
