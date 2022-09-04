import logo from './logo.png';
import './App.css';
import NavBarBoots from './components/NavBarBoots/NavBarBoots';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import TarjetaItem from './components/TarjetaItem/TarjetaItem';

function App() {
  return (
    <div className="App">
      <NavBarBoots/>
      <ItemListContainer />
      <header className="App-header">
        <TarjetaItem/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
