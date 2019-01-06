import React from "react";
import { Link } from "react-router-dom";
import logo from "./../logo.svg";

const Header = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Link to="/">
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
                <h3>Top Movies</h3>
            </header>
        </div>
    );
};

export default Header;
