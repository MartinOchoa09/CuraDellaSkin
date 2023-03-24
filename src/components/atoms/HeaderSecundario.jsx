import {Link} from "react-router-dom";
import { useContext } from "react";
import cdsSecundario from "../../assets/icons/cdsSecundario.png";
import AdminContext from "../../context/AdminContext";
import Search from "../molecules/Search";
import "../../assets/styles/HeaderSecundario.css";

function HeaderSecundario() {

  const {isAdmin, setIsAdmin} = useContext(AdminContext)

    return ( 
        <nav className="navbar-secundario">
      <div className="navbar-brand-secundario">
        <Link to="/" className="navbar-logo-secundario">
          <img src={cdsSecundario} alt="Logo" className="logo-img-secundario" />
        </Link>
      </div>
      <div className="navbar-collapse-secundario">
        <ul className="navbar-nav-secundario">
          {isAdmin ? (
          <>
          <li className="nav-item-secundario">
            <Link to="/" className="nav-link-secundario">Inicio</Link>
          </li>
          <li className="nav-item-secundario">
            <Link to="/productos" className="nav-link-secundario">Agregar producto</Link>
          </li>
          <li className="nav-item-secundario">
            <Link to="/tutoriales" className="nav-link-secundario">Videoteca</Link>
          </li> 
          <li className="nav-item-secundario">
            <Link to="/correos" className="nav-link-secundario">Correos</Link>
          </li>
        </>)
          :(<>
            <li className="nav-item-secundario">
              <Link to="/" className="nav-link-secundario">Inicio</Link>
            </li>
            <li className="nav-item-secundario">
              <Link to="/tutoriales" className="nav-link-secundario">Videoteca</Link>
            </li>
            <li className="nav-item-secundario">
              <Link to="/favoritos" className="nav-link-secundario">Favoritos</Link>
            </li>
            <li className="nav-item-secundario">
              <Link to="/carrito" className="nav-link-secundario">Carrito</Link>
            </li>
          </>)
          }
        </ul>
          <Search/>
      </div>
    </nav>
     );
}

export default HeaderSecundario;