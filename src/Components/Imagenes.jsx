import dataImagenes from "../Data/dataImagenes"
import { Link } from 'react-router-dom'


const Imagenes = () => {
    return (
        <div className="routes__route">
            <div className="route__colores">
                <h2 className="colores__title">
                    IMAGENES
                </h2>
                <div className="colores__container">
                    {
                        dataImagenes.map((prod) => {
                            return (
                                <Link to={prod.url} key={prod.id} style={{ textDecoration: 'none' }} target="_blank">
                                    <div className="color__container" >
                                        <div className="triangulo"></div>
                                        <img src={prod.img} alt={prod.nombre} className="color__img" />
                                        <div className="opacidad"></div>
                                        <p className="color__name">{prod.nombre}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Imagenes