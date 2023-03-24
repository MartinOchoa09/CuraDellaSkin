import Dermatologa from "../../assets/img/dermatologa.png"
import "../../assets/styles/Cards.css";

function Cards({amount, file, name, price}) {

    const handlerClick = (e) => {
        e.preventDefault();
    }

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
                            <button className="comprar" onClick={handlerClick}>Comprar</button>
                            <button className="agregar"> Agregar</button>
                        </div>
                        </div>
                        </div>
        </div>
        
    </main>

    );
}

export default Cards;







// import { useSelector } from "react-redux";
// import { useContext, useEffect, useState } from "react";
// import FormJabones from "../atoms/FormJabones";
// import LoadContext from "../../context/LoadContext";
// import "../../assets/styles/Cards.css";


// function Cards() {
//     const events = useSelector(state => state.events);
    
//     const [characters, setCharacters] = useState([])
//     const {load, setLoad} = useContext(LoadContext)

//     const handlerClick = (e) => {
//         e.preventDefault
//         setLoad(true)
//         console.log("si funciona")
//     }

//     useEffect(() =>{
//         console.log("useEffect")
//         fetch("https://localhost:3000/productos").then(response => response.json()).then(data => {
//             console.log(data)
//             setCharacters(data.results)
//         })
//     }, [load])

//     return (



        // <main className="divpadre">
        //      <button onClick={handlerClick}>Ver producto</button>
        //      <h1>Lista de eventos registrados</h1>
        //      {load && characters.map(character => <FormJabones keys={characters.id} amount={character.amount} file={character.file} name={character.name} price={character.price}/>)}
                // return 
                //     <>
                         {/* <div className="titulo-card">
                            <TitleCards/>
                        </div>
                        <div className="character">
                        <div className="cabezera" keys={event.id}>
                            <div className="divcabezera2">
                            <p>{Dermatologa}</p>
                            <div className="parrafos">
                            <p>Dermatologa</p>
                            <p>Angela</p>
                            </div>
                        <div className="Favorite">
                            <img src={event.amount} alt="" />
                        </div>
                        </div>
                        </div>
                        <div className="foto-dermo">
                            <img src={event.file} alt="" />
                        </div>
                        <div className="info-display">
                            <p id="name">{event.name} </p>
                            <p id="price">${event.price}.00</p>  
                        <div className="buttons-display">
                            <button className="comprar">Comprar</button>
                            <button className="agregar" onClick={boton}> Agregar</button>
                        </div>
                        </div>
                        </div> */}
                
            

            {/* <div className="character">
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

            
            <div className="character">
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
            </div>   */}
            // </>
                    {/* // <div keys={event.id}>
                    //     <p>ID: {event.id} Name: {event.name} Price: {event.price}</p>
                    // </div>
            //     )
            // })} */}
             
    // </main>
//      );
// }

// export default Cards;