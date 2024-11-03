import React, { useState, useEffect } from 'react'
import { AppBar, Avatar, Button, Container,Grid, Toolbar, Typography } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import { Thoughts, brainlogo } from '../../assets';
import useStyles from './styles';


const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        //const token = user?.token;
        //JWT
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const handleThoughtsClick = () => {
        dispatch(getPosts());
    }

    const loadGoogleDriveClient = () => {
        window.gapi.load("client", async () => {
            await window.gapi.client.setApiKey("YOUR_API_KEY");
            await window.gapi.client.setToken({ access_token: user.token });
            
            window.gapi.client.load("https://www.googleapis.com/discovery/v1/apis/drive/v3/rest")
                .then(() => console.log("GAPI client loaded for Drive API"))
                .catch(err => console.error("Error loading GAPI client:", err));
        });
    };

    const fetchGoogleSheets = async () => {
        try {
            const response = await window.gapi.client.drive.files.list({
                q: "mimeType='application/vnd.google-apps.spreadsheet'"
            });
            console.log("Response:", response.result.files);
        } catch (error) {
            console.error("Error fetching Google Sheets:", error);
        }
    };

    useEffect(() => {
        if (user) {
            loadGoogleDriveClient();
        }
    }, [user]);

    return (
    <AppBar className={classes.appBar} color='inherit'>
         <Grid className={classes.mainContainer} container >
            <Grid item >
                <Container className={classes.brandContainer} component={Link} to={'/thoughts/'} onClick={handleThoughtsClick}>
                    <img className={classes.image} src={ Thoughts } alt='Thoughts' height="40" />
                    <img className={classes.image} src={ brainlogo } alt='Thoughts' height="40" />
                </Container>   
            </Grid>
            <Toolbar className={classes.toolbar} >
                { user ? (
                    <>
                        <Container className={classes.profile} component={Link} to={'/thoughts/profile'}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.picture}>{user.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                        </Container>
                        <Button className={classes.apiButton} variant='contained' color='secondary' onClick={fetchGoogleSheets}>
                                Fetch Google Sheets
                        </Button>
                    </>
                ) : (
                    <Button className={classes.signin} component={Link} to='/thoughts/auth' variant='contained' color='primary'>Sign In</Button>
                ) }
            </Toolbar>
        </Grid>
    </AppBar>
  )
}

export default Navbar