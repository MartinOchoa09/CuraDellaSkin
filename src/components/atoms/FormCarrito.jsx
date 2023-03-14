import { useState } from "react";
import HeaderSecundario from "./HeaderSecundario";


function FormCarrito() {

    const[cart, setCart] = useState([]);

    return ( 
      <main>
        <HeaderSecundario/>
        <form>
          
        </form>
      </main>

    );


function addToCart(product) {
    setCart([...cart, product]);
  }


  
  
  
}

export default FormCarrito;