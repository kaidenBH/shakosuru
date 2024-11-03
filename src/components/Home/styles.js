import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        '& .MuiContainer-maxWidthLg': {
          maxWidth: '300px',
        },
      },
    container: {
        padding: '0 60px',
        margin: '0',
        marginTop:  theme.spacing(12),
    },
    popoverNewPost: {
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        right: '2rem',
        zIndex: '6',
        bottom: '2.5rem',
        width: '50px',
        "&:hover": {
            animation: `$rotate-scale-up 0.65s ${theme.transitions.easing.easeInOut}`,
        },
    },
    
    popoverSearch: {
        position: 'fixed',
        right: '50%',
        zIndex: '1100',
        top: '3rem',
        width: '50px',
    },
    
   
    "@keyframes rotate-scale-up": {
        "0%": {
          transform: "scale(1) rotateZ(0)",
        },
        "50%": {
            transform: "scale(1.5) rotateZ(180deg)",
        },
        "100%": {
            transform: "scale(1) rotateZ(360deg)",
        },
      },
    [theme.breakpoints.down('sm')]:{
        mainContainer: {
            flexDirection: 'column',
        },   
        container: {
            marginTop:  theme.spacing(12),
            padding: '0 30px',
        },
    },
}));