import { FormControl, TextField,InputAdornment } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'

export default function TextFields({ control, label ,error ,name , StartIcon}) {
    return (
        <FormControl fullWidth>
            <Controller name={label} control={control} render={({ field }) => <><TextField error={(error[name])?true:false}  {...field} placeholder={label} sx={{backgroundColor: "#F5F5F7",border:0,  borderRadius:"12px" ,fieldset:{borderRadius: "12px"},width: { lg: "50ch", xs: "30ch" } }}  InputProps={{ startAdornment: <InputAdornment position="start"><StartIcon /></InputAdornment>}}></TextField> {error[name]?<small style={{color:"red"}}>{error[name].message}</small>:null}  </> }/>
        </FormControl>
    )
}
