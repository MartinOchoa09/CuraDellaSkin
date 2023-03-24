import { Link } from "react-router-dom";
import Jabones from "../../assets/img/Jabones.svg";
import Dermolimpiadora from "../../assets/img/Dermolimpiadora.svg";
import ProtectorSolar from "../../assets/img/ProtectorSolar.svg";

function CategoriaJabones() {
    return ( 
        <main className="main-categoria-productos">
            <div className="categoria">
                <h1 className="edicion-h1">Categoria de Productos</h1>
            </div>
            <div className="categoria-jabones">
                <div className="contenedor"> 
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <img src={Jabones} class="card-img-top" alt="Jabones"/>
                            <div class="card-body color-boton">
                                <Link to="/jabones" class="btn boton-tamano">Jabones</Link>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={Dermolimpiadora} class="card-img-top" alt="Jabones"/>
                            <div class="card-body color-boton">
                                <Link to="/jabones" class="btn boton-tamano">Dermolimpiadores</Link>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={ProtectorSolar} class="card-img-top" alt="Jabones"/>
                            <div class="card-body color-boton">
                                <Link to="/jabones" class="btn boton-tamano">Protectores solares</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
     );
}

export default CategoriaJabones;