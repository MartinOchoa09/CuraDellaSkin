import Dermatologa from "../../assets/img/dermatologa.png"
import Favorite from "../../assets/icons/Favorite.png"
import Dermolimpiadora from "../../assets/img/Dermolimpiadora.png"

import "../../assets/styles/Cards.css" ;


function Cards() {
    const boton = () => {
        alert("Agregado al carrito")
        
    }
    return (  
        <div className="divpadre">
            <div className="divcard">
            <div className="cabezera">
                <div className="divcabezera2">
                <img  src={Dermatologa} alt="" id="foto"/>
                 <div className="parrafos">
                 <p>Dermatologa</p>
                 <p>Angela</p>
                </div>
            <div className="Favorite">
                <img src={Favorite} alt="" />
            </div>
            </div>
            </div>
            <div className="foto-dermo">
                <img src={Dermolimpiadora} alt="" />
            </div>
            <div className="info-display">
            <p id="name">Crema espumosa dermolimpiadora </p>
            <p id="price">$750.00</p>  
            <p>Crema dermolimpiadora uso diario con efecto suave e hidratante</p>
            <div className="buttons-display">
           <button className="comprar">Comprar</button>
           <button className="agregar" onClick={boton}> Agregar</button>
            </div>
            </div>
            </div>
                
            

            <div className="divcard">
            <div className="cabezera">
                <div className="divcabezera2">
                <img  src={Dermatologa} alt="" id="foto"/>
                 <div className="parrafos">
                 <p>Dermatologa</p>
                 <p>Angela</p>
                </div>
            <div className="Favorite">
                <img src={Favorite} alt="" />
            </div>
            </div>
            </div>
            <div className="foto-dermo">
                <img src={Dermolimpiadora} alt="" />
            </div>
            <div className="info-display">
            <p>Crema espumosa dermolimpiadora </p>
            <p>$550.00</p>  
            <p>Crema dermolimpiadora con efecto suave e hidratante</p>
            <div className="buttons-display">
           <button className="comprar">Comprar</button>
           <button className="agregar"> Agregar</button>
            </div>
            </div>
            </div>

            
            <div className="divcard">
            <div className="cabezera">
                <div className="divcabezera2">
                <img  src={Dermatologa} alt="" id="foto"/>
                 <div className="parrafos">
                 <p>Dermatologa</p>
                 <p>Angela</p>
                </div>
            <div className="Favorite">
                <img src={Favorite} alt="" />
            </div>
            </div>
            </div>
            <div className="foto-dermo">
                <img src={Dermolimpiadora} alt="" />
            </div>
            <div className="info-display">
            <p>Crema espumosa dermolimpiadora </p>
            <p>$950.00</p>  
            <p>Crema dermolimpiadora uso diario con hidratante</p>
            <div className="buttons-display">
           <button className="comprar">Comprar</button>
           <button className="agregar"> Agregar</button>
            </div>
            </div>
            </div>
            
           
    </div>
     );
}

export default Cards;