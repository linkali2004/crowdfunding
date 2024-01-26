import React from 'react'
import { Box,Typography,Button,TextField ,InputAdornment ,Grid} from '@mui/material';
import AccordianUsage from "./Accordian";

export default function Mission() {
  return (
<Box sx={{width:"100%" , height:"100vh" , position:"absolute" ,top:"350vh" ,display:"flex" , padding:"40px 0px" ,alignItems:"center",flexDirection:"column" , backgroundColor:"#F3F8F7"}}>
            <Typography variant="body1" sx={{color:"#858584"}}>Humatarian Mission</Typography>
            <Box sx={{display:"flex" , gap:1 ,justifyContent:"center"}}>
            <Typography variant="h5" sx={{color:"black"}}>Help the Affected by</Typography>
            <Typography variant="h5" sx={{color:"#13ADB7"}}>Disasters, Shortages</Typography>
            <Typography variant="h5" sx={{color:"black"}}>and</Typography>
            <Typography variant="h5" sx={{color:"#13ADB7"}}>Emergency Relif</Typography>
        </Box>
        <Box sx={{width:"100%" , display:"flex",justifyContent:"center",alignItems:"center", padding:"60px 0px"}}>
            <Box sx={{width:"50%",height:"500px" ,display:"flex",justifyContent:"center",alignItems:"flex-end",flexDirection:"column" , gap:2}}>
            <img src="/Group 27.png" height="250px" ></img>
            </Box>
            <Box sx={{width:"50%",height:"500px" ,display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img src="/Group 17.png" height="500px" ></img>
            </Box>
        </Box>
</Box>
  )
}
