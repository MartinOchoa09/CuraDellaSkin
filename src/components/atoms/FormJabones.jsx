import { useContext, useEffect, useState } from "react";
import HeaderSecundario from "./HeaderSecundario";
import TokenContext from "../../context/TokenContext";
import TituloCard from "../molecules/TituloCard";
import GroupCards from "../molecules/GroupCards";
import "../../assets/styles/Cards.css";



function FormJabones() {
        const [products, setproduct] = useState([])
        const {token, setToken} = useContext(TokenContext)

    useEffect(() =>{  
        let url = "https://localhost:3000/productos";
        let options = {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${token}`
        }
    }
        fetch(url,options).then(response => response.json()).then(data => {
            console.log(data)
            setproduct(data)
            
        })
    }, [])

        return ( 
            <>
                <HeaderSecundario/>
                <main className="divpadre">
                    <TituloCard/>
                    {
                        products.map(product => <>
                        {console.log("esto es el character", product)}
                        <div className="divcard" key={product._id}>
                            <GroupCards keys={product.id}
                            Id={product._id}
                            file={product.imagen}
                            name={product.nombre}
                            price={product.precio}/>
                        </div>
                        </>)
                    }
                </main>
            </>
         );
    }
    
export default FormJabones;