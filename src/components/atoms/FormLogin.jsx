import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Name from "../molecules/Name";
import Logo from "../../assets/icons/cdsSecundario.png";
import "../../assets/styles/Login.css";
import UserContext from "../../context/Usercontext";


function FormLogin() {

    const navigate = useNavigate();
    const form = useRef();
    const {isLoged, setIsLoged} = useContext(UserContext);
    
    const handlerClickLogin = (e) =>{
        e.preventDefault()
        const formData = new FormData(form.current);
        const username = formData.get("usuario");
        const contrasena = formData.get("password");
        const url = `https://cds.iothings.com.mx:3000/users/${username}/${contrasena}`;

        fetch(url)
        .then((response) => response.json())
        .then((data) => {   
            console.log("datos", data)})
        .catch((err) => {
            console.log(err)
        });
        setIsLoged(true)
        navigate("/")
    };
    
    
    return ( 
        <main className="form-display">
        <form ref={form} className="form-display-form">
        <div className="form-login">
            <div className="imagen-empresa">
                <Link to="/"><img src={Logo} alt="logo de la empresa" className="img"/></Link>
                <Name msn="Cura Della Skin"/>
            </div>
            <div className="form-login-secundario">
            <div className="form-login-username">
                <label>Username</label>
                <input type="text" name="usuario"/>
            </div>
            <div className="form-login-password">
                <label>Contraseña</label>
                <input type="password" name="password"/>
            </div>
            <div className="form-login-iniciosesion">
                <button onClick={handlerClickLogin}>Iniciar Sesión</button>
                <Link to="/forgotPassword" className="forgotPassword">¿Olvidaste tu contraseña?</Link>
            </div>
            </div>
            <div className="form-login-register">
                <Link to="/register" className="link-register">Registrar una cuenta</Link>
            </div>
        </div>
        </form>
        </main>
     );
}

export default FormLogin;