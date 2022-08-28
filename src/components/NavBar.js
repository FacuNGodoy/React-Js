import logo from '../logo.svg';

const NavBar = () => {
    return(
        <div className='navBar'>
            <img src={logo} className="logo-barra" alt="logo" />
            <div className='cat'>
                <ul className='cat-list'>
                    <li>
                        <a href=''>Inicio</a>
                    </li>
                    <li>
                        <a href=''>Shop</a>
                    </li>
                    <li>
                        <a href=''>Contacto</a>
                    </li>
                </ul>
            </div>
            <div className='boton-login'>
                <button className='login'>Log In</button>
            </div>
        </div>
    )
}

export default NavBar;