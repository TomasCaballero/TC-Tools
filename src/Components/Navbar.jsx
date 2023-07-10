import { NavLink, Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <aside className="layout__aside">
            <div className="aside__logo">
                <img src="src/Assets/ImgAside/tools-man.png" alt="Imagen" className="aside__img" />
                <h1 className="aside__title">
                    TC-Tools
                </h1>
            </div>
            
            <p className="aside__description">Facilitando el desarrollo.</p>
            <div className="aside__nav">
                <ul>
                    <li className="nav__route nav__route__inicio">
                        <NavLink to='/'  className={({isActive}) => isActive ? 'nav__icon icon__active' : 'nav__icon'}>
                            <box-icon name='home-alt-2' type='solid' color='#fafafa' ></box-icon>
                        </NavLink>
                        <NavLink to='/' className={({isActive}) => isActive ? 'link active' : 'link'}>
                            INICIO
                        </NavLink>
                    </li>
                    <li className="nav__route">
                        <NavLink to='/colores' className={({isActive}) => isActive ? 'nav__icon icon__active' : 'nav__icon'}>
                            <box-icon name='palette' type='solid' color='#fafafa' ></box-icon>
                        </NavLink>
                        <NavLink to='/colores' className={({isActive}) => isActive ? 'link active' : 'link'}>
                            COLORES
                        </NavLink>
                    </li>
                    <li className="nav__route">
                        <NavLink to='/iconos' className={({isActive}) => isActive ? 'nav__icon icon__active' : 'nav__icon'}>
                            <box-icon type='solid' name='cube' color='#fafafa'></box-icon>
                        </NavLink>
                        <NavLink to='/iconos' className={({isActive}) => isActive ? 'link active' : 'link'}>
                            ICONOS
                        </NavLink>
                    </li>
                    <li className="nav__route">
                        <NavLink to='/imagenes' className={({isActive}) => isActive ? 'nav__icon icon__active' : 'nav__icon'}>
                            <box-icon name='image' color='#fafafa' ></box-icon>
                        </NavLink>
                        <NavLink to='/imagenes' className={({isActive}) => isActive ? 'link active' : 'link'}>
                            IMAGENES
                        </NavLink>
                    </li>
                    <li className="nav__route">
                        <NavLink to='/fondos' className={({isActive}) => isActive ? 'nav__icon icon__active' : 'nav__icon'}>
                            <box-icon name='minus-back' color='#fafafa' ></box-icon>
                        </NavLink>
                        <NavLink to='/fondos' className={({isActive}) => isActive ? 'link active' : 'link'}>
                            FORMATOS
                        </NavLink>
                    </li>
                    <li className="nav__route">
                        <NavLink to='/ia' className={({isActive}) => isActive ? 'nav__icon icon__active' : 'nav__icon'}>
                            <box-icon name='brain' type='solid' color='#fafafa' ></box-icon>
                        </NavLink>
                        <NavLink to='/ia' className={({isActive}) => isActive ? 'link active' : 'link'}>
                            IA
                        </NavLink>
                    </li>
                    <li className="nav__route">
                        <NavLink to='/css-generator' className={({isActive}) => isActive ? 'nav__icon icon__active' : 'nav__icon'}>
                            <box-icon name='css3' type='logo' color='#fafafa' ></box-icon>
                        </NavLink>
                        <NavLink to='/css-generator' className={({isActive}) => isActive ? 'link active' : 'link'}>
                            GENERATOR
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="aside__redes">
                <Link to='https://github.com/TomasCaballero' target='_blank' className='red__container'>
                    <box-icon type='logo' name='github' color='#fafafa80' size='md'></box-icon>
                </Link>
                <Link to='https://www.linkedin.com/in/tomás-bautista-caballero/' target='_blank' className='red__container'>
                    <box-icon type='logo' name='linkedin' color='#fafafa80' size='md'></box-icon>
                </Link>
            </div>
            <div className="aside__copy">
                <p className="copy__text"><box-icon name='copyright' color='#fafafa50'></box-icon> Tomás Bautista Caballero</p>
            </div>
        </aside>
    )
}

export default Navbar