
import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({

    boxDetail: {
        '& *': {

        }
    },

    //rating
    boxRating: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '1rem',
        '& *': {
            marginBottom: '0',
        }

    },
    rootRating: {
        '&.MuiRating-root': {
            color: 'red',
        }
    },
    typoRating1: {
        borderBottom: '1px solid red',
        display: 'inline-block',
        color: 'red',
        marginRight: '2px',
        fontSize: '1.8rem',
    },
    typoRating2: {

        display: 'inline-block',
        color: 'red',
        marginRight: '2px',
        fontSize: '1.8rem',
    },

    //detail product
    boxPrice: {
        display: 'flex',
        alignItems: 'baseLine',
        backgroundColor: '#fafafa',
        padding: '1.5rem 1rem',
        margin: '2rem 0',
        '& .MuiTypography-root:nth-child(2)': {
            fontSize: '2.5rem',
            margin: '0 1rem',
            transform: 'translateY(0.4rem)',
        },
        '& .MuiTypography-root:nth-child(3)': {
            padding: '0.2rem',
            backgroundColor: 'red',
            color: 'white',
            fontWeight: 'bold',
        }
    },
    boxMargin: {
        margin: '3rem 0',
    },

    //sale
    boxSale: {
        display: 'flex',
        alignItems: 'baseline',
        gap: '0.5rem',
        '& .MuiButton-root': {
            boxShadow: 'none',
            backgroundColor: 'red',
            marginRight: '1rem',
        }
    },

    boxSize: {
        display: 'flex',
        alignItems: 'baseline',
        gap: '0.5rem',
        '& .MuiButton-root': {
            boxShadow: 'none',
            marginRight: '1rem',
        },
        '& .MuiTypography-root': {
            width: '12.4rem'
        },
    },


    buttonCart: {
        '&.MuiButton-root': {
            margin: '5rem 0 0 0rem',
            padding: '1rem 2rem',

        },
    },

    //side right
    paper: {
        padding: theme.spacing(1),
    }

}));