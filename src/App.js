import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div>
        <NavBar/>
        <ItemListContainer greeting='Bienvenidos a Vinoteac'/>
  </div>
  );
}
    

export default App;
