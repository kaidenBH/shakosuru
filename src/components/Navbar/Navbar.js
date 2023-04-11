import React, { useState, useEffect } from 'react'
import { AppBar, Avatar, Button, Container,Grid, Toolbar, Typography } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { Thoughts, brainlogo } from '../../assets';
import useStyles from './styles';


const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();

    useEffect(() => {
        //const token = user?.token;
        //JWT
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    
    return (
    <AppBar className={classes.appBar} color='inherit'>
         <Grid className={classes.mainContainer} container >
            <Grid item >
                <Container className={classes.brandContainer} component={Link} to={'/thoughts/'}>
                    <img className={classes.image} src={ Thoughts } alt='Thoughts' height="40" />
                    <img className={classes.image} src={ brainlogo } alt='Thoughts' height="40" />
                </Container>   
            </Grid>
            <Toolbar className={classes.toolbar} >
                { user ? (
                    <Container className={classes.profile} component={Link} to={'/thoughts/profile'}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.picture}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                    </Container>
                ) : (
                    <Button className={classes.signin} component={Link} to='/thoughts/auth' variant='contained' color='primary'>Sign In</Button>
                ) }
            </Toolbar>
        </Grid>
    </AppBar>
  )
}

export default Navbar