import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Name from "../molecules/Name";
import Logo from "../../assets/icons/cdsSecundario.png";
import UserContext from "../../context/Usercontext";
import AdminContext from "../../context/AdminContext";
import "../../assets/styles/Login.css";



function FormLogin() {

    const navigate = useNavigate();
    const form = useRef();
    const {isLoged, setIsLoged} = useContext(UserContext);
    const {isAdmin, setIsAdmin} = useContext(AdminContext);

    
    const handlerClickLogin = (e) =>{
        e.preventDefault()
        const formData = new FormData(form.current);
        const username = formData.get("usuario");
        const contrasena = formData.get("password");
        const url = `https://localhost:3000/users/${username}/${contrasena}`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => {   
            console.log("datos", data)
            console.log("datos", data.datos[2])
            setIsLoged(true)
            setIsAdmin(data.datos[2])
            navigate("/")
        })
        .catch((err) => {
            console.log("Error", err)
        });
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