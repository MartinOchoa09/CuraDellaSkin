import { Link, useNavigate } from "react-router-dom";
import { useRef, useContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Jabones from "../../assets/img/Jabones.png";
import Dermolimpiadora from "../../assets/img/Dermolimpiadora.png";
import ProtectorSolar from "../../assets/img/ProtectorSolar.png";
import TittleCDS from "../molecules/TitleCDS";
import SobreCDS from "../molecules/SobreCDS";
import imgTutoriales from "../../assets/img/imgTutoriales.png";
import UserContext from "../../context/Usercontext";
import Dermatologa from "../../assets/img/dermatologa.png";
import "../../assets/styles/Home.css";
import "../../assets/styles/Contactanos.css";


function FormHome() {

        const navigate = useNavigate()
        const forms = useRef()
        const [load, setIsLoad] = useState(true)
        const {isLoged, setIsLoged} = useContext(UserContext)

    const handlerClickLogin = (e) => {
        if(setIsLoad(!load)){
            alert("Su correo se ha enviado con exito")
        }else{
            alert("Tienes que iniciar sesión")
            navigate("/login")
        }
        // if (isLoged) {
        //     alert("Su correo se ha enviado con exito")
        // }else{
        //     alert("Usted tiene que estar registrado")
        //     navigate("/login");
        // }
    }
    return (
    <div className="div-padre">
        <Header />
    <div className="container">
        <h2>Informacion de Problematicas ejemplo:</h2>
        <p>
            Una de las problematicas topicas faciales en la actualidad es el exceso de grasa y con esto una mayor probabilidad de acne en el resto de jovenes adolecentes y adultos el porcentaje es de un 70% de las personas que sufren desde acne hasta cancer en la piel. 
        </p>
    </div>
    <div className="categoria">
        <h1 className="edicion-h1">Categoria de Productos</h1>
    </div>
    <div className="categoria-jabones">
        <div className="contenedor">
            <div className="jabon"><Link to="/jabones"><img src={Jabones} alt="" className="jabon"/><h3>Jabones</h3></Link></div>
            <div className="dermo"><Link to="/dermolimpiadores"><img src={Dermolimpiadora} alt="" className="dermo"/><h3>Dermolimpiadores</h3></Link></div>
            <div className="protector"><Link to="/protectores"> <img src={ProtectorSolar} alt="" className="protector"/><h3>Protector Solar</h3></Link></div>
        </div>
    </div>
    <div className="cura-della-skin">
        <div className="texto-cura-della-skin">
            <div className="titulo-cds">
                <TittleCDS/>
                <SobreCDS/>
            </div>
            <div className="tutoriales-cds">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/d4RB0_R59EY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
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
    <Footer/>
    </div>
     );
}

export default FormHome;