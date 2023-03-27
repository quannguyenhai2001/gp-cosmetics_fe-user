import { Box, Typography } from '@mui/material';
import React from 'react';

const ImgBeauty = () => {
    return (
        <Box sx={{ marginBottom: '5rem' }}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: '4rem' }}>
                More Beauty For You
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '3rem' }}>
                <img src={require('../../../../assets/images/beauty/img1.webp')} alt="img" />
                <img src={require('../../../../assets/images/beauty/img2.webp')} alt="img" />
                <img src={require('../../../../assets/images/beauty/img3.webp')} alt="img" />
                <img src={require('../../../../assets/images/beauty/img4.webp')} alt="img" />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '3rem' }}>
                <img src={require('../../../../assets/images/beauty/img5.webp')} alt="img" />
            </Box>

        </Box>
    );
};

export default ImgBeauty;