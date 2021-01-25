import { Link } from "react-router-dom";
import "./VendingMachine.css";

/* 
App => VendingMachine => (Soda, Chips, Sardines)
*/
function VendingMachine() {
  return (
    <div className="VendingMachine">
      <h1> Here's a vending machine, take your pick</h1>
      <div className="VendingMachine-links">
        <div className="VendingMachine-link">
        <Link to="/chips">chips</Link>
        </div>
        <div className="VendingMachine-link">
        <Link to="/soda">soda</Link>
        </div>
        <div className="VendingMachine-link">
        <Link to="/sardines">sardines</Link>
        </div>
      </div>
    </div>
  )


}



export default VendingMachine;