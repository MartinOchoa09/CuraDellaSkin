// import { useContext, useEffect, useState } from "react";
// import TokenContext from "../../context/TokenContext";
import Navbar from "./Navbar";
// import FormRutinas from "../molecules/FormRutinas";
function AgregarRutinas() {
    // const [rutina, setRutina] = useState([])
    // const {token, setToken} = useContext(TokenContext)

    // useEffect(() => {
    //     let url = "https://localhost:3000/rutinas"
    //     let options = {
    //         method: 'GET',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": `Bearer ${token}`
    //         }
    //     }
    //     fetch(url, options)
    //     .then(response => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         setRutina(data);
    //     })
    // },[])

    return (
    <>
        <Navbar/>
        
        

        {/* <div>
        <h1>RUTINAS</h1>
            {rutina.map(rutinas => 
            <>
                {console.log("esto es el character", rutinas)}
                <div key={rutinas._id}>
                    <FormRutinas key={rutinas.id}
                        name={rutinas.nombre}
                        categori={rutinas.categoria}
                        tipe={rutinas.tipo}
                        description={rutinas.descripcion}/>
                </div>
            </>)
            }
        </div> */}

    </> 
    );
}

export default AgregarRutinas;