import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">Star Wars Blog</span>
            </Link>
            <div className="ml-auto d-flex align-items-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/people" className="nav-link">People</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/planets" className="nav-link">Planets</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/vehicles" className="nav-link">Vehicles</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/favorites" className="nav-link">Favorites</Link>
                    </li>
                </ul>
                <Link to="/demo">
                    <button className="btn btn-primary ml-2">Check the Context in action</button>
                </Link>
            </div>
        </nav>
    );
};
