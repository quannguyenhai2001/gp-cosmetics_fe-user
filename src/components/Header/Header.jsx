import * as React from 'react';

import { Box } from '@mui/material';
import Navbar from './Navbar/Navbar';
export default function Header() {

    return (
        <Box sx={{ mb: "8rem" }}>
            <Navbar />
        </Box >
    );
}