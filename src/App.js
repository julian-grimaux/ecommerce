import NavBar from './components/navbar/navbar';
import './App.css';
import Products from './components/products/Products';
import Itemdetailcontainer from './components/itemdetail/itemdetailcontainer';






function App() {
  return(
    <div className="App">
      <NavBar/>
      <Products/>
      <Itemdetailcontainer/>
    </div>
  );
}

export default App;
