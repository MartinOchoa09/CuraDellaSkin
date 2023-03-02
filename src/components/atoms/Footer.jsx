import { Link } from "react-router-dom";
import Contacts from "../../assets/icons/Contacts.png";
import Facebook from "../../assets/icons/Facebook.png";
import Gmail from "../../assets/icons/Gmail Logo.png";
import Instagram from "../../assets/icons/Instagram.png";
import Twitter from "../../assets/icons/Twitter.png";
import "../../assets/styles/Footer.css";

function Footer() {
    return ( 
            <div className="footer-container">
                <div className="footer-container-servicio">
                    <div><h3 className="h3">Servicio de plataforma</h3></div>
                    <div><Link to="/contactanos"><span className="footer-span">contacto</span></Link></div>
                    <div><Link to="/informacion"><span className="footer-span">Informacion</span></Link></div>
                    <div><Link to="/jabones"><span className="footer-span">Productos</span></Link></div>
                </div>
                <div className="footer-container-terminos">
                    <div><h3 className="h3">Terminos legales y condiciones</h3></div>
                    <div className="footer-container-terminos"><Link><span className="footer-terminos">Aceptar terminos legales</span></Link></div>
                </div>
                <div className="footer-container-contactanos">
                    <div><h3 className="h3">Contactos</h3></div>
                    <div>
                        <img src={Contacts} alt="Icono contactos"/>
                        <label className="footer-span">918-107-1656</label>
                    </div>
                    <div>
                        <img src={Contacts} alt="Icono contactos"/>
                        <label className="footer-span">965-119-3170</label>
                    </div>
                    <div><h3 className="h3">Siguenos en:</h3></div>
                    <div className="footer-container-contactanos-iconos">
                        <div><Link to="https://www.facebook.com/profile.php?id=100090780844811&sk=photos"><img src={Facebook} alt="Icono Facebook" /></Link></div>
                        <div><img src={Gmail} alt="Icono Gmail" /></div>
                        <div><img src={Instagram} alt="Icono instagram" /></div>
                        <div> <img src={Twitter} alt="Icono Twitter" /></div>
                    </div>
                </div>
            </div>
       
     );
}

export default Footer;