import { BrowserRouter, Routes, Route, Form } from "react-router-dom"
import { useState } from "react";
import Home from "../pages/Home"
import Login from "../pages/Login";
import Informacion from "../pages/Informacion"
import Carrito from "../pages/Carrito";
import Favoritos from "../pages/Favoritos"
import Jabones from "../components/atoms/FormJabones"
import UserContext from "../context/Usercontext";
import ProtectedParentRouter from "./ProtectedParentRoute";
import Registro from "../pages/Registro";
import Recomendaciones from "../pages/Recomendaciones";
import Tutoriales from "../pages/Tutoriales";

function App() {
  const [isLoged, setIsLoged] = useState(false)

  return (
    <BrowserRouter>
    <UserContext.Provider value={{isLoged, setIsLoged}}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route element={<ProtectedParentRouter isLoged={isLoged}/>}></Route>
        <Route path="/register" element={<Registro/>}></Route>
        <Route path="/informacion" element={<Informacion/>}></Route>
        <Route path="/carrito" element={<Carrito/>}></Route>
        <Route path="/favoritos" element={<Favoritos/>}></Route>
        <Route path="/recomendaciones" element={<Recomendaciones/>}></Route>
        <Route path="/jabones" element={<Jabones/>}></Route>
        <Route path="/tutoriales" element={<Tutoriales/>}></Route>
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
