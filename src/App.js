import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Chips from "./Chips";
import Soda from "./Soda";
import Sardines from "./Sardines";
import VendingMachine from "./VendingMachine";
import NavBar from './NavBar';

/** 
 * App renders BrowserRouter with NavBar and 3 Food components 
 * that match paths 
 * 
 * App -> BrowserRouter -> [NavBar, Chips, Soda, Sardines, VendingMachine]
 *                      
 **/  
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
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
