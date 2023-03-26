import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import TokenContext from "../../context/TokenContext";
import "../../assets/styles/Registro.css";

function FormRegister() {
    const navigate = useNavigate()
    const formRegister = useRef()

    const [framework, setFramework] = useState("Hombre");
    const {isToken, setIsToken} = useContext(TokenContext);

    const cambioRadioFramework = e =>{
        setFramework(e.target.value);
    }

    const handlerClick = (e) =>{
        
        const form = new FormData(formRegister.current)
    
        let uri = "https://localhost:3000/users";
        let options = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${isToken}`
        },
            body:JSON.stringify({
              apellido: form.get('apellido'),
              nombre: form.get('nombre'),
              username: form.get('usuario'),
              correo: form.get('correo'),
              password: form.get('contrasena'),
              fecha_nacimiento: form.get('fechaN'),
              sexo: form.get('sexo'),
              admin: false,
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
        <>
        <div id="id_dario">
            <h1 className="registro-titulo-principal">Registrarte</h1>
            <h2 className="registro-subtitulo-principal">Es rápido y fácil</h2>
        </div>
        <form class="row g-3 formulario-registro-usuario" ref={formRegister}>
            <div class="row g-3 div-registro-usuario">
                <div class="col-12">
                    <label for="inputAddress" class="form-label label-registro-usuario">Apellido</label>
                    <input type="text" class="form-control input-registro-usuario" id="inputAddress" name="apellido"/>
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label label-registro-usuario">Nombre</label>
                    <input type="text" class="form-control input-registro-usuario" id="inputAddress" name="nombre"/>
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label label-registro-usuario">Correo electronico</label>
                    <input type="email" class="form-control input-registro-usuario" id="inputAddress" placeholder="user@gmail.com" name="correo"/>
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label label-registro-usuario">Username</label>
                    <input type="text" class="form-control input-registro-usuario" id="inputEmail4" name="usuario"/>
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label label-registro-usuario">Contraseña</label>
                    <input type="password" class="form-control input-registro-usuario" id="inputPassword4" name="contrasena"/>
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label label-registro-usuario">Fecha de nacimiento</label>
                    <input type="date" class="form-control input-registro-usuario" id="inputAddress" name="fechaN"/>
                </div>
                <label for="inputAddress" class="form-label label-registro-usuario">Sexo</label>
                <div class="container text-center">
                    <div class="row">
                        <div class="col radio-registro">
                            <label class="form-check-label" for="inlineRadio1">Hombre</label>
                            <input class="form-check-input input-radio-registro" type="radio" value="Hombre" id="radio1" name="sexo" checked={framework == "Hombre" ? true : false} onChange={cambioRadioFramework}/>
                        </div>
                        <div class="col radio-registro">
                            <label class="form-check-label" for="inlineRadio2">Mujer</label>
                            <input class="form-check-input input-radio-registro" type="radio" id="radio2" value="Mujer" name="sexo" checked={framework == "Mujer" ? true : false} onChange={cambioRadioFramework}/>
                        </div>
                        <div class="col radio-registro">
                            <label class="form-check-label" for="inlineRadio3">Prefiero no decirlo</label>
                            <input class="form-check-input input-radio-registro" type="radio" id="radio3" value="Indefinido" name="sexo" checked={framework == "Indefinido" ? true : false} onChange={cambioRadioFramework}/>
                        </div>
                    </div>
                </div>
                <div className="col-md botones-registrar">
                    <button type="button" class="btn btn-primary btn-lg registrar-boton" onClick={handlerClick}>Registrarme</button>
                    <button type="button" class="btn btn-secondary btn-lg cancelar-boton" onClick={handlerHandlerClick}>Cancelar</button>
                </div>
            </div>
        </form>
        </>
     );
}

export default FormRegister;