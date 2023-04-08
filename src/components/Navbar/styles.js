import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 15px',
  },
  image: {
    marginTop: '12px',
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '240px',
    marginLeft: '0',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },

  [theme.breakpoints.down('sm')]:{
    mainContainer: {
      alignItems: 'center',
      padding: '5px 0px',
    },
    image: {
      height: '25px',
      marginTop: '10px',
      marginLeft: '10px',
    },
    brandContainer: {
      Width: '140px',
    },
    profile: {
      width: '300px',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    purple: {
      height: '40px',
      width: '40px',
    },
    userName: {
      marginLeft: '10px',
      fontSize: 18,
      height: '40px',
    },
    toolbar: {
      width: '300px',
      alignItems: 'center',
    },
  },
  [theme.breakpoints.down('xs')]:{
    userName: {
      display: 'none',
    },
    toolbar: {
      width: '90px',
      alignItems: 'center',
    },
    profile: {
      width: '90px',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    logout: {
      marginLeft: '10px',
      fontSize: 12,
    },
  },
}));