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

        useEffect(() =>{
                //array.push(product)
                //setProduct(array)
                console.log(product, "este es el producto")
           
            // liked ? (
            //     
            //     ) : ()
        }, [liked])

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
            setproducts(data)
        })
    }, [])

        return ( 
            <>
                <HeaderSecundario/>
                  

                        {products.map(product => 
                        <>
                    <div key={product._id}>
                        <GroupCards key={product.id}
                        Id={product._id}
                        file={product.imagen}
                        name={product.nombre}
                        price={product.precio}/>
                        </div>
                        </>
                    )}

                    {/* <div class="container py-4 py-xl-5 divpadreCard">
                        <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                        <div class="col-4">
                        <div class="card">
                            {products.map(product => <>
                        <div class="card-body">
                            <GroupCards keys={product.id}
                            Id={product._id}
                            file={product.imagen}
                            name={product.nombre}
                            price={product.precio}/>
                        </div>    
                            </>
                            )}
                    </div>
                            </div>
                        </div>
                    </div> */}



                {/* <main className="divpadre">
                    {
                        products.map(product => <>
                        {console.log("esto es el character", product)}
                        <div className="divcard" id="formJabones" key={product._id}>
                            <GroupCards key={product.id}
                            Id={product._id}
                            file={product.imagen}
                            name={product.nombre}
                            price={product.precio}/>
                        </div>
                        </>)
                    }
                </main> */}
            </>
         );
    }
    
export default FormJabones;