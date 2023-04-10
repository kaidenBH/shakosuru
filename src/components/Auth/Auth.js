import React, { useState } from 'react';
import { Avatar, Button, Typography, Paper, Grid, Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useGoogleLogin  } from '@react-oauth/google';
import GoogleIcon from '@mui/icons-material/Google';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';
import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';

const initialState = {firstname: '', lastname: '', email: '', password: '', confirmPassword: ''}
const Auth = () => {
    const classes = useStyles();
    const [isSignup, setSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleShowPassword = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    const switchMode = () => {
      setSignUp((prevSignUp) => !prevSignUp);
      setShowPassword(false);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if(isSignup){
        dispatch(signup(formData, navigate));
      } else {
        dispatch(signin(formData, navigate));
      }
      //console.log(formData);
    };
    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value});
    };

    const loginWithGoogle = useGoogleLogin({
      onSuccess: (res) => googleSuccess(res),
      onError: (error) => googleFailure(error),
    });

    const googleSuccess = async (res) => {
      const token = res?.access_token;
      axios.get('https://www.googleapis.com/userinfo/v2/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        const result = response.data;
        try {
          //console.log(result);
          dispatch({type: AUTH, data: { result,token }});
          navigate('/thoughts/');
        } catch (error) {
          console.log(error);
        }
      })
      .catch(error => {
        console.error(error);
      });
    };
    const googleFailure = (error) => {
      console.log(error);
      console.log('google Sign In was unsuccessessful. Try again Later');
    };
  return (
    <Container component='main' maxWidth='xs'>
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5'>{ isSignup ? 'Sign up': 'Sign In'}</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {
                isSignup && (
                  <>
                    <Input name='firstname' label='First Name' handleChange={handleChange} autoFocus half />
                    <Input name='lastname' label='Last Name' handleChange={handleChange} half />
                  </>
                )
              }
              <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
              <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
              { isSignup && <Input name='confirmPassword' label='Confirm Password' handleChange={handleChange} type='password'/> }
            </Grid>
            <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
              {
                isSignup ? 'Sign UP' : 'Sign In'
              }
            </Button>
            <Button className={classes.googleButton} color='secondary' fullWidth startIcon={<GoogleIcon />} variant='contained' onClick={loginWithGoogle}>
              { isSignup ? 'Sign UP ' : 'Sign In ' } with GOOGLE
            </Button>
            <Grid container justifyContent='center'> 
              <Grid item>
                <Button onClick={switchMode}>
                  { isSignup ? 'Already have an account? Sign In' : `Don't have an account? Sign Up` }
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
    </Container>
  )
}

export default Auth