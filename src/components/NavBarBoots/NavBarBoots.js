import carrito from '../../Assets/Img/carrito.png'
import './NavBarBoots.css'
import LogoPokemon from '../LogoPokemon/LogoPokemon';

const NavBarBoots = () => {
  return (
    <nav class="navbar navbar-expand-lg">
       <div class="aaa">
            <LogoPokemon />
            {/* <div class="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                    <a class="nav-link" href="#">Shop</a>
                    <img src={carrito} className="carrito-logo" alt="logo" />
                </div>
            {/* </div> */}
            <div>
              <button className='login mx-5'>Log In</button>
            </div>
        </div>
    </nav>
    );
}

export default NavBarBoots