const Navbar = () => {
  return (
    <div>
      <header className="navbar-container">
        <div className="navbar-logo">
          <h1>Crystal Nails</h1>
        </div>

        <ul className="navbar-link-items">
          <li className="nav-list-item">Home</li>
          <li className="nav-list-item">Service</li>
          <li className="nav-list-item">Contact us</li>
          <li className="nav-list-item">Appointment</li>
          <li className="nav-list-item">ABout us</li>
        </ul>

        <div className="navbar-icons">
        <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
        </div>
      </header>
    </div>
  );
};
export default Navbar;
