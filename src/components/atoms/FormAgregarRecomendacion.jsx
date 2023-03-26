import { useNavigate } from "react-router-dom";
import "../../assets/styles/AgregarRecomendacion.css";


function FormAgregarRecomendacion() {
    const navigate = useNavigate()

    const handlerClickProductos = (e) => {
        navigate("/rutinas")
    }

    return (
        <>
        <div className="titulo-recomendacion">
            <h1 className="titulo-agregar-recomendacion">Agregar recomendaciones</h1>
        </div>
        <div class="row g-2 div-padre-recomendacion">
            <div className="row g-2 div-contenedor-recomendacion">
            <div class="col-md">
                <label for="floatingSelectGrid" className="label-recomendacion">Nombre</label>
                <div class="form-floating">
                    <input type="text" class="form-control input-recomendacion" id="floatingInputGrid"/>
                </div>
            </div>
            <div class="col-md">
            <label for="floatingSelectGrid" className="label-recomendacion">Categoria</label>
                <div class="form-floating">
                    <select class="form-select input-recomendacion" id="floatingSelectGrid">
                        <option selected>Categorías</option>
                        <option value="1">Limpieza</option>
                        <option value="2">Exfoliación</option>
                        <option value="3">Hidratación</option>
                    </select>
                </div>
            </div>
                <label for="floatingInput" className="label-recomendacion">Tipo</label>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control input-recomendacion" id="floatingInput"/>
                </div>
                <label for="floatingTextarea2" className="label-recomendacion">Descripción</label>
                <div class="form-floating">
                    <textarea class="form-control input-recomendacion" id="floatingTextarea2"></textarea>
                </div>
                <div class="col-md div-botones">
                    <button type="button" class="btn btn-primary btn-lg boton-agregar-recomendacion">Agregar</button>
                    <button type="button" class="btn btn-secondary btn-lg boton-productos-recomendacion" onClick={handlerClickProductos}>Rutinas</button>
                </div>
            </div>
        </div>
        </> 
     );
}

export default FormAgregarRecomendacion;