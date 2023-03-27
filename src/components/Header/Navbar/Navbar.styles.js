import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    rootAppBarTop: {
        '&.MuiPaper-root': {
            backgroundColor: '#fff',
            borderBottom: '0.1px solid #e0e0e0',

        },
        '&.MuiAppBar-root': {
            color: 'black',
            backgroundColor: '#fff',
        }
    },
    rootToolBar: {
        '&.MuiToolbar-root': {
            height: '80px',
            justifyContent: 'space-between',
        }
    },

    searchInput: {
        [`& fieldset`]: {
            borderRadius: '50px',
        },
        '& input': {
            height: '6px',

        },
        overflow: "hidden",
        flex: 1,
        borderRadius: '50px',
    },

    centerItem: {
        display: 'flex',
        alignItems: 'center',

    },
    BoxLeftIcon: {
        display: "flex",
        alignItems: "center",
        margin: "0 0 0 10rem",
        [theme.breakpoints.down('md')]: {
            display: "none",
        },
        "&:hover": {
            color: "blue",
            cursor: "pointer"
        }
    },
    BoxRightIcon: {
        display: "flex",
        alignItems: "center",
        margin: "0 1rem 0 1rem",

        [theme.breakpoints.down('md')]: {
            display: "none",
        },
        "&:hover": {
            color: "blue",
            cursor: "pointer"
        },
        '& a': {
            color: "black",
            "&:hover": {
                color: "blue",
                cursor: "pointer"
            },
        }

    },
    divideRoot: {
        height: "2.5rem",
        marginLeft: 10,
        [theme.breakpoints.down('md')]: {
            display: "none",
        },
    },
    //list item
    rootListItem: {
        '&.MuiListItem-root': {
            padding: '0px',
            margin: '0px 0 6px 0',
            '& a': {
                color: 'black',
                '&:hover': {
                    color: "blue",
                }
            },
            '&:hover': {
                color: "blue",
                cursor: "pointer"
            }
        },
    },

    rootListItem1: {
        '&.MuiListItem-root': {
            padding: '0px',
            margin: '6px 0',
            '& a': {
                color: 'black',
                '&:hover': {
                    color: "blue",
                }
            },
            '&:hover': {
                color: "blue",
                cursor: "pointer"
            }
        },
    },
    rootListItem2: {
        '&.MuiListItem-root': {
            padding: '0px',
            margin: '0px 0 0px 0',
            '& a': {
                color: 'black',
                '&:hover': {
                    color: "blue",
                }
            },
            '&:hover': {
                color: "blue",
                cursor: "pointer"
            }
        },
    },
    typoAvatar: {
        position: "relative",
        marginLeft: "0.5rem",
        [theme.breakpoints.down('md')]: {
            display: "none",
        },
    }

}));