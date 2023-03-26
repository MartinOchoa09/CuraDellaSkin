import { Link, useNavigate } from "react-router-dom";
import { useRef, useContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SobreCDS from "../molecules/SobreCDS";
import UserContext from "../../context/Usercontext";
import Dermatologa from "../../assets/img/dermatologa.png";
import CategoriaJabones from "../molecules/CategoriaJabones";
import "../../assets/styles/Home.css";
import "../../assets/styles/Contactanos.css";


function FormHome() {

        const navigate = useNavigate()
        const forms = useRef()
        
        const {isLoged, setIsLoged} = useContext(UserContext)

    const handlerClickLogin = (e) => {
        if(!isLoged){
            alert("Tienes que iniciar sesión")
            navigate("/login")
        }else{
            alert("Su correo se ha enviado con exito")
        }
    }
    return (
    <main className="div-padre">
        <Header />
        <CategoriaJabones />
            <div class="container sobrecds-video">
                <div class="row">
                    <div class="col texto-sobrecds">
                        <div className="texto-secundario-sobrecds">
                            <p class="text-muted mb-0 parrafo"><SobreCDS/></p>
                        </div>
                    </div>
                    <div class="col video-informativo">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/d4RB0_R59EY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        <div class="col-12">
        <form ref={forms}>
    <div className="contactanos-clase-padre">
                <h1 className="contactanos-hijo-title">Contactanos</h1>
                <div className="contactanos-hijo">
                    <div className="informacion">
                        <div className="contactanos-hijo-nombre">
                            <label>Nombre completo</label>
                            <input type="text"/>
                        </div>
                        <div className="separacion">
                            <label>Numero de telefono</label>
                            <input type="tel" placeholder="555-555-5555"/>
                            
                        </div>
                    </div>
                    <div className="contactanos-hijo-personal">
                        <div className="contactanos-hijo-personal-numero">
                            <label>Email</label>
                            <input type="email" />
                        </div>
                        <div className="separacion">
                            <label>Sexo</label>
                            <select>
                                <option value="Hombre">Hombre</option>
                                <option value="Mujer">Mujer</option>
                            </select>
                        </div>
                    </div>
                    <div className="block">
                        <label>Mensaje</label>
                        <textarea rows="3"></textarea>
                    </div>
                    <div className="button-enviar">
                        <button onClick={handlerClickLogin} className="button-contactanos">Enviar</button>
                    </div>
                </div>
                    <div className="textura">
                        <img src={Dermatologa} className="dermatologa" />
                    </div>
        </div>
        </form>
        </div>
        <Footer/>
    </main>
     );
}

export default FormHome;