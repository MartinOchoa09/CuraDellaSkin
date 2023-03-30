import { useContext, useEffect, useState } from "react";
import HeaderSecundario from "./HeaderSecundario";
import TokenContext from "../../context/TokenContext";
import TituloCard from "../molecules/TituloCard";
import GroupCards from "../molecules/GroupCards";
import ProductContext from "../../context/ProductContext";
import LikedContext from "../../context/LikedContext";
import "../../assets/styles/Cards.css";



function FormJabones() {
        const {product, setProduct} = useContext(ProductContext)
        const {liked, setLiked} = useContext(LikedContext)

        const [products, setproducts] = useState([])
        const {token, setToken} = useContext(TokenContext)

        let array = []
        useEffect(() =>{
                array.push(product)
                setProduct(array)
                console.log(product, "este es el producto")
        }, [!liked])

    useEffect(() =>{  
        let url = "https://localhost:3000/productos";
        let options = {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${token}`
            }
        }
        fetch(url,options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setproducts(data)
        })
    }, [])

        return ( 
            <>
                <HeaderSecundario/>
                    <TituloCard/>
                        {products.map(product => 
                        <>
                    <div key={product._id}>
                        <GroupCards keys={product.id}
                        Id={product._id}
                        file={product.imagen}
                        name={product.nombre}
                        price={product.precio}/>
                    </div>
                        </>
                    )}
            </>
         );
    }
    
export default FormJabones;