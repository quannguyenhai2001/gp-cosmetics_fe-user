import * as React from 'react';

import { Box } from '@mui/material';
import Navbar from './Navbar/Navbar';
import Categories from './Categories/Categories';
export default function Header() {

    return (
        <Box >
            <Navbar />
            <Categories />
        </Box >
    );
}