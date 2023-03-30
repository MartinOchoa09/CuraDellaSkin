import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar"
import HeaderSecundario from "./HeaderSecundario";
import TextureCarrito from "../../assets/textures/texture-carrito.svg";
import Linea from "../../assets/textures/linea-2-carrito.svg";
import Carrito from "../molecules/Carrito";
import ProductContext from "../../context/ProductContext";
// import HeartImg from "../../assets/img/me-gusta.png";
// import Eclipse from "../../assets/img/Ellipse6.png";
// import Media1 from "../../assets/img/media1.png"
import CarritoContex from "../../context/CarritoContext";
import "../../assets/styles/Carrito.css";


function FormCarrito() {

  const {carrito, setCarrito} = useContext(CarritoContex)

  useEffect(() =>{
    console.log(carrito, "useEffect = carrito.lenght", carrito.length);
    // fetch("https://localhost:3000/productos").then(response => response.json()).then(data =>{
    //   console.log(data)
      // setIsCarrito(data)
    },[])
    const {like, setLike} = useState(false)
    const {product, setProduct} = useContext(ProductContext)
    const heartColor = like ? 'red' : '#d9d9d9';

    return ( 
      <>
        {carrito.lenght==0 ? (
            <>
                <HeaderSecundario/>
               

                <h1>Compras</h1>
              <main className="divpadre">
                  <table id="id_darinel">
                    <thead className="encabezado-tabla">
                      <tr className="titulos-tabla">
                        <th>Producto</th>
                        <th>Precio</th>
                      </tr>
                    </thead>
                    <tbody className="cuerpo-tabla">
                        {carrito.map(car => 
                        <>
                        {console.log("esto es el caracter", car)}
                        <tr key={car.Id} className="divcard">
                        <Carrito keys={car.Id} 
                        file={car.file} 
                        price={car.price}/>
                        </tr>
                        </>)}
                    </tbody>
                  </table>
                </main>
            </>) 
        : (<> 
        <Navbar/>
        <main className="main-padre-carrito">
          {console.log(carrito, "carrito.lenght", carrito.lenght)}
            <form className="formulario-carrito">
              <div className="div-formulario-carrito">
                <div className="titulo-carrito-hijo">
                    <p>Carrito(0)</p>
                </div>
                <div className="textura-carrito">
                    <img src={Linea} alt="" className="linea-carrito"/>
                    <img src={TextureCarrito} alt="textura carrito" className="textura-carrito-img"/>
                    <div className="div-linea-dos">
                      <img src={Linea} alt="" className="linea-dos-carrito"/>
                    </div>
                </div>
              </div>
            </form>
            <div className="boton-productos">
              <button><Link to="/jabones" className="link-jabones">ir a productos</Link></button>
            </div>
        </main>
        </>) }
      </>
    );
}

export default FormCarrito;