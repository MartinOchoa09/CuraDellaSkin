import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function FormRegister() {
    const navigate = useNavigate()

    const formRegister = useRef()

    const handlerClick = (e) =>{
        
        const form = new FormData(formRegister.current)
    
        let uri = "https://cds.iothings.com.mx:3000/users";
        let options ={
            method: 'POST',
            headers: {"Content-Type": 'application/json'},
            body:JSON.stringify({
              apellido: form.get('apellido'),
              nombre: form.get('nombre'),
              edad: form.get('edad'),
              username: form.get('username'),
              correo: form.get('correo'),
              contrasena: form.get('contrasena'),
              fecha_nacimiento: form.get('fechaN'),
              sexo: form.get('hombre'),
            })
        }
        fetch(uri, options)
        .then(response =>response.json())
        .then(data=>alert(JSON.stringify(data)))
        alert("Su registro ha sido exitoso!")
        navigate("/login")
        

    }

    return ( 
        <form ref={formRegister}>
            <div>
                <div>
                <h1>Registro</h1>
                <h3>Es rapido y facil</h3>
                </div>
                <div>
                    <label>Apellido</label>
                    <input type="text" name="apellido"/>
                </div>
                <div>
                    <label>Nombre</label>
                    <input type="text" name="nombre"/>
                </div>
                <div>
                    <label>Edad</label>
                    <input type="number" name="edad"/>
                </div>
                <div>
                    <div>
                        <label>Correo Electronico</label>
                        <input type="email" name="correo"/>
                    </div>
                    <div>
                        <div>
                            <label>Username</label>
                            <input type="text" name="usuario"/>
                        </div>
                        <div>
                            <label>Contraseña</label>
                            <input type="password" name="contrasena"/>
                        </div>
                    </div>
                    <div>
                        <label>Fecha de nacimiento</label>
                        <input type="date" name="fechaN"/>
                    </div>
                    <div>
                       <label>Sexo</label>
                       <div>
                        <input type="radio" placeholder="Hombre" name="hombre"/>Hombre
                        <input type="radio" placeholder="Mujer" name="mujer"/>Mujer
                        <input type="text" placeholder="Género (opcional)" name="opcional"/>
                       </div>
                    </div>
                    <button onClick={handlerClick}>Registrarme</button>
                </div>
            </div>
        </form>
     );
}

export default FormRegister;