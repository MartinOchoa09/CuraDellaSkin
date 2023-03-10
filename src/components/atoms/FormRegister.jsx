import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/Registro.css";

function FormRegister() {
    const navigate = useNavigate()
    const formRegister = useRef()

    const [framework, setFramework] = useState("Hombre");

    const cambioRadioFramework = e =>{
        setFramework(e.target.value);
    }

    const handlerClick = (e) =>{
        
        const form = new FormData(formRegister.current)
    
        let uri = "https://cds.iothings.com.mx:3000/users";
        let options = {
            method: 'POST',
            headers: {"Content-Type": 'application/json'},
            body:JSON.stringify({
              apellido: form.get('apellido'),
              nombre: form.get('nombre'),
              edad: form.get('edad'),
              username: form.get('usuario'),
              correo: form.get('correo'),
              password: form.get('contrasena'),
              fecha_nacimiento: form.get('fechaN'),
              sexo: form.get('sexo'),
            })
        }
        fetch(uri, options)
        .then(response =>response.json())
        .then(data=>alert(JSON.stringify(data), "Su registro ha sido exitoso!"))
        
        navigate("/login")
        
    }

    const handlerHandlerClick = (e) =>{
        navigate("/")
    }

    return ( 
        <main className="main-padre">
        <form ref={formRegister} className="form-padre">
            <div className="registro-hijo">
                <div className="titulos">
                <h1>Registro</h1>
                <h3>Es rapido y facil</h3>
                </div>

                <label>Apellido</label>
                <input type="text" name="apellido"/>
               
                <label>Nombre</label>
                <input type="text" name="nombre"/>
                
                <label>Edad</label>
                <input type="number" name="edad"/>
             
                <label>Correo Electronico</label>
                <input type="email" name="correo"/>

                <div className="registro-usuario-contrasena">
                    <div className="registro-usuario">
                        <label>Username</label>
                        <input type="text" name="usuario"/>
                    </div>
                
                    <div className="registro-contrasena">
                        <label>Contraseña</label>
                        <input type="password" name="contrasena"/>
                    </div>
                </div>

                <label>Fecha de nacimiento</label>
                <input type="date" name="fechaN"/>
                
                <label>Sexo</label>
                <div className="sexualidad">
                    <div className="sexo-hombre">Hombre <input id="radio1" type="radio" value="Hombre" name="sexo" checked={framework == "Hombre" ? true : false} onChange={cambioRadioFramework}/></div>
                    <div className="sexo-mujer">Mujer <input id="radio2" type="radio" value="Mujer" name="sexo" checked={framework == "Mujer" ? true : false} onChange={cambioRadioFramework}/></div>
                    <div className="sexo-indefinido">Prefiero no decirlo <input id="radio3" type="radio" value="Indefinido" name="sexo" checked={framework == "Indefinido" ? true : false} onChange={cambioRadioFramework}/></div>
                </div>
                <div className="registro-hijo-botones">
                <button onClick={handlerClick} className="registro-hijo-registro">Registrarme</button>
                <button onClick={handlerHandlerClick}>Cancelar</button>
                </div>

            </div>
        </form>
        </main>
     );
}

export default FormRegister;