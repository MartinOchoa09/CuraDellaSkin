import { useContext, useRef } from "react";

import { useNavigate } from "react-router-dom";

import TokenContext from "../../context/TokenContext";


function FormAgregarProducto() {
    const navigate = useNavigate()
    const forms = useRef()
    

    

    

    return ( 
        <>
            <div className="title-agregar-productos">
                <h1>Agregar producto</h1>
            </div>
        
        </>
     );
}

export default FormAgregarProducto;