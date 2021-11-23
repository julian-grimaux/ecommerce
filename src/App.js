import {useState, useEffect} from 'react';
import NavBar from './components/navbar/navbar';
import './App.css';
import Products from './components/products/Products';
import Itemdetailcontainer from './components/itemdetail/itemdetailcontainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UsersList from './components/UserList/UsersList';



function App() {

  const [users,setUsers]= useState([])

    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=8')
        .then(res => res.json())
        .then(data => setUsers(data.results))
    },[])

  return(
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/productos" element={<Products/>}></Route>
      <Route path="/detalles" element={<Itemdetailcontainer/>}></Route>
      <Route path="/perfiles" element={<UsersList usersList={users}/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
