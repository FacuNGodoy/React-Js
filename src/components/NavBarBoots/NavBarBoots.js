import './NavBarBoots.css'
import LogoPokemon from '../LogoPokemon/LogoPokemon';
import { Link } from 'react-router-dom';
import Shop from '../Shop/Shop';

const NavBarBoots = () => {
  return (
    <nav className="navbar navbar-expand-lg">
       <div className="aaa">
            <LogoPokemon />
            {/* <div class="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
                <div className="navbar-nav">
                    <Link className="nav-link active" to={'/'}>Inicio</Link>
                    <Link className="nav-link active" to={'/category/comun'}>Comun</Link>
                    <Link className="nav-link active" to={'/category/raro'}>Raro</Link>
                    <Link className="nav-link active" to={'/category/ultraRaro'}>UltraRaro</Link>
                    <Link className="nav-link active" to={'/cart'}>
                      <Shop/>
                    </Link>
                </div>
            <div>
              <button className='login mx-5'>Log In</button>
            </div>
        </div>
    </nav>
    );
}

export default NavBarBoots