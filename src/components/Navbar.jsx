import LoggedUser from "@/auth/LoggedUser";
import { Link, NavLink } from "react-router-dom";
import { Sun } from 'lucide-react';
import { Star } from 'lucide-react';
import { Columns3 } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { House } from 'lucide-react';
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="user-account">
        <LoggedUser />
      </div>
      <div className="nav-section">
        <nav className="navbar">
          <NavLink to="my-day" className={'nav'}> <Sun className="sun"/> My Day</NavLink>
          <NavLink to="important" className={'nav'}> <Star  className="star"/> Important</NavLink>
          <NavLink to="planned" className={'nav'}><Columns3  className="column"/> Planned</NavLink>
          <NavLink to="assigned-to-me" className={'nav'}><CircleUserRound  className="circleUser"/> Assigned To Me</NavLink>
          <NavLink to="tasks" className={'nav'}><House  className="house"/> Tasks</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
