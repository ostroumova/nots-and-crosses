import "./App.scss";
import Board from "./components/Board";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <Board />
    </div>
  );
};

export default App;
