import { styled } from "@mui/system";

export default styled(() => ({
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
            height: '60px',
        }
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


    searchInput: {
        [`& fieldset`]: {
            borderRadius: '50px',
        },
        '& input': {
            height: '6px',
        },
        flex: "1",
        overflow: "hidden",
        borderRadius: '50px',
    },
}));