import React from 'react'
import useStyles from './CheckboxField.styles'
import { ErrorMessage } from 'formik';
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material'
const CheckBoxField = (props) => {
    const classes = useStyles()
    const { field, half, label } = props
    const { name, value, onChange } = field

    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <FormControl >
                <FormLabel id="demo-controlled-radio-buttons-group">{label}</FormLabel>
                <RadioGroup className={classes.rootGrid}
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name={name}
                    value={value}
                    onChange={onChange}
                >
                    <FormControlLabel component="span" value="nam" control={<Radio />} label="Nam" />
                    <FormControlLabel value="nữ" control={<Radio />} label="Nữ" />
                </RadioGroup>
            </FormControl>
            <Box sx={{ color: 'red', fontSize: '1.3rem', margin: '1rem 0 0 0' }}>
                <ErrorMessage name={name} />
            </Box>
        </Grid >

    );
};

export default CheckBoxField;