import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  loadingPosts: {
    margin: '10vh 45vw',    
    [theme.breakpoints.down('sm')]:{
      margin: '10vh 42vw',
    },
    [theme.breakpoints.down('xs')]:{
      margin: '10vh 30vw',
    },
  },
}));