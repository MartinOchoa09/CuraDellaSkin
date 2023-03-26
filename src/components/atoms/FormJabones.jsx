import { useContext, useEffect, useState } from "react";
import HeaderSecundario from "./HeaderSecundario";
import TokenContext from "../../context/TokenContext";
import GroupCards from "../molecules/GroupCards";
import TituloCard from "../molecules/TituloCard";
import "../../assets/styles/Cards.css";


function FormJabones() {
        const [products, setproduct] = useState([])
        const {isToken, setIsToken} = useContext(TokenContext)

    useEffect(() =>{  
        let url = "https://localhost:3000/productos";
        fetch(url).then(response => response.json()).then(data => {
            console.log(data)
            setproduct(data)
        })
    }, [])

        return ( 
            <>
                <HeaderSecundario/>
            <main className="divpadre">
                <TituloCard/>
                {products.map(product => 
                    <>
                    {console.log("esto es el caracter",product)}
                    <div key={product._id} className="divcard">

                    <GroupCards keys={product.id} 
                    // amount={product.cantidad}
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