import React,{ useState } from 'react';
import { Avatar,Grow, Button,Grid, Container, Typography } from '@material-ui/core';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';
import { updateUser } from '../../actions/auth';



import useStyles from './styles';

const UserProfile = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const initialState = {firstname: user?.result.name.split(" ")[0], lastname: user?.result.name.split(" ")[1], email: user?.result.email, oldPassword: '', newPassword: '' }
  const [editing, setEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  const switchMode = () => {
    setEdit((prevEdit) => !prevEdit);
    if (!editing)  setFormData(initialState);
    setShowPassword(false);
  }
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(updateUser(user?.result._id,formData, navigate));
  }
  const logout = () => {
      dispatch({type: LOGOUT});
      navigate('/thoughts/auth');
      setUser(null);
  }
    
  return (
    
    <Grow in>
      <Container className={classes.maincontainer} maxWidth='sm'>
        <Container className={classes.editProfile}>
          {user?.result?._id && 
            <Button 
              className='EditProfileButton'
              style={{color: '#262626'}} 
              size='small' 
              onClick={switchMode}>
                {!editing ? 
                  <ModeEditOutlineIcon fontSize='large' />
                :
                  <CancelIcon fontSize='large'></CancelIcon>
                }
            </Button>
          }
        </Container>
        {editing ? ( 
          <Container className={classes.container}>
            <Avatar className={classes.propic} alt={user.result.name} src={user.result.picture}>{user.result.name.charAt(0)}</Avatar>
            <div className={classes.separator}></div>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Input name='firstname' label='First Name' defaultValue={initialState.firstname} handleChange={handleChange} autoFocus half />
                <Input name='lastname' label='Last Name' defaultValue={initialState.lastname} handleChange={handleChange} half />
                <Input name='email' label='Email Address' defaultValue={initialState.email} handleChange={handleChange} type='email' />
                <Input name='oldPassword' label='Password' handleChange={handleChange} type='password' required />
                <Input name='newPassword' label='New Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/> 
              </Grid>
              <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit} style={{marginTop: '25px'}}>Save</Button>
            </form>
          </Container>
        ) 
        : (
          <Container className={classes.container}>
            <Avatar className={classes.propic} alt={user.result.name} src={user.result.picture}>{user.result.name.charAt(0)}</Avatar>
            <div className={classes.separator}></div>
            <Typography variant='h4' style={{ color: '#777777'}}>Full Name:</Typography>
            <Typography className={classes.detail} variant='h4'>{user.result.name}</Typography>
            <Typography variant='h4'style={{ color: '#777777'}}>Email:</Typography>
            <Typography className={classes.detail} variant='h4'>{user.result.email}</Typography>
            <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>Logout</Button>
          </Container>
        )
        }
      </Container>
    </Grow>
  )
}

export default UserProfile