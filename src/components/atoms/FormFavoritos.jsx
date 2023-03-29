import { useContext, useState } from "react";
import Navbar from "./Navbar";
import ProductContext from "../../context/ProductContext";
import HeartImg from "../../assets/img/me-gusta.png";
import Eclipse from "../../assets/img/Ellipse6.png";
import Media1 from "../../assets/img/media1.png"
import "../../assets/styles/Favoritos.css";

function FormFavoritos() {
    const {like, setLike} = useState(false)
    const {product, setProduct} = useContext(ProductContext)
    const heartColor = like ? '#d9d9d9' : 'red';

    const agregarFavorito =(e) => {
        e.preventDefault;
        setLike(!like);
    }
    return ( 
        <>
    <Navbar/>
    <div class="container py-4 py-xl-5">
        <div class="row mb-5">
            <div class="col-md-8 col-xl-6 text-center mx-auto titulo-favoritos">
                <h2>FAVORITOS</h2>
            </div>
        </div>
        <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <div class="p-4">
                            <div class="d-flex">
                                <img class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src={Eclipse}/>
                                <div>
                                    <p class="fw-bold mb-0">Dermatóloga</p>
                                    <p class="text-muted mb-0">Angela</p>
                                </div>
                                <button onClick={agregarFavorito} className="boton-img-svg like-corazon">
                            <svg
                                xmlns={HeartImg}
                                viewBox="0 0 24 24"
                                fill={heartColor}
                                width="30px"
                                   height="30px"
                                   className="svg-heart-img">
                             <path d="M12,21.35L4.78,14.13C2.34,11.69 1,9.31 1,7.5C1,4.42 3.42,2 6.5,2C8.19,2 9.78,2.82 11,4.05C12.22,2.82 13.81,2 15.5,2C18.58,2 21,4.42 21,7.5C21,9.31 19.66,11.69 17.22,14.13L12,19.36L6.78,14.13C4.34,11.69 3,9.31 3,7.5C3,4.42 5.42,2 8.5,2C10.19,2 11.78,2.82 13,4.05C14.22,2.82 15.81,2 17.5,2C20.58,2 23,4.42 23,7.5C23,9.31 21.66,11.69 19.22,14.13L12,21.35Z" />
                            </svg>
                        </button>
                            </div>
                            <img class="rounded mx-auto d-block" src={Media1}/>
                            <h4>Crema espumosa limpiadora</h4>
                            <p>$750.00</p>
                            <p>Crema dermolimpiadora uso diario con efecto suave e hidratante.</p>
                            <button class="btn btn-primary fs-5 py-2 px-4 boton-comprar" type="button">Comprar</button>
                            <button class="btn btn-light fs-5 py-2 px-4 boton-comprar-secundario">Agregar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>


        

     );
}

export default FormFavoritos;