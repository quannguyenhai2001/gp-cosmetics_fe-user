import { Typography } from '@mui/material';
import React from 'react';

const CurrencyTypo = ({ styles }) => {
    return (
        <Typography component="span" sx={{
            transform: "translate(5px, -10px)",
            display: "inline-block",
            textDecoration: "underline",
            ...styles
        }}>đ</Typography>
    );
};

export default CurrencyTypo;