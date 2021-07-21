import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <NavLink exact to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/travellog">
            Travel Log
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/bucketlist">
            Bucket List{' '}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
