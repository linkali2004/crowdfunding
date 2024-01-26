import React from 'react'
import { Box,Typography,Button,TextField ,InputAdornment ,Grid} from '@mui/material';
import AccordianUsage from "./Accordian";

export default function FAQ() {
  return (
<Box sx={{width:"100%" , height:"100vh" , position:"absolute" ,top:"250vh" ,display:"flex" , padding:"40px 0px" ,alignItems:"center",flexDirection:"column" , backgroundColor:"#F3F8F7"}}>
            <Typography variant="body1" sx={{color:"#858584"}}>Modern Crowdfunding Platform</Typography>
            <Box sx={{display:"flex" , gap:1 ,justifyContent:"center"}}>
            <Typography variant="h5" sx={{color:"black"}}>Distribute , aid</Typography>
            <Typography variant="h5" sx={{color:"#13ADB7"}}>easily,quickly</Typography>
            <Typography variant="h5" sx={{color:"black"}}>and</Typography>
            <Typography variant="h5" sx={{color:"#13ADB7"}}>transparently</Typography>
        </Box>
        <Box sx={{width:"100%" , display:"flex",justifyContent:"center",alignItems:"center", padding:"60px 0px"}}>
            <Box sx={{width:"50%",height:"500px" ,display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                <img src="/Phone.png" height="500px" ></img>
            </Box>
            <Box sx={{width:"50%",height:"500px" ,display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column" , gap:2}}>
            <Typography variant="body1" sx={{color:"#858584",width:"80%"}}>Open Data is the idea that some data should be freely available for everyone to use and republish as they see fit, without restrictions from copyright, patents, or other control mechanisms.</Typography>
            <Typography variant="body1" sx={{fontWeight:600,color:"black",fontSize:"18px"}}>Frequently Asked Questions</Typography>
            <AccordianUsage></AccordianUsage>
            </Box>
        </Box>
</Box>
  )
}
