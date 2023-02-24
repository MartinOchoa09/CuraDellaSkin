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
    </div>
     );
}

export default FormHome;