import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    boxFeedback: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        backgroundColor: '#cccccc',
    },
    boxFooter: {
        backgroundColor: 'black',
        color: 'white',
    },
    headerFooter: {
        [theme.breakpoints.down('md')]: {
            '&:not(:first-child)': {
                marginTop: "1rem"
            }
        },
    },
    boxThreeSide: {
        '& *': {
            margin: '1.4rem 0'
        }
    },
    boxRightSide: {
        margin: '1rem 0'
    },
    input: {
        width: '25rem',
        height: '4rem',
        borderRadius: '0.5rem',
        border: '1px solid #cccccc',
        padding: '0 0.5rem',
    },
    buttonSignUp: {
        '&.MuiButtonBase-root': {
            marginLeft: '2rem',
            height: '4rem'
        }
    },
    boxIcon: {
        '& *': {
            margin: '0 1rem',
            fontSize: '2.6rem'
        }
    },
    boxFooterBottom: {
        '& *': {
            marginRight: '1rem',
            fontSize: '1.1rem'
        }
    }

}));