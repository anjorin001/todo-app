import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    return (
      <nav className="navbar">
        <NavLink to="">My Day</NavLink>
        <NavLink to="">Important</NavLink>
        <NavLink to="">Planned</NavLink>
        <NavLink to="">Assigned To Me</NavLink>
        <NavLink to="">Tasks</NavLink>
      </nav>
    )
}

export default Navbar;