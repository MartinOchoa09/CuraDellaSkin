import {Link} from "react-router-dom";
import { useContext } from "react";
import cdsSecundario from "../../assets/icons/cdsSecundario.png";
import AdminContext from "../../context/AdminContext";
import Search from "../molecules/Search";
import "../../assets/styles/HeaderSecundario.css";

function HeaderSecundario() {

  const {isAdmin, setIsAdmin} = useContext(AdminContext)

    return ( 
        <nav className="navbar navbar-expand-lg navbar-secundario">
      <div className="container-fluid navbar-brand-secundario">
        <Link to="/" className="navbar-logo-secundario">
          <img src={cdsSecundario} alt="Logo" className="logo-img-secundario" />
        </Link>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-secundario">
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