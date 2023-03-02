import { useState, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/Usercontext";
import Name from "../molecules/Name";


function FormLogin() {

    const [stateForm, setStateForm] = useState({username: '', password: ''})
    const {isLoged, setIsLoged} = useContext(UserContext);
    const form = useRef();
    const navigate = useNavigate();

    const handlerClick = (e) => {
        const formLogin = new FormData(form.current)
        let uri = "https://cds.iothings.com.mx:3000/users";
        let option={
            method: 'POST',
            headers:{"Content-Type": 'application/json'},
            body: JSON.stringify({
                username: formLogin.get('username'),
                password: formLogin.get('password')
            })
        }
        setIsLoged(true)
        fetch(uri, option)
        .then(response=>response.json())
        .then(data=>alert(JSON.stringify(data)))
        navigate('/')
    }
    return ( 
        <form ref={form}>
        <div className="form-login">
            <div className="form-login-secundario">
            <img src="" alt="logo de la empresa" />
            <Name msn="Cura Della Skin"></Name>
            <div className="form-login-username">
                <label>Username</label>
                <input type="text" name="username"/>
            </div>
            <div className="form-login-password">
                <label>Contraseña</label>
                <input type="password" name="password"/>
            </div>
            <div className="form-login-iniciosesion">
                <button onClick={handlerClick}>Iniciar Sesion</button>
                <Link to="forgotPassword">Recuperar contraseña</Link>
            </div>
            </div>
            <div className="form-login-register">
                ¿No tienes cuenta?<Link to="/register">Registrate ahora</Link>
            </div>
        </div>
        </form>
     );
}

export default FormLogin;