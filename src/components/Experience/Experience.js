import React, { Component } from 'react';
import './Experience.css';

class Experience extends Component {
    render() {
        return (
            <div className="experience">
                <div className="content1">
                    <div className="column1">
                        <h1 className="subheader1">Experience</h1>

                        {/* Solo Project */}
                        <h4 className="subsubheader">Prime Digital Academy – Solo Project</h4>
                        <p className="paragraph">
                            I love football, and I am constantly practicing with my younger brother to improve his game.
                            Due to the fact that he is in 7th grade, there isn't a great way to track statistics.
                            So, I created an application called <a className="elink" href="https://github.com/EthanMKavanagh/smolGame"><i>smolGame</i></a> that allows coaches to track statistics game by game, and store basic information about each player.
                            Additionally, players of the team can always know how the team has been performing on the field at their fingertips.
                        </p>

                        {/* Group Project */}
                        <h4 className="subsubheader">Prime Digital Academy – Group Project (In Progress)</h4>
                        <p className="paragraph">
                            My team is creating additional functionalities for a non-profit company called <a className="elink" href="https://blackignite.com/"><i>Black Ignite</i></a>.
                            One functionality would include an Admin Dashboard, and some Tooling and Automation.
                        </p>
                    </div>
                    <div className="column1 videos">
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience