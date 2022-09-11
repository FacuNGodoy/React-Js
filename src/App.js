import logo from './logo.png';
import './App.css';
import NavBarBoots from './components/NavBarBoots/NavBarBoots';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBarBoots/>
      <ItemListContainer />
      <header className="App-header">
        <ItemDetailContainer />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
