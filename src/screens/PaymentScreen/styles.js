import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    boxForm: {
        borderRadius: '12px',
        background: '#ffffff',
        boxShadow: "9px 9px 16px #dedede,- 9px - 9px 16px #ffffff",
    },


    rootTypo: {
        '&.MuiTypography-root': {
            marginBottom: '4rem',
            textAlign: 'right',
        },
        '&.MuiTypography-root:first-child': {
            marginTop: '1rem'
        }
    },


    rootTyp1: {
        '&.MuiTypography-root': {
            margin: '2rem 0 1.2rem 0',
        }
    },

}));