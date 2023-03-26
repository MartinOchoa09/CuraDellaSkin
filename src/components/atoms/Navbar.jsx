import { useContext } from "react";
import {Link} from "react-router-dom";
import cds from "../../assets/icons/cds.png";
import "../../assets/styles/Header.css";
import AdminContext from "../../context/AdminContext";

function navbar() {

    const {isAdmin, setIsAdmin} = useContext(AdminContext)
    
    return ( 
        <nav class="navbar navbar-expand-lg">
      <div class="container-fluid cabecera-navbar-principal">
        <Link to="/"><img src={cds} alt="Icono de la empresa"/></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 mover-link">
            {isAdmin ? (
              <><li class="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/jabones">Productos</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/tutoriales">Videoteca</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recomendacion">Agregar rutina</Link>
            </li>
            </>
            )
            : (<><li class="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/favoritos">Favoritos</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/carrito">Carrito</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/tutoriales">Videoteca</Link>
          </li>
          </>)} 
          </ul>
        </div>
      </div>
</nav>
     );
}

export default navbar;