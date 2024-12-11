import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>EV-olution</h1>
      <ul>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li id='child'>Contact</li>
      </ul>
    </div>
  );
}
