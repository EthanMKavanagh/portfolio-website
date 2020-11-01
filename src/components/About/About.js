import React, { Component } from 'react';
import PictureOfSelf from './DSC07434 copy.jpg'

class About extends Component {
    render() {
        return (
        <div>
            <h1>About</h1>

            <p>
                Hey, I'm Ethan Kavanagh, a Full Stack Software Engineer based in Minneapolis, MN. 
                I love to build websites and applications that include a unique and creative design.
            </p>
            {/* Technologies */}
            <p>
                My goal is to create extraordinary user experience websites that demonstrate my abilities.
                <br></br>
                Recently, I have been working with:
            </p>
            <ul>
                <li>React & Redux</li>
                <li>Javascript</li>
                <li>Node.js</li>
                <li>HTML & CSS</li>
                <li>PostgreSQL</li>
                <li>MaterialUI</li>
            </ul>
            {/* Other Technologies */}
            <p>
                Other technologies I have worked with:
            </p>
            <ul>
                <li>Python3</li>
                <li>jQuery</li>
            </ul>

            {/* Image of Self */}
            <div>
                <img src={PictureOfSelf} alt="EthanKavangh" width='400'/>
            </div>
        </div>
        );
    }
}

export default About;