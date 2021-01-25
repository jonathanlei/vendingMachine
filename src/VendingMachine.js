import { Link } from "react-router-dom";
import "./VendingMachine.css";
import NavBar from './NavBar';

/* 
App => VendingMachine => (Soda, Chips, Sardines)
*/
function VendingMachine() {
  const styles = {
    textDecoration: 'none', 
    color: 'white', 
    fontSize: '32px',
  }
  return (
    <div className="VendingMachine">
      <div className="VendingMachine-header">
        <h1> Here's a vending machine, take your pick</h1>
      </div>
      <div className="VendingMachine-links">
        <div className="VendingMachine-link">
          <Link to="/chips" style={styles}>
            chips
          </Link>
        </div>
        <div className="VendingMachine-link">
          <Link to="/soda" style={styles}>
            soda
          </Link>
        </div>
        <div className="VendingMachine-link">
          <Link to="/sardines" style={styles}>
            sardines
          </Link>
        </div>
      </div>
    </div>
  );


}



export default VendingMachine;