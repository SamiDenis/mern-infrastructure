import "./NavBar.css"
import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"


export default function NavBar({ user, setUser }) {
  //Add the following function
  function handleLogOut() {
    //delegate to the users-service
    userService.logOut()
    //update state will also casue a re-render
    setUser(null)
  }
  return (
    <nav>
      <Link to="/orders">Order History</Link>
      {/* makes spaces for the links in between */}
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp; | &nbsp;
      Welcome, {user.name}
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}