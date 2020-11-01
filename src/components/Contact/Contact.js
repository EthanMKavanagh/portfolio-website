import React, { Component } from 'react';
import {Paper, Grid, IconButton} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <Grid 
                container
                className="contact"
                direction="row"
                justify="center"
                alignItems="center"
                spacing={4}
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
                            <h2>Email</h2>
                            <p>ethanmkavanagh@gmail.com</p>
                        </div>
                    </Paper>
                </Grid>

                <Grid item>
                    <Paper elevation={3} className="paper">
                        <div className="info">
                            <h2>Phone</h2>
                            <p>(651) 900-0191</p>
                        </div>
                    </Paper>
                </Grid>

                <Grid item>
                    <Paper elevation={3} className="paper">
                        <div className="info">
                            <h2 className="links">Links</h2>
                            <IconButton>
                                <a className="clink" href="https://github.com/EthanMKavanagh">
                                    <GitHubIcon fontSize="large" />
                                </a>
                            </IconButton>
                            <IconButton>
                                <a className="clink" href="https://www.linkedin.com/in/ethan-kavanagh-4372311b7/">
                                    <LinkedInIcon fontSize="large" />
                                </a>
                            </IconButton>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default Contact;