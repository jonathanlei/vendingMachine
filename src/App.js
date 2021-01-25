import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Chips from "./Chips";
import Soda from "./Soda";
import Sardines from "./Sardines";
import VendingMachine from "./VendingMachine";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/sardines">
          <Sardines />
        </Route>
        <Route exact path="/">
          <VendingMachine />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
