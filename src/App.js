import logo from './logo.svg';
import './App.css';
import {NavLink} from 'react-router-dom'
import Main from './component/Main';
import {Nav} from 'react-bootstrap'

function App() {
  return (
    <div>
      <Nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container-fluid">
                    <NavLink className="navbar-brand fs-4 ms-4" to="/">
                    <img src="/assets/mFint.png" width={65}></img>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home">Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/creation">Creation</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </Nav>
            <Main/>
    </div>
  );
}

export default App;
