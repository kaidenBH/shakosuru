import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    maincontainer:{
        marginTop:  theme.spacing(10),
        padding:  theme.spacing(2),
        position: 'relative',
    },
    container: {
        padding:  theme.spacing(2),
        borderRadius: '10px',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    propic: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        marginBottom:  theme.spacing(2),
        fontSize: '60px',
        height: '120px',
        width: '120px',
    },
    detail: {
        color: '#262626',
        marginBottom:  theme.spacing(7),
    },
    separator: {
        width: '100%',
        height: '2px',
        marginBottom:  theme.spacing(7),
        backgroundColor: '#e1e1e1',
    },
    editProfile: {
        position: 'relative',
        left: "80%",
        top: "60px",
    },
    [theme.breakpoints.down('xs')]:{
        maincontainer:{
            marginTop:  theme.spacing(4),
            padding:  theme.spacing(3),
        },
        propic: {
            marginBottom:  theme.spacing(2),
            fontSize: '40px',
            height: '80px',
            width: '80px',
        },
        detail: {
            marginBottom:  theme.spacing(5),
            fontSize: '120%',
        },
        separator: {
            marginBottom:  theme.spacing(5),
        },
        editProfile: {
            position: 'relative',
            left: "70%",
            top: "60px",
        },
    },
}));