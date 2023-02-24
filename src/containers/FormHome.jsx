import Header from "../components/atoms/Header";
import Footer from "../components/atoms/Footer";
import Jabones from "../assets/img/Jabones.png";
import Dermolimpiadora from "../assets/img/Dermolimpiadora.png";
import ProtectorSolar from "../assets/img/ProtectorSolar.png";
import "../assets/styles/Home.css";
import { Link } from "react-router-dom";
function FormHome() {
    return (
    <div className="div-padre">
        <Header />
    <div className="container">
        <h1>Informacion de Problematicas ejemplo:</h1>
        <p>
            Una de las problematicas topicas faciales en la actualidad es el exceso de grasa y con esto una mayor probabilidad de acne en el resto de jovenes adolecentes y adultos el porcentaje es de un 70% de las personas que sufren desde acne hasta cancer en la piel. 
        </p>
    </div>
    <div className="categoria">
        <h1>Categoria de Productos</h1>
    </div>
    <div className="categoria-jabones">
            <div className="jabon">
                <Link><label><img src={Jabones} alt="jabon" />
                Jabones</label></Link>
            </div>
            <div className="dermo">
                <Link><label><img src={Dermolimpiadora} alt="Jabon Dermolimpiador" />
                Dermolimpiadoras</label></Link>
            </div>
            <div className="protector">
                <Link><label><img src={ProtectorSolar} alt="Protector Solar" />
                Protector Solar</label></Link>
            </div>
            </div>
    </div>
     );
}

export default FormHome;