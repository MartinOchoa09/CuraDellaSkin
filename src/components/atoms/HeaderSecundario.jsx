import {Link} from "react-router-dom";
import cdsSecundario from "../../assets/icons/cdsSecundario.png";
import "../../assets/styles/HeaderSecundario.css";

function HeaderSecundario() {
    return ( 
        <nav className="navbar-secundario">
      <div className="navbar-brand-secundario">
        <Link to="/" className="navbar-logo-secundario">
          <img src={cdsSecundario} alt="Logo" className="logo-img-secundario" />
        </Link>
      </div>
      <div className="navbar-collapse-secundario">
        <ul className="navbar-nav-secundario">
          <li className="nav-item-secundario"><Link to="/" className="nav-link">Inicio</Link></li>
          <li className="nav-item-secundario"><Link to="/informacion" className="nav-link">Informacion</Link></li>
          <li className="nav-item-secundario"><Link to="/comprar" className="nav-link">Carrito</Link></li>
        </ul>
        <form className="search-form-secundario">
          <input type="text" placeholder="Buscar" className="search-box-secundario" />
          <button type="submit" className="search-button-secundario">Buscar</button>
        </form>
      </div>
    </nav>
     );
}

export default HeaderSecundario;