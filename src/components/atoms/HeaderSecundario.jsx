import {Link} from "react-router-dom";
import cdsSecundario from "../../assets/icons/cdsSecundario.png";
import "../../assets/styles/HeaderSecundario.css";

function HeaderSecundario() {
    return ( 
        <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          <img src={cdsSecundario} alt="Logo" className="logo-img" />
        </Link>
      </div>
      <div className="navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/" className="nav-link">Inicio</Link></li>
          <li className="nav-item"><Link to="/informacion" className="nav-link">Informacion</Link></li>
          <li className="nav-item"><Link href="/contactanos" className="nav-link">Contactanos</Link></li>
        </ul>
        <form className="search-form">
          <input type="text" placeholder="Buscar" className="search-box" />
          <button type="submit" className="search-button">Buscar</button>
        </form>
      </div>
    </nav>
     );
}

export default HeaderSecundario;