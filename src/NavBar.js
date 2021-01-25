import { NavLink } from "react-router-dom";
import "./NavBar.css";

/** 
 * NavBar renders a nav component with Links to different snacks
 * 
 * props: none
 * state: none
 * 
 * VendingMachine -> NavBar 
 **/  

 function NavBar() {
   return (
     <nav className="NavBar">
       <NavLink exact to="/">
         Home
       </NavLink>
       <NavLink exact to="/chips">
         Chips
       </NavLink>
       <NavLink exact to="/soda">
         Soda
       </NavLink>
       <NavLink exact to="/sardines">
         Sardines
       </NavLink>
     </nav>
   );
 }

 export default NavBar;