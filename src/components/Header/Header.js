import React, { Component } from 'react';
import {scroll} from "react-scroll";
import './Header.css';

class Header extends Component {

    scrollToBottom() {
        window.scrollTo(0,document.body.scrollHeight)
    }

    render() {
        return (
            <div className="header">
                <div className="content">
                    <h1 className="name">ETHAN KAVANAGH</h1>
                    <h2 className="title">Full Stack Software Engineer</h2>
                    <button className="headerBtn" onClick={this.scrollToBottom}>GET IN TOUCH</button>
                </div>
            </div>
        );
    }
}

export default Header;