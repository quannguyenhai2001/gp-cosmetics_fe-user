import { Box, Container } from '@mui/material';
import React from 'react';
import AdvertisementImgs from './components/AdvertisementImgs/AdvertisementImgs';
import ImgBeauty from './components/BeautyImgs/BeautyImgs';
import MapLocation from './components/MapLocation/MapLocation';
import VideoBanner from './components/VideoBanner/VideoBanner';

const HomeScreen = () => {
    return (
        <Box sx={{ marginBottom: '5rem', position: 'relative' }}>
            <Box>
                <VideoBanner />
            </Box>
            <Container maxWidth="lg" sx={{ paddingTop: '60rem' }}>
                <AdvertisementImgs />
                <ImgBeauty />
                <MapLocation />
            </Container>
        </Box>
    );
};

export default HomeScreen;