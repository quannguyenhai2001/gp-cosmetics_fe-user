import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    eachComment: {
        position: 'relative',
        '&:hover $eachCommentBoxEdit': {
            opacity: 1,
            visibility: 'visible',
        }

    },

    eachCommentContent: {
        position: 'relative'
    },

    eachCommentBoxEdit: {
        opacity: 0,
        visibility: 'hidden',
        position: 'relative',
    },

    rootIcon: {
        '&.MuiSvgIcon-root': {
            position: 'absolute',
            right: '0',
            top: '-70px',
            fontSize: '2.3rem',


        }

    },

    rootAvatar: {
        '&.MuiAvatar-root': {
            marginRight: '8px',
            marginTop: '3px',
        }
    },
    rootTextField: {
        '&.MuiFormControl-root': {
            marginBottom: '4rem',
            display: 'block',

            '& .MuiInput-input': {
                textFillColor: 'black',
                '&.Mui-disabled': {
                    color: 'black'
                }
            },
            '& .MuiInput-root': {
                '&::before': {
                    borderBottom: 'none',
                }
            },
        },
    },
    //box container
    // box: {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     marginBottom: '3rem',
    // },

    displayNone: {
        display: 'none'
    },
    displayBlock: {
        display: 'block'
    },






    rootList: {
        '&.MuiList-root': {

            position: 'absolute',
            zIndex: 1,
            right: 0,
            top: '-30px',
            padding: 10,

            width: 'fit-content',
            border: '1px solid #e0e0e0',
            textAlign: 'center',
        }
    },
    rootListItem: {
        '&.MuiListItem-root': {
            padding: '0px',
            margin: '0px',
            '&:hover': {
                color: "blue",
                cursor: "pointer"
            }
        }
    },


    eachCommentButton: {
        textAlign: '-webkit-right',
        marginTop: '-2rem'
    }



}));