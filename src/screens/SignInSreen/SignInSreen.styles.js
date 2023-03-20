import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    boxSignIn: {
        backgroundImage: 'linear-gradient(315deg, #7cffcb 0%, #74f2ce 20%)',

    },
    container: {
        padding: '0 12rem',
        height: "60rem",
    },

    gridContainer: {
        height: "100%",
    },
    signIn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            margin: "2rem 0",
        },
    },
    signInForm: {
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: "5px",
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    },
    submitButton: {
        margin: theme.spacing(2, 0, 2),
    },
    //side left
    typoTitleRight: {
        textAlign: 'center',
        marginBottom: '2rem',
        fontWeight: 'bold',
        // backgroundImage: 'linear-gradient(to right bottom,rgb(25,118,210), rgba(33, 222, 232, 0.8))',
        // color: 'transparent',
        // backgroundClip: 'text',
        // WebkitBackgroundClip: 'text'
    },

    //side right
    avatar: {
        '&.MuiAvatar-root': {
            width: '10rem',
            height: '10rem',
            padding: "5px",
            borderRadius: '50%',
            background: 'white',
            margin: '2rem 0',
            '& img': {
                objectFit: 'contain'
            }
        }
    },
    introduce: {
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            marginBottom: "2rem",
        },
    }





}));