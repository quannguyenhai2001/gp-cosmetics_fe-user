import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    rootList: {
        '&.MuiList-root': {
            padding: '0px',
        }
    },
    rootListIcon: {
        '&.MuiListItemIcon-root': {
            minWidth: '0px',
            paddingRight: '10px',
        }
    },

}));