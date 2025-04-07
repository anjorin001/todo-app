import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar">
        <NavLink to="my-day">My Day</NavLink>
        <NavLink to="important">Important</NavLink>
        <NavLink to="planned">Planned</NavLink>
        <NavLink to="assigned-to-me">Assigned To Me</NavLink>
        <NavLink to="tasks">Tasks</NavLink>
      </nav>
    )
}

export default Navbar;