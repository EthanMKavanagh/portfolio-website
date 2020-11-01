import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <h2>Location</h2>
                <p>Minneapolis, MN</p>

                <h2>Email</h2>
                <p>ethanmkavanagh@gmail.com</p>

                <h2>Phone</h2>
                <p>(651) 900-0191</p>

                <h2>Other</h2>
                <p><a href="https://github.com/EthanMKavanagh">GitHub</a></p>
                <p><a href="https://www.linkedin.com/in/ethan-kavanagh-4372311b7/">LinkedIn</a></p>
            </div>
        );
    }
}

export default Contact;