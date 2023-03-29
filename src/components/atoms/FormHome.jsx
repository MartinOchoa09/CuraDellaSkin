import { useNavigate } from "react-router-dom";
import { useRef, useContext } from "react";
import { useDispatch } from "react-redux";
import LoadContext from "../../context/LoadContext";
import InputFile from "../molecules/InputFile";
import Header from "./Header";
import Footer from "./Footer";
import SobreCDS from "../molecules/SobreCDS";
import UserContext from "../../context/Usercontext";
import Dermatologa from "../../assets/img/dermatologa.png";
import CategoriaJabones from "../molecules/CategoriaJabones";
import AdminContext from "../../context/AdminContext";
import HeaderAdmin from "./HeaderAdmin";
import TokenContext from "../../context/TokenContext";
import "../../assets/styles/Home.css";
import "../../assets/styles/Contactanos.css";
import "../../assets/styles/Productos.css";
import "../../assets/styles/AgregarRecomendacion.css";
import { Chart, Title } from "chart.js";


function FormHome() {

        const navigate = useNavigate()
        const forms = useRef()
        const formRutina = useRef()
        const formProducto = useRef()
        const dispatch = useDispatch()

        const {load, setLoad} = useContext(LoadContext)
        const {isLoged, setIsLoged} = useContext(UserContext)
        const {isAdmin, setIsAdmin} = useContext(AdminContext)
        const {token, setToken} = useContext(TokenContext)

        const handlerClick = (e) => {
            e.preventDefault();
            const formData = new FormData(forms.current)
            let url = "https://localhost:3000/productos";
    
            let options = {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/JSON',
                    "Authentication": `Bearer ${token}`
            },
                body: JSON.stringify({
                    nombre: formData.get('name'),
                    categoria: formData.get('category'),
                    imagen: toString(formData.get('file')),
                    precio: formData.get('price'),
                    cantidad: formData.get('amount')
                })
            }
    
            dispatch({
                type: "ADD_EVENT",
                value: {
                    nombre: formData.get('name'),
                    categoria: formData.get('category'),
                    imagen: toString(formData.get('file')),
                    precio: formData.get('price'),
                    cantidad: formData.get('amount')
                }
            })
            fetch(url, options)
            .then(response => response.json())
            .then(data => alert(JSON.stringify(data), "Registro de producto exitoso"))
            .catch(err => console.log(err))
            
            load ? alert("producto agregado") : alert("llene todos los campos");
        }

        const handlerClickNavigate = (e) => {
            console.log("si funciona")
            e.preventDefault()
            
            setLoad(true)
            navigate("/jabones");
        }
    
        const handlerClickAgregar = (e) => {
            const form = new FormData(formRutina.current);
            
            let url = "https://localhost:3000/rutinas";
    
            let options ={
                method: 'POST',
                headers: {"Content-Type": "application-json",
                "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    nombre: form.get('name'),
                    categoria: form.get('categori'),
                    tipo: form.get('tipe'),
                    descripcion: form.get('description')
                })
            }
            fetch(url, options)
            .then(response => response.json())
            .then(data => alert(JSON.stringify(data), "Rutina agregada"));
    
        }
    
        const handlerClickProductos = (e) => {
            navigate("/rutinas")
        }

    const handlerClickLogin = (e) => {
        if(!isLoged){
            alert("Tienes que iniciar sesión")
            navigate("/login")
        }else{
            alert("Su correo se ha enviado con exito")
        }
    }
    return (
<>
        {
            isAdmin ? (<>
            <main className="div-padre">
                    <HeaderAdmin />
                    <div className="titulo-de-mas-vendidos">
                        <h1>Productos mas vendidos</h1>
                    </div>
                    <div>
                    <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Unidades</th>
                        <th scope="col">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Jabon</td>
                        <td>30</td>
                        <td>$7500</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Protector solar</td>
                        <td>20</td>
                        <td>$6000</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Crema dermolimpiadora</td>
                        <td>15</td>
                        <td>$5500</td>
                        </tr>
                    </tbody>
                    </table>
                    </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-6">
                                <h1 className="title-agregar-productos">Agregar rutina</h1>
                                <form ref={formRutina}>
                                        <div class="row g-2 div-padre-recomendacion">
                                            <div className="row g-2 div-contenedor-recomendacion">
                                            <div class="col-md">
                                                <label for="floatingSelectGrid" className="label-recomendacion">Nombre</label>
                                                <div class="form-floating">
                                                    <input type="text" class="form-control input-recomendacion" id="floatingInputGrid" name="name"/>
                                                </div>
                                            </div>
                                            <div class="col-md">
                                            <label for="floatingSelectGrid" className="label-recomendacion">Categoria</label>
                                                <div class="form-floating">
                                                    <select class="form-select input-recomendacion" id="floatingSelectGrid" name="categori">
                                                        <option selected>Categorías</option>
                                                        <option value="1">Limpieza</option>
                                                        <option value="2">Exfoliación</option>
                                                        <option value="3">Hidratación</option>
                                                    </select>
                                                </div>
                                            </div>
                                                <label for="floatingInput" className="label-recomendacion">Tipo</label>
                                                <div class="form-floating mb-3">
                                                    <input type="text" class="form-control input-recomendacion" id="floatingInput" name="tipe"/>
                                                </div>
                                                <label for="floatingTextarea2" className="label-recomendacion">Descripción</label>
                                                <div class="form-floating">
                                                    <textarea class="form-control input-recomendacion" id="floatingTextarea2" name="description"></textarea>
                                                </div>
                                                <div class="col-md div-botones">
                                                    <button type="button" class="btn btn-primary btn-lg boton-agregar-recomendacion" onClick={handlerClickAgregar}>Agregar</button>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                                <div class="col-6">
                                <h1 className="title-agregar-productos">Agregar productos</h1>
                                <form ref={formProducto} className="form-productos">
                                            <div className="main-nombre-categoria">
                                                <div>
                                                    <label>
                                                        Nombre
                                                    </label>
                                                        <input type="text" className="form-control input-recomendacion" name="name"/>
                                                </div>
                                                <div>
                                                    <label>Categoria</label>
                                                    <select name="category" className="form-control input-recomendacion">
                                                        <option>Tipo de Jabones</option>
                                                        <option name="Jabones">jabones</option>
                                                        <option name="Dermolimpiadoras">Cremas Dermolimpiadoras</option>
                                                        <option name="Protectores">Protector Solar</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="main-precio-cantidad">
                                                <div>
                                                    <label>
                                                        Precio
                                                    </label>
                                                        <input type="number" className="form-control input-recomendacion" name="price"/>
                                                </div>
                                                <div>
                                                    <label>
                                                        Cantidad
                                                    </label>
                                                        <input type="number" className="form-control input-recomendacion" name="amount"/>
                                                </div>
                                            </div>
                                            <div className="conteiner-mf">
                                                <div className="main-fotos">
                                                    <InputFile/>
                                                </div>
                                            </div>
                                            <div className="main-guardar-productos">
                                                <button onClick={handlerClick} className="guardar-productos">Guardar</button>
                                               
                                            </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    <Footer/>
            </main>          
            </>) : 
            (<>


        <main className="div-padre">
                <Header />
                <CategoriaJabones />
                    <div class="container sobrecds-video">
                        <div class="row">
                            <div class="col texto-sobrecds">
                                <div className="texto-secundario-sobrecds">
                                    <p class="text-muted mb-0 parrafo"><SobreCDS/></p>
                                </div>
                            </div>
                            <div class="col video-informativo">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/d4RB0_R59EY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div> main-fotos
                <div class="col-12">
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
                </div>
                <Footer/>
            </main>
            </>)
        }

    
</>
     );
}

export default FormHome;