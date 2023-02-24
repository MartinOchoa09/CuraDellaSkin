import { useRef } from "react";
import Header from "../components/atoms/Header";

function FormContactanos() {

    const handlerClick = (e) => {
        e.preventdefault
    }

    const formData = useRef()

    return ( 
        <form action={formData}>
            <Header/>
            <div>
                <div>
                    <div>
                        <div><h1>Contactanos</h1></div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Nombre completo</label>    
                            <input type="text" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="">Email</label>
                            <input type="email" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Numero de telefono</label>
                            <input type="tel" placeholder="555-555-5555"/>
                        </div>
                        <div>
                            <label htmlFor="">Sexo</label>
                            <select>
                                <option>Hombre</option>
                                <option>Mujer</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Mensaje</label>
                        <input type="text" />
                    </div>
                    <button type="button" onClick={handlerClick}>Enviar</button>
                </div>
            </div>
            <div><img src="" alt="" /></div>
        </form>
     );
}

export default FormContactanos;