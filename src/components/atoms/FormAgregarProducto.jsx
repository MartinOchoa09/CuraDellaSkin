import { useContext, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadContext from "../../context/LoadContext";
import InputFile from "../molecules/InputFile";
import "../../assets/styles/Productos.css";

function FormAgregarProducto() {
    const navigate = useNavigate()
    const forms = useRef()
    const dispatch = useDispatch()

    const {load, setLoad} = useContext(LoadContext)

    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(forms.current)
        let url = "https://localhost:3000/productos";

        let options = {
            method: 'POST',
            headers: {"Content-Type": 'application/JSON'},
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

    return ( 
        <>
            <div className="title-agregar-productos">
                <h1>Agregar producto</h1>
            </div>
        <main className="main-productos-padre">
            <form ref={forms} className="form-productos">
                <div className="main-nombre-categoria">
                    <div>
                        <label>
                            Nombre
                        </label>
                            <input type="text" name="name"/>
                    </div>
                    <div>
                        <label>Categoria</label>
                        <select name="category">
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
                            <input type="number" name="price"/>
                    </div>
                    <div>
                        <label>
                            Cantidad
                        </label>
                            <input type="number" name="amount"/>
                    </div>
                </div>
                <div className="main-fotos">
                    <InputFile/>
                </div>
                <div className="main-guardar-productos">
                    <button onClick={handlerClick} className="guardar-productos">Guardar</button>
                    <div><button onClick={handlerClickNavigate} className="productos-link">Productos</button></div>
                </div>
            </form>
        </main>
        </>
     );
}

export default FormAgregarProducto;