import {Link} from "react-router-dom";
import "./Chips.css"

/* dumb component
App=> VendingMachine => Chips
*/
function Chips() {
  return (
  <div className="Chips">
    <div className="Chips-container">
      <h2>Here are some chips</h2>
      <Link to="/"> Go Back to choices</Link>
    </div>
  </div>)
}

export default Chips;