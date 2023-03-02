import { BrowserRouter, Routes, Route, Form } from "react-router-dom"
import { useState } from "react";
import Home from "../pages/Home"
import FormLogin from "../components/atoms/FormLogin";
import Informacion from "../pages/Informacion"
import Comprar from "../pages/Comprar"
import Favoritos from "../pages/Favoritos"
import Jabones from "../pages/Jabones"
import UserContext from "../context/Usercontext";
import ProtectedParentRouter from "./ProtectedParentRoute";
import FormRegister from "../components/atoms/FormRegister";

function App() {
  const [isLoged, setIsLoged] = useState(false)

  return (
    <BrowserRouter>
    <UserContext.Provider value={{isLoged, setIsLoged}}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<FormLogin/>}></Route>
        <Route element={<ProtectedParentRouter isLoged={isLoged}/>}></Route>
        <Route path="/register" element={<FormRegister/>}></Route>
        <Route path="/informacion" element={<Informacion/>}></Route>
        <Route path="/comprar" element={<Comprar/>}></Route>
        <Route path="/favoritos" element={<Favoritos/>}></Route>
        <Route path="/jabones" element={<Jabones/>}></Route>
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
