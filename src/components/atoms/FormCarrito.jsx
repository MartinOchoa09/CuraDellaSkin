import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar"
import TextureCarrito from "../../assets/textures/texture-carrito.svg";
import Linea from "../../assets/textures/linea-2-carrito.svg";
import Carrito from "../molecules/Carrito";
import CarritoContex from "../../context/CarritoContext";
import "../../assets/styles/Carrito.css";


function FormCarrito() {

  const {carrito, setCarrito} = useContext(CarritoContex)
  const [isCarrito, setIsCarrito] = useState([])

  useEffect(() =>{
    fetch("https://localhost:3000/productos").then(response => response.json()).then(data =>{
      console.log(data)
      setIsCarrito(data)
    })
  }, [])

    return ( 
      <>
        {carrito ? (
            <>
                <HeaderSecundario/>
              <main className="divpadre">
                <TitleCards/>
                { isCarrito.map(car => 
                    <>
                    {console.log("esto es el caracter",car)}
                    <div key={car._id} className="divcard">

                    <Carrito keys={car.id} 
                    amount={car.cantidad}
                     file={car.imagen} 
                     name={car.nombre} 
                     price={car.precio}/>
                    </div>
                     </>)} 
                </main>
            </>) 
        : (<>
        <Navbar/>
        <main className="main-padre-carrito">
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