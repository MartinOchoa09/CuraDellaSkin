import { BrowserRouter, Routes, Route, Form } from "react-router-dom"
import { useState } from "react";
import Home from "../pages/Home"
import Login from "../pages/Login";
import Informacion from "../pages/Informacion"
import Comprar from "../pages/Comprar"
import Favoritos from "../pages/Favoritos"

import UserContext from "../context/Usercontext";
import ProtectedParentRouter from "./ProtectedParentRoute";
import Registro from "../pages/Registro";
import Recomendaciones from "../pages/Recomendaciones";

function App() {
  const [isLoged, setIsLoged] = useState(true)

  return (
    <BrowserRouter>
    <UserContext.Provider value={{isLoged, setIsLoged}}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route element={<ProtectedParentRouter isLoged={isLoged}/>}></Route>
        <Route path="/registro" element={<Registro/>}></Route>
        <Route path="/informacion" element={<Informacion/>}></Route>
        <Route path="/comprar" element={<Comprar/>}></Route>
        <Route path="/favoritos" element={<Favoritos/>}></Route>
        <Route path="/recomendaciones" element={<Recomendaciones/>}></Route>
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
