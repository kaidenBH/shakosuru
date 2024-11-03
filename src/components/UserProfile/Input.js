import React from 'react'
import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
const Input = ({half, name, label, autoFocus, type, handleChange, defaultValue,required,handleShowPassword }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField 
            name={name}
            onChange={handleChange}
            variant='outlined'
            fullWidth
            required={required}
            label={label}
            autoFocus={autoFocus}
            type={type}
            defaultValue={defaultValue}
            InputProps={(name === 'newPassword')? {
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton onClick={handleShowPassword}>
                            { type === 'password' ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                )
            } : null }
        />
    </Grid>
  )
}

export default Input