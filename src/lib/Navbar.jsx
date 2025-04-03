import { Link } from "react-router-dom";
const Navbar = () => {
    return (
      <nav className="navbar">
        <Link to="">My Day</Link>
        <Link to="">Important</Link>
        <Link to="">Planned</Link>
        <Link to="">Assigned To Me</Link>
        <Link to="">Tasks</Link>
      </nav>
    )
}

export default Navbar;