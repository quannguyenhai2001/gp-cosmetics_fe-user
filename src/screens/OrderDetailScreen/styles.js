import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
    rootRating: {
        '&.MuiRating-root': {
            fontSize: '3rem',
            display: 'flex',
            margin: '0 0 0 7rem',
            '& label': {
                marginRight: '1rem',
            },
            '& input': {
                marginRight: '1rem',
            }

        },
    },


}));