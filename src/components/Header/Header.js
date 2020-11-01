import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="content">
                    <h1 className="name">ETHAN KAVANAGH</h1>
                    <h2 className="title">Full Stack Software Engineer</h2>
                    <button className="headerBtn">GET IN TOUCH</button>
                </div>
            </div>
        );
    }
}

export default Header;