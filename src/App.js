import {useState, useEffect} from 'react';
import NavBar from './components/navbar/Navbar';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {CartContextProvider} from "./CartContext/CartContext";
import Cart from './components/Cart/Cart'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemdetail/ItemDetailContainer';



function App() {

  return(
  <CartContextProvider>
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/products" element={<ItemListContainer/>}></Route>
      <Route path="/category/:id" element={<ItemListContainer/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  </CartContextProvider>
  );
}

export default App;
