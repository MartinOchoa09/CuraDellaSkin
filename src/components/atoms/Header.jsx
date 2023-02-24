import {Link} from "react-router-dom";
import cds from "../../assets/icons/cds-removebg-preview.png";
import "../../assets/styles/Header.css";


function Header() {
    return ( 
        <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          <img src={cds} alt="Logo" className="logo-img" />
        </Link>
      </div>
      <div className="navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/" className="nav-link">Inicio</Link></li>
          <li className="nav-item"><Link to="/informacion" className="nav-link">Informacion</Link></li>
          <li className="nav-item"><Link to="/contactanos" className="nav-link">Contactanos</Link></li>
        </ul>
        <form className="search-form">
          <input type="text" placeholder="Buscar" className="search-box" />
          <button type="submit" className="search-button">Buscar</button>
        </form>
      </div>
    </nav>
    );
}

export default Header;