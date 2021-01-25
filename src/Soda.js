import {Link} from "react-router-dom";
/* dumb component
App=> VendingMachine => Soda
*/
function Soda() {
  return (
  <div className="Chips">
    Here are some soda
    <Link to="/"> Go Back to choices</Link>
  </div>)
}

export default Soda;