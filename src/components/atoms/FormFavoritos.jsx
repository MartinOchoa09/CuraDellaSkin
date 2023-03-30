import { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductContext from "../../context/ProductContext";
import GroupCards from "../molecules/GroupCards";
import "../../assets/styles/Favoritos.css";

function FormFavoritos() {
    const {like, setLike} = useState(false)
    const {product, setProduct} = useContext(ProductContext)
    const [products, setProducts] = useState([])

    useEffect(() => {
        array.push(product)
        setProduct(array)
        console.log(product, "este es el product")
    }, [!like])

    return ( 
        <>
    <Navbar/>
        {products.map(product => 
            <>
                <div key={product._id}>
                    <GroupCards key={product.id}
                    Id={product.Id}
                    file={product.file}
                    name={product.name}
                    price={product.price}
                    />
                </div>
            </>)}



   
        </>


        

     );
}

export default FormFavoritos;