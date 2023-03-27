import { Box, Typography } from '@mui/material';
import React from 'react';

const MapLocation = () => {
    return (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>Map location</Typography>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3348438330445!2d105.82415791436829!3d21.019283993478926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abe168631231%3A0xa045a449866937e5!2sAsap%20Cosmetics%20Vi%E1%BB%87t%20Nam!5e0!3m2!1svi!2s!4v1650908559628!5m2!1svi!2s" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Box>
    );
};

export default MapLocation;