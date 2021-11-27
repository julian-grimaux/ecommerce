import {useState, useEffect} from 'react';
import NavBar from './components/navbar/Navbar';
import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import UserList from './components/itemdetail/UserList';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UserProfile from './components/UserProfile/UserProfile'
import ItemDetail from './components/itemdetail/ItemDetail'



function App() {

  const [items,setItems]= useState([])
  const [currentItem, setCurrentItem] = useState({})

  return(
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/products" element={<ItemListContainer itemList={items} setCurrentItem={setCurrentItem}/>}></Route>
      <Route path="/item/:itemID" element={<ItemDetail currentItem={currentItem} />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
