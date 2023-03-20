import { Box, Container } from '@mui/material';
import React from 'react';
import VideoBanner from './VideoBanner/VideoBanner';

const HomeScreen = () => {
    return (
        <Box sx={{ marginBottom: '5rem', position: 'relative' }}>
            <Box>
                <VideoBanner />
            </Box>
            <Container maxWidth="lg" sx={{ paddingTop: '60rem' }}>
            </Container>
        </Box>
    );
};

export default HomeScreen;