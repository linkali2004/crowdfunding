import React from 'react'
import { Box,Typography,Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
export default function HeroSection() {
  return (
    <Box sx={{backgroundImage:"url(/background.png)" , width:"100%" , height:"80vh",backgroundSize:"cover",backgroundPosition:"center",position:"absolute" ,top:0,zIndex:0}}>
    <Box sx={{backgroundColor:"rgba(0,0,0,0.5)" , width:"100%" , height:"80vh" , display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Box sx={{display:"flex" , gap:2}}>
            <Typography variant="h2" sx={{color:"#13ADB7"}}>Happiness</Typography>
            <Typography variant="h2" sx={{color:"white"}}>comes from your   <Typography variant="h2" sx={{color:"#13ADB7"}}>action.</Typography></Typography>
        </Box>
        <Typography variant="body1" sx={{color:"#E9ECEB" , fontSize:"16px" , marginTop:"10px"}}>Be a part of the breakthrough and make someone’s dream come true.</Typography>
        <Box sx={{display:"flex" , gap:2 , marginTop:"10px"}}>
            <Button variant="contained" sx={{backgroundColor:"#13ADB7" , borderRadius:"16px"}}>Donate now</Button>
            <Button variant="outlined" sx={{borderRadius:"16px" , color:"white" , borderColor:"white"}} startIcon={<PlayArrowIcon></PlayArrowIcon>}>Watch video</Button>
        </Box>
    </Box>
    </Box>
  )
}
