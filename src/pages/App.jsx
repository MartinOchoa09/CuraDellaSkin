import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home";
import Contactanos from "./Contactanos";
import Informacion from "./Informacion";
import Comprar from "./Comprar";
import Favoritos from "./Favoritos";
import Jabones from "./Jabones";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/informacion" element={<Informacion/>}></Route>
        <Route path="/contactanos" element={<Contactanos/>}></Route>
        <Route path="/comprar" element={<Comprar/>}></Route>
        <Route path="/favoritos" element={<Favoritos/>}></Route>
        <Route path="/jabones" element={<Jabones/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
