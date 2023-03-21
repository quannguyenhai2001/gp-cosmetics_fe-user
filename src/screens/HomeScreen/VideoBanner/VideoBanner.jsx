import React from 'react';
import useStyles from './VideoBanner.styles'
import introduceVideo from 'assets/videos/introduce.mp4';
import { Box } from '@mui/material';
const VideoBanner = () => {
    const classes = useStyles();
    return (
        <Box className={classes.boxVideo}>
            <video className={classes.video} autoPlay loop muted>
                <source src={introduceVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Box>
    );
};

export default VideoBanner;