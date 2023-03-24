import { useEffect, useState } from "react";
import Cards from "../molecules/Cards";
import HeaderSecundario from "./HeaderSecundario";
import TitleCards from "../molecules/TitleCards"
import "../../assets/styles/Cards.css";


function FormJabones() {
        const [products, setproduct] = useState([])

    useEffect(() =>{
        fetch("https://localhost:3000/productos").then(response => response.json()).then(data => {
            console.log(data)
            setproduct(data)
        })
    }, [])

        return ( 
            <>
                <HeaderSecundario/>
            <main className="divpadre">
                <TitleCards/>
                { products.map(product => 
                    <>
                    {console.log("esto es el caracter",product)}
                    <div key={product._id} className="divcard">

                    <Cards keys={product.id} 
                    amount={product.cantidad}
                     file={product.imagen} 
                     name={product.nombre} 
                     price={product.precio}/>
                    </div>
                     </>)}
                    
            </main>
            </>
         );
    }
    
export default FormJabones;