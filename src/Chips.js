import {Link} from "react-router-dom";
/* dumb component
App=> VendingMachine => Chips
*/
function Chips() {
  return (
  <div className="Chips">
    Here are some chips
    <Link to="/"> Go Back to choices</Link>
  </div>)
}

export default Chips;