import "./NavBar.css"
import { Link } from "react-router-dom"

export default function NavBar({ user }) {

    return (
       <nav>
         <Link to="/orders">Order History</Link>
         {/* makes spaces for the links in between */}
         &nbsp; | &nbsp;
         <Link to="/orders/new">New Order</Link>
         &nbsp; | &nbsp;
         Welcome, { user.name }
       </nav>
    );
  }