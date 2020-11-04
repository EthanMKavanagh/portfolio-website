import React, { Component } from 'react';
import {Paper, Grid, IconButton} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Contact.css';

class Contact extends Component {

    onLinkedIn = () => {
        window.open("https://www.linkedin.com/in/ethan-kavanagh-4372311b7/");
    }

    onGitHub = () => {
        window.open("https://github.com/EthanMKavanagh");
    }

    render() {
        return (
            <Grid 
                container
                className="contact"
                direction="row"
                justify="center"
                alignItems="center"
                spacing={4}
                id="contact"
            >
                <Grid item>
                    <Paper elevation={3} className="paper">
                        <div className="info">
                            <h2>Location</h2>
                            <p>Minneapolis, MN</p>
                        </div>
                    </Paper>
                </Grid>

                <Grid item>
                    <Paper elevation={3} className="paper">
                        <div className="info">
                            <h2 className="links">Links</h2>
                            <IconButton onClick={this.onGitHub}>
                                <GitHubIcon className="clink" fontSize="large" />
                            </IconButton>
                            <IconButton onClick={this.onLinkedIn}>
                                <LinkedInIcon className="clink" fontSize="large" />
                            </IconButton>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default Contact;