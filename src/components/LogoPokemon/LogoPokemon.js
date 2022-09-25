import pokemon from '../../Assets/Img/logo.png'
import { Link } from 'react-router-dom';

const LogoPokemon = () => {
  return (
    <Link className="pokemon-logo" to={'/'}>
      <div>
        <img src={pokemon} className="pokemon-logo" alt="logo" />
     </div>
    </Link>
  )
}

export default LogoPokemon