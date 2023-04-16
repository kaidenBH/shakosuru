import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    
    postPaper: {
        marginTop:  theme.spacing(12),
        margin: theme.spacing(3),
        padding: '20px', 
        borderRadius: '25px',
    },
    media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      flexDirection: 'column-reverse',
    },
  },
  section: {
    borderRadius: '25px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('md')]: {
        width: '100%',
      marginBottom: 12,
      marginLeft: 0,
    },
  },
  loadingPaper: {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop:  theme.spacing(12),
    margin: theme.spacing(3),
    padding: '20px', 
    borderRadius: '25px',
    height: '39vh',
  },
  [theme.breakpoints.down('xs')]:{
    postTitle: {
        fontSize: '1.7rem',
    },
    postTags: {
        fontSize: '0.9rem',
    },
    postMessage: {
        fontSize: '1rem',
    },
    postCreator: {
        fontSize: '1.2rem',
    },
  },
}));