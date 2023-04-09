import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
    rootCard: {
        '&.MuiPaper-root': {
            height: 330,
            position: 'relative',
            transition: '0.3s',
            cursor: 'pointer',
            '&:hover': {
                transform: 'scale(1.02)',

            },

            // '&.MuiPaper-root:before': {
            //     display: 'none',
            // },
        },
    },

    sale: {
        position: 'absolute',
        top: 0,
        right: 0,
        background: '#ff0000',
        color: '#fff',
        padding: '5px 10px',
        fontSize: '12px',
        fontWeight: 'bold',
    }

}));