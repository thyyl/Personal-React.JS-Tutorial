import React from 'react';
import './bootstrap/dist/css/bootstrap.min.css';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a class="navbar-brand" href="#">REALME</a>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><a className="nav-link" href="#">HOME</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">OUR COMPANY</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">OUR SERVICES</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">PROJECTS</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;