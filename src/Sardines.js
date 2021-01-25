import {Link} from "react-router-dom";
/* dumb component
App=> VendingMachine => Sardines
*/
function Sardines() {
  return (
  <div className="Sardines">
    Here are some sardines.
    <Link to="/"> Go Back to choices</Link>
  </div>)
}

export default Sardines;
