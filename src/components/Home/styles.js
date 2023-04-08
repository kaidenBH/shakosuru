import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        '& .MuiContainer-maxWidthLg': {
          maxWidth: '300px',
        },
      },
    container: {
        padding: '0 20px',
        margin: '0',
        marginTop:  theme.spacing(12),
    },
    popover: {
        position: 'fixed',
        right: '40px',
        zIndex: '5',
        bottom: '40px',
        width: '50px',
    },
    [theme.breakpoints.down('sm')]:{
        mainContainer: {
            flexDirection: 'column',
        },   
        container: {
            marginTop: '80px',
            padding: '0 10px',
        },
    },
}));