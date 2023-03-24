import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import { Provider } from "react-redux";
import Home from "../pages/Home"
import Login from "../pages/Login";
import Carrito from "../pages/Carrito";
import Favoritos from "../pages/Favoritos"
import Jabones from "../pages/Jabones";
import UserContext from "../context/Usercontext";
import ProtectedParentRouter from "./ProtectedParentRoute";
import Registro from "../pages/Registro";
import Tutoriales from "../pages/Tutoriales";
import Productos from "../pages/Productos";
import AdminContext from "../context/AdminContext";
import Store from "../redux/store/Store.js";
import CambioPassword from "../pages/CambioPassword";
import LoadContext from "../context/LoadContext";
import CarritoContex from "../context/CarritoContext";

function App() {
  const [isLoged, setIsLoged] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [load, setLoad] = useState(false)
  const [carrito, setCarrito] = useState(false)

  return (
    <BrowserRouter>
    <UserContext.Provider value={{isLoged, setIsLoged}}>
    <AdminContext.Provider value={{isAdmin, setIsAdmin}}>
    <LoadContext.Provider value={{load, setLoad}}>
    <CarritoContex.Provider value={{carrito, setCarrito}}>
      <Provider store={Store}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/jabones" element={<Jabones/>}></Route>
        <Route path="/register" element={<Registro/>}></Route>
        <Route path="/cambiopassword" element={<CambioPassword/>}/>
        <Route element={<ProtectedParentRouter isLoged={isLoged}/>}>
        <Route path="/carrito" element={<Carrito/>}></Route>
        <Route path="/favoritos" element={<Favoritos/>}></Route>
        <Route path="/tutoriales" element={<Tutoriales/>}></Route>
        <Route path="/productos" element={<Productos/>}></Route>
        </Route>
      </Routes>
      </Provider>
      </CarritoContex.Provider>
      </LoadContext.Provider>
      </AdminContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
