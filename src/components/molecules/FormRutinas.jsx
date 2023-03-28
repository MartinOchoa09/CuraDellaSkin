import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import textureRutina from "../../assets/textures/texture-rutina.svg";
import textureRutinaSecundario from "../../assets/textures/texture-rutina-secundario.svg";
import TextoRutina from "./TextoRutina";
import AdminContext from "../../context/AdminContext";
import Navbar from "../atoms/Navbar";
import "../../assets/styles/Informacion.css";



function FormRutinas({ name, categori, tipe, description }) {

    const {isAdmin, setIsAdmin} = useContext(AdminContext)
    const navigate = useNavigate();

    const handlerClickRutina = (e) => {
        e.preventDefault();
        navigate("/recomendacion")
    }
    
    return ( 
        <>
        {isAdmin ? 
        (<>
        <Navbar/>
        <div class="container text-center">
            <div class="row">
            <form className="form-rutina">
                <div class="col">
                <img src={textureRutina} />
                <div className="texto-rutina">
                    <TextoRutina/>
                </div>
                <div className="button-rutina"><button onClick={handlerClickRutina}>Agregar</button></div>
                </div>
                <div class="col">
                <img src={textureRutinaSecundario} />
                <div className="texto-rutina">
                    <TextoRutina/>
                </div>
                <div className="button-rutina"><button onClick={handlerClickRutina}>Agregar</button></div>
                </div>
            </form>
        </div>
        </div>
                        {/* <main className="main-rutina">
                            
                                <div className="main-div-rutina">
                                    <div className="rutina-textura">
                                        <div className="texto-rutina">
                                            <div className="rutina-textura">
                                                
                                                </div>
                                                <div className="rutina-textura-secundario">
                                                    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                    </main> */}
        </>) 
        : (<>
         
                <main className="main-rutina">
                <form className="form-rutina">
                    <div className="main-div-rutina">
                        <div className="rutina-textura">
                        <div className="texto-rutina">
                            
                                        <table class="table">
                                        <thead>
                                            <tr>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Categoria</th>  
                                            <th scope="col">Tipo</th>
                                            <th scope="col">Descripcion</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">{name}</th>
                                                <td>{categori}</td>
                                                <td>{tipe}</td>
                                                <td>{description}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                
                                <div className="rutina-textura">
                                    <img src={textureRutina} />
                                    <div className="texto-rutina">
                                        <TextoRutina/>
                                    </div>
                                    </div>
                                    <div className="rutina-textura-secundario">
                                        <img src={textureRutinaSecundario} />
                                        <div className="texto-rutina">
                                            <TextoRutina/>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
        </main>
        </>) };
        
                            
        </>
     );
}

export default FormRutinas;