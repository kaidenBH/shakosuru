import React, { useState, useEffect } from 'react'
import { AppBar, Avatar, Button, Container,Grid, Toolbar, Typography } from '@material-ui/core';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { shakoText, brainlogo } from '../../assets';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';


const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token = user?.token;
        //JWT
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const logout = () => {
        dispatch({type: LOGOUT});
        navigate('/shakosuru/');
        setUser(null);
    }
    
    return (
    <AppBar className={classes.appBar} color='inherit'>
         <Grid className={classes.mainContainer} container >
            <Grid item >
                <Container className={classes.brandContainer} component={Link} to={'/shakosuru/'}>
                    <img className={classes.image} src={ shakoText } alt='ShakuSuru' height="40" />
                    <img className={classes.image} src={ brainlogo } alt='ShakuSuru' height="40" />
                </Container>   
            </Grid>
            <Toolbar className={classes.toolbar}>
                { user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.picture}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                        <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button className={classes.signin} component={Link} to='/shakosuru/auth' variant='contained' color='primary'>Sign In</Button>
                ) }
            </Toolbar>
        </Grid>
    </AppBar>
  )
}

export default Navbar