import React from 'react'
import { Box,Typography,Button,TextField ,InputAdornment ,Grid} from '@mui/material';
import AccordianUsage from "./Accordian";

export default function Trust() {
  return (
<Box sx={{width:"100%" , height:"70vh" , position:"absolute" ,top:"450vh" ,display:"flex" , padding:"60px 0px" ,alignItems:"center",flexDirection:"column" , backgroundColor:"#F3F8F7"}}>
            <Typography variant="body1" sx={{color:"#858584"}}>Our Partner</Typography>
            <Box sx={{display:"flex" , gap:1 ,justifyContent:"center"}}>
            <Typography variant="h5" sx={{color:"black"}}>More than 50</Typography>
            <Typography variant="h5" sx={{color:"#13ADB7"}}>Companies</Typography>
            <Typography variant="h5" sx={{color:"black"}}>and</Typography>
            <Typography variant="h5" sx={{color:"#13ADB7"}}>transparently</Typography>
            <Typography variant="h5" sx={{color:"black"}}>that trust us over the years</Typography>
        </Box>
        <Box sx={{width:"100%" , display:"flex",justifyContent:"center",alignItems:"center", padding:"60px 0px"}}>
        <img src="/Group 26.png" height="250px" ></img>
        </Box>
</Box>
  )
}
