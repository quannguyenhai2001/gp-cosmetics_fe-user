import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    //textField
    rootTextField: {
        '&.MuiFormControl-root': {
            marginBottom: '1.2rem',
            display: 'block',

        }
    },
    rootTextField1: {
        '&.MuiFormControl-root': {
            marginBottom: '1.1rem',
            display: 'block',
            '& input': {
                width: '4rem',

            }
        }
    },
    //left
    Typo: {
        textAlign: 'end',
        height: 'fit-content',

    },

    //middle
    rootTypo: {
        '&.MuiTypography-root': {
            margin: '2rem 0',
        }
    },
    rootTyp1: {
        '&.MuiTypography-root': {
            margin: '2rem 0 1.2rem 0',
        }
    },

    rootRadio: {
        '&.MuiFormGroup-root': {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            marginBottom: '0.2rem',
        }

    },

    //file
    rootAvatar: {
        '&.MuiAvatar-root': {
            display: "grid",
            width: "15rem",
            height: "15rem",
            textAlign: "center",
            placeItems: "center",
        },
    },
    customFileInput: {
        opacity: 0,
        zIndex: - 1,
    },
    labelFile: {
        cursor: 'pointer',
        border: '1px solid #ccc',
        fontSize: '1.5rem',
        padding: '1rem',
        display: 'inline-block',
        margin: '2rem 0 0 3.5rem',

    }
}));