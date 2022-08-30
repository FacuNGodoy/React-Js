import pokemon from '../../Assets/Img/logo.png'

const LogoPokemon = () => {
  return (
            <div>
                <img src={pokemon} className="pokemon-logo" alt="logo" />
            </div>
  )
}

export default LogoPokemon