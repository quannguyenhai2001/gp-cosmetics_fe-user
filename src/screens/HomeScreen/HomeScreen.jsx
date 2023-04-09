import { Box, Container } from '@mui/material';
import React from 'react';
import AdvertisementImgs from './components/AdvertisementImgs/AdvertisementImgs';
import ImgBeauty from './components/BeautyImgs/BeautyImgs';
import MapLocation from './components/MapLocation/MapLocation';
import VideoBanner from './components/VideoBanner/VideoBanner';
import ProductTabs from './components/ProductTabs/ProductTabs';
import SlideRewards from './components/SlideRewards/SlideRewards';

const HomeScreen = () => {
    return (
        <Box sx={{ marginBottom: '5rem', position: 'relative' }}>
            <Box>
                <VideoBanner />
            </Box>
            <Container maxWidth="lg" sx={{ paddingTop: '60rem' }}>
                <ProductTabs />
                <AdvertisementImgs />
                <SlideRewards />
                <ImgBeauty />
                <MapLocation />
            </Container>
        </Box>
    );
};

export default HomeScreen;