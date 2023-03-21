import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
    form: {
        // background: `url(${logo})`,
        height: 'fit-content',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        // background- color: #ffffff;


    },

    rootGridContainer: {
        '&.MuiContainer-root': {
            padding: '6rem 0',

        }
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    googleButton: {
        marginBottom: theme.spacing(2),
    },
}));