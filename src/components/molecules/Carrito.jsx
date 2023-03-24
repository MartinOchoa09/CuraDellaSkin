import Dermatologa from "../../assets/img/dermatologa.png";

function Carrito({amount, file, name, price}) {
    return ( 
        <main className="padre">
        <div className="hijo">
                        <div className="character">
                        <div className="cabezera">
                            <div className="divcabezera2">
                            <img  src={Dermatologa} alt="" id="foto"/>
                            <div className="parrafos">
                            <p>Dermatologa</p>
                            <p>Angela</p>
                            </div>
                        <div className="Favorite">
                            <p className="cantidad-productos">{amount}</p>
                        </div>
                        </div>
                        </div>
                        <div className="foto-dermo">
                            <img src={file} alt="" />
                        </div>
                        <div className="info-display">
                            <p id="name">{name} </p>
                            <p id="price">{price}</p>  
                        <div className="buttons-display">
                            <button className="comprar">Comprar</button>
                            <button className="agregar"> Agregar</button>
                        </div>
                        </div>
                        </div>
        </div>
        
    </main>
     );
}

export default Carrito;