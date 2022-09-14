import logo from './logo.png';
import './App.css';
import NavBarBoots from './components/NavBarBoots/NavBarBoots';
import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/pages/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBarBoots/>
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/category/:category" element={<ItemListContainer/>} />
        <Route path="/category/:category" element={<div>Shop</div>} />
        <Route path="/category/:category" element={<div>Shop</div>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>
      <header className="App-header">
        {/* <ItemDetailContainer /> */}
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </BrowserRouter>
  );
}

export default App;
