import { useContext } from "react";
import textureRutina from "../../assets/textures/texture-rutina.svg";
import textureRutinaSecundario from "../../assets/textures/texture-rutina-secundario.svg";
import Navbar from "../atoms/Navbar";
import TextoRutina from "../molecules/TextoRutina";
import AdminContext from "../../context/AdminContext";
import "../../assets/styles/Informacion.css";
function FormRutinas() {

    const {isAdmin, setIsAdmin} = useContext(AdminContext)
    
    return ( 
        <>
        <Navbar/>
        {isAdmin ? 
        (<>
        <main className="main-rutina">
            <form className="form-rutina">
                <h1>RUTINAS</h1>
                <div className="main-div-rutina">
                    <div className="rutina-textura">
                       <img src={textureRutina} />
                       <div className="texto-rutina"><TextoRutina/></div>
                       <div className="button-rutina"><button>Agregar</button></div>
                    </div>
                    <div className="rutina-textura-secundario">
                        <img src={textureRutinaSecundario} />
                        <div className="texto-rutina"><TextoRutina/></div>
                        <div className="button-rutina"><button>Agregar</button></div>
                    </div>
                </div> 
            </form>
        </main>
        </>) 
        : (<>
        <main className="main-rutina">
            <form className="form-rutina">
                <h1>RUTINAS</h1>
                <div className="main-div-rutina">
                    <div className="rutina-textura">
                       <img src={textureRutina} />
                       <div className="texto-rutina"><TextoRutina/></div>
                    </div>
                    <div className="rutina-textura-secundario">
                        <img src={textureRutinaSecundario} />
                        <div className="texto-rutina"><TextoRutina/></div>
                    </div>
                </div> 
            </form>
        </main>
        
        </>) };
        </>
     );
}

export default FormRutinas;