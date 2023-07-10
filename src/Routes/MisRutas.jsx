import { BrowserRouter, Routes, Route,  } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Inicio from "../Components/Inicio"
import Colores from "../Components/Colores"
import Iconos from "../Components/Iconos"
import Imagenes from "../Components/Imagenes"
import Background from "../Components/Background"
import CssGenerator from "../Components/CssGenerator"
import IAweb from "../Components/IAweb"



const MisRutas = () => {
    return (
        <>
            <BrowserRouter>
                <main className="layout">
                    <Navbar />
                    
                    <div className="layout__routes">
                        <Routes>
                            <Route path="/" element={<Inicio />} />
                            <Route path="/colores" element={<Colores />} />
                            <Route path="/iconos" element={<Iconos />} />
                            <Route path="/imagenes" element={<Imagenes />} />
                            <Route path="/fondos" element={<Background />} />
                            <Route path="/css-generator" element={<CssGenerator />} />
                            <Route path="/ia" element={<IAweb />} />
                        </Routes>
                    </div>
                </main>
            </BrowserRouter>
        </>
    )
}

export default MisRutas