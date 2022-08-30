import logo from './logo.svg';
import './App.css';
import NavBarBoots from './components/NavBarBoots/NavBarBoots';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBarBoots/>
      <ItemListContainer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
