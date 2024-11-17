import Header from "./components/header/Header";
//import Form from "./components/Form";
import Menu from "./components/menu/Menu";
import pizzas from "./data/data";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu pizzas={pizzas} />
    </div>
  );
}

export default App;
