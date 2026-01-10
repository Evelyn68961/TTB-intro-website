import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Time-to-Benefit (TTB)</Link>
      <ul className="nav-links">
        <li><Link to="/what-is-ttb">What is TTB?</Link></li>
        <li><Link to="/methodology">Methodology</Link></li>
        <li><Link to="/applications">Applications</Link></li>
        <li><Link to="/demo">Demo</Link></li>
      </ul>
    </nav>
  );
}