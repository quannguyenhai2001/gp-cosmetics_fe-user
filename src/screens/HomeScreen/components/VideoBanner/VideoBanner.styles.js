import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    boxVideo: {
        position: 'absolute',
        top: 0,
        height: '60rem',
        left: 0,
        width: '100%',
    },
    video: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    }
}))