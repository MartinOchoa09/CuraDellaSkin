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
                        La Dra Reme, nos comenta. El acné es un problema cutáneo que acompaña a muchas personas. Algunos brotes se dan según estación, por lo que nosotros ya te dimos algunas soluciones para reducir ese acné estacional. Ahora te vamos a ofrecer una rutina de limpieza facial adecuada para ti. 
                        Durante la primavera, las personas suelen tener esos granitos que se dan porque hace más calor, la piel suda, la sangre se altera… Lo que es la primavera y la llegada de un mejor tiempo. En algunos casos las espinillas, los granitos, las rojeces… También salen por cambios hormonales. Para ello, tienes que consultar con tu médico qué puedes tomar, ya que a lo mejor necesitas medicación.
                    </p>
                </div>
            </div>
            <div className="video-texto-tutoriales-secundario">
                <div className="video-tutoriales-secundario">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/GdGH60V-pPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="texto-tutoriales-secundario">
                    <p>
                        La Dra Daniela, nos explica. Lo primero es buscar una solución y objetivo para que todos los poros se se cierren ante las impurezas ya eliminadas. Mantener la cara limpia durante todo el día evitará que los poros se obstruyan y que se generen imperfecciones.
                        El mejor limpiador facial que puedes buscar para este tipo de pieles tiene que se aquellos en gel, pastilla de jabón o espuma, nunca los que son en formato leche ya que suelen tener una mayor cantidad de aceite. Y eso es lo que estamos evitando. Muchos productos ya son Oil-free, fíjate muy bien cuando lo compres.
                    </p>
                </div>
            </div>
            <div className="video-texto-tercero">
                <div className="video-tutoriales-tercero">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Gpdwdr8Mcqo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="texto-tutoriales-tercero">
                    <p>
                        El Dr Simon, nos comenta. En las pieles grasas es necesario regular el exceso de sebo, pues es el responsable de que aparezcan esos molestos granitos. Por ello, en tu rutina diaria matutina es necesario que no te olvides de ninguno de los pasos anteriores. Sobre todo, del protector solar.
                        Si no tienes plena confianza en introducir la rutina de doble limpieza mañana y noche, no te preocupes. Con hacerla por las noches sería suficiente, pero, eso sí, no dejes de limpiarte el rostro nada más levantarte.
                    </p>
                </div>
            </div>
        </main>
        </>
     );
}

export default FormTutoriales;