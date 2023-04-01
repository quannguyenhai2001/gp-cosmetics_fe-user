import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    //textField
    rootTextField: {
        '&.MuiFormControl-root': {
            margin: '2rem 0',
            display: 'block',
            '& input': {
                width: '30rem',

            }
        }
    },
    //left
    Typo: {
        textAlign: 'end',
        height: 'fit-content',

    },
    rootTypo: {
        '&.MuiTypography-root': {
            margin: '3rem 0',
        }
    },
    //middle


}));