import { Box } from '@mui/material';
import React from 'react';

const AdvertisementImgs = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '5rem' }}>
            <img src={require('../../../../assets/images/advertisement/img1.webp')} alt="img" />
            <img src={require('../../../../assets/images/advertisement/img2.webp')} alt="img" />
        </Box>
    );
};

export default AdvertisementImgs;