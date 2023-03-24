import Navbar from "./Navbar";
import "../../assets/styles/Tutoriales.css";

function FormTutoriales() {
    return ( 
        <>
            <Navbar/>
        <main className="main-padre-tutoriales">
            <div className="titulo-tutoriales">
            <h1>VideoTutoriales</h1>
            </div>
            <div className="video-texto-tutoriales">
                <div className="video-tutoriales">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/z4FUWflB4gg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="texto-tutoriales">
                    <p>
                        La Dra Reme, nos enseña en este video sobre como tener una rutina completa para las personas con acne y piel grasosa.
                    </p>
                </div>
            </div>
            <div className="video-texto-tutoriales-secundario">
                <div className="video-tutoriales-secundario">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/GdGH60V-pPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="texto-tutoriales-secundario">
                    <p>
                        La Dra Daniela, nos explica el orden correcto para una rutina SkinCare, para ver cambios ràpidos y eficaces.
                    </p>
                </div>
            </div>
            <div className="video-texto-tercero">
                <div className="video-tutoriales-tercero">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Gpdwdr8Mcqo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="texto-tutoriales-tercero">
                    <p>
                        El Dr Simon, nos enseña los pasos correctos para nuestra rutina SkinCare, los productos que podrian ir al inicio, intermedio y final.
                    </p>
                </div>
            </div>
        </main>
        </>
     );
}

export default FormTutoriales;