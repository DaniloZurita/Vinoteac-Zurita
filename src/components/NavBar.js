import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
       <div className="App">
     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <Link to='/' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/filtro/2' className="nav-link">Tragos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/filtro/3' className="nav-link">Promos</Link>
                      </li>
                  </ul>
        <CartWidget />
    </div>
  </div>
</nav>              
    </div>
  );
}

export default NavBar;
