import NavBar from './components/navbar/Navbar';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {CartContextProvider} from "./CartContext/CartContext";
import Cart from './components/Cart/Cart'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemdetail/ItemDetailContainer';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';



function App() {

  return(
  <CartContextProvider>
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<ItemListContainer/>}></Route>
      <Route path="/category/:type" element={<ItemListContainer/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  </CartContextProvider>
  );
}

export default App;
