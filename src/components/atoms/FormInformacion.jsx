import HeaderTerciario from "./HeaderTerciario";
import TitleRutinas from "../molecules/Title-Rutinas";
import imagen from "../../assets/img/imagen-informacion.png";
import imagenSecundaria from "../../assets/img/imagen-informacion-segunda.png";
import RutinasInformacion from "../molecules/rutinas-informacion";
import RutinasInformacionSecundaria from "../molecules/Rutinas-Informacion-Secundaria";
import "../../assets/styles/Informacion.css";

function FormInformacion() {
    return (
        <div className="div-padre">
            <HeaderTerciario/>    
            <div className="div-padre-hijo">
                <h1><TitleRutinas/></h1>
                <div>
                    <img src={imagen} alt="primer imagen" />
                    <RutinasInformacion/>
                </div>
                <div>
                    <img src={imagenSecundaria} alt="imagen secundaria" />
                    <RutinasInformacionSecundaria/>
                </div>
            </div>
        </div>
     );
}

export default FormInformacion;