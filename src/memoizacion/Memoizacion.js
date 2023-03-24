import { memo } from "react";

const ProductList = memo(({productsJabones}) =>{
    return (
        <main className="padre">
            {productsJabones.map((product) => (
                    <div className="hijo" key={product._id}>

                        <div className="character">
                        <div className="cabezera">
                            <div className="divcabezera2">
                            <img  src={Dermatologa} alt="" id="foto"/>
                            <div className="parrafos">
                            <p>Dermatologa</p>
                            <p>Angela</p>
                            </div>
                        <div className="Favorite">
                            <img src={product.amount} alt="" />
                        </div>
                        </div>
                        </div>
                        <div className="foto-dermo">
                            <img src={product.file} alt="" />
                        </div>
                        <div className="info-display">
                            <p id="name">{product.name} </p>
                            <p id="price">{product.price}</p>  
                        <div className="buttons-display">
                            <button className="comprar">Comprar</button>
                            <button className="agregar"> Agregar</button>
                        </div>
                        </div>
                        </div>
        </div>
        ))}
    </main>
    );
});

export default ProductList;