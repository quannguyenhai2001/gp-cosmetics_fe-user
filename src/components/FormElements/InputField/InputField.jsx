import React from 'react';
import { Grid, InputAdornment, TextField, IconButton, Box } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ErrorMessage } from 'formik';

function InputField({ field, form, type, label, half, disabled, handleShowPassword, error, changeError }) {
    const { name, value, onChange, onBlur } = field
    const showError = form.errors[name] && form.touched[name]
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
                sx={{ margin: '0rem 0 0 0' }}
                variant="outlined"
                autoComplete='off'
                fullWidth
                size="small"
                label={label}
                type={type}
                error={(showError || error) ? true : false}
                onClick={changeError}
                InputProps={name === "password" || name === "confirmPassword" ? {
                    endAdornment: (
                        <InputAdornment position="end" >
                            <IconButton
                                onClick={() => handleShowPassword(name)}
                            >
                                {type === 'password' ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                } : null}
            />
            <Box sx={{ color: 'red', fontSize: '1.3rem', margin: '1rem 0 0 0' }}>
                <ErrorMessage name={name} />
                {(error && error.field === name) ? error.message : null}
            </Box>
        </Grid >

    );
}

export default InputField;