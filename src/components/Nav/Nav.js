import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <a className="nav-item" href="#about">About</a>
                <a className="nav-item" href="#experience">Experience</a>
                <a className="nav-item" href="#portfolio">Portfolio</a>
                <a className="nav-item" href="#contact">Contact</a>
            </div>
        );
    }
}

export default Nav;