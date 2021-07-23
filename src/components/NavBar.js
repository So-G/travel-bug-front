import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navBar">
      <ul className="navList">
        <li>
          <NavLink className="navItem" exact to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navItem" exact to="/travellog">
            Travel Log
          </NavLink>
        </li>
        <li>
          <NavLink className="navItem" exact to="/bucketlist">
            Bucket List{' '}
          </NavLink>
        </li>
        <li>
          <NavLink className="navItem" exact to="/login">
            Log In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
