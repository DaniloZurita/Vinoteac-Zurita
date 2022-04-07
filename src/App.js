import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavBar/>
      </header>
      {/* <ItemListContainer greeting='Bienvenidos a Vinoteac'/> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;