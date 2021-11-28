import {useState, useEffect} from 'react';
import NavBar from './components/navbar/Navbar';
import './App.css';
import Item from './components/itemListContainer/item/Item';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ItemDetail from './components/itemdetail/ItemDetail'



function App() {

  const [items,setItems]= useState([])
  const [currentItem, setCurrentItem] = useState({})

  useEffect (() => {
    fetch("../JSON/data.json")
    .then((response)=> response.json())
    .then((data)=> setItems(data.results));
},[])


  return(
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/products" element={<Item itemsList={items} setCurrentItem={setCurrentItem}/>}></Route>
      <Route path="/item/:itemID" element={<ItemDetail currentItem={currentItem} />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
