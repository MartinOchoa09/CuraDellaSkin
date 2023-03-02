import { Link, useNavigate } from "react-router-dom";
import { useRef, useContext } from "react";
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

    const {isLoged, setIsLoged} = useContext(UserContext)
    const navigate = useNavigate()
        const formData = useRef()

    const handlerClickLogin = (e) => {
        e.preventdefault
        if (isLoged) {
            alert("Su correo se ha enviado con exito")
        }else{
            alert("Usted tiene que estar registrado")
            navigate("/login");
        }
    }

    return (
        <form ref={formData}>
    <div className="div-padre">
        <Header />
    <div className="container">
        <h2>Informacion de Problematicas ejemplo:</h2>
        <p>
            Una de las problematicas topicas faciales en la actualidad es el exceso de grasa y con esto una mayor probabilidad de acne en el resto de jovenes adolecentes y adultos el porcentaje es de un 70% de las personas que sufren desde acne hasta cancer en la piel. 
        </p>
    </div>
    <div className="categoria">
        <h1>Categoria de Productos</h1>
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
                <Link><img src={imgTutoriales} alt="link para el apartado de tutoriales" /></Link>
            </div>
        </div>
    </div>
    <div className="contactanos-clase-padre">
                <h1 className="contactanos-hijo-title">Contactanos</h1>
                <div className="contactanos-hijo">
                    <div className="informacion">
                        <div className="contactanos-hijo-nombre">
                            <label>Nombre completo</label>
                            <input type="text"/>
                        </div>
                        <div className="separacion">
                            <label>Email</label>
                            <input type="email" />
                        </div>
                    </div>
                    <div className="contactanos-hijo-personal">
                        <div className="contactanos-hijo-personal-numero">
                            <label>Numero de telefono</label>
                            <input type="tel" placeholder="555-555-5555"/>
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
                        <button onClick={handlerClickLogin}>Enviar</button>
                    </div>
                </div>
                    <div className="textura">
                        <img src={Dermatologa} className="dermatologa" />
                    </div>
        </div>
    <Footer/>
    </div>
    </form>
     );
}

export default FormHome;