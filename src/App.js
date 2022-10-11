import './App.css';
import NavBarBoots from './components/NavBarBoots/NavBarBoots';
import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/pages/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import {CartProvider} from './context/CartProvider'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBarBoots/>
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:category" element={<ItemListContainer/>} />
          <Route path="/category/:category" element={<div>Shop</div>} />
          <Route path="/category/:category" element={<div>Shop</div>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
