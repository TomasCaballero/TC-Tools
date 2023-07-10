import dataCss from "../Data/dataCSSgen"
import { Link } from 'react-router-dom'

const CssGenerator = () => {
    return (
        <div className="routes__route">
        <div className="route__colores">
            <h2 className="colores__title">
                CSS-GENERATOR
            </h2>
            <div className="colores__container">
                {
                    dataCss.map((prod) => {
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

export default CssGenerator