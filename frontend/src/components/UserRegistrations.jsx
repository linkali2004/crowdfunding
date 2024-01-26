//required imports
import { Box, Button} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import React, { useContext, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Login from './Login';
import Signup from './Signup';

export default function UserRegistrations() {
  const navigate = useNavigate();
  const {changeDisplay}=useContext(UserContext);
  return (
    <Box sx={{width:"100%",height:"100%",display:"flex",flexDirection:{lg:"row",xs:"column"}}}>
        <Box sx={{backgroundImage:{lg:"url(/unsplash_E2i7Hftb_rI.png)",xs:"url(/jeremy-bishop-G9i_plbfDgk-unsplash.jpg)"},width:{lg:"31vw",xs:"100vw"},height:{lg:"100vh",xs:"35vh"},backgroundSize:{xs:"contain",md:"cover",sm:"contain",lg:"contain"},backgroundRepeat:"no-repeat"}}></Box>
        <Box sx={{width:{lg:"69vw",xs:"100vw"},height:{lg:"100vh",xs:"65vh"},display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          {changeDisplay?(<Login />):(<Signup></Signup>)}
<Box sx={{display:"flex", flexDirection:"column",gap:1 ,marginTop:"30px"}}>
<Button  variant="contained" type="submit" sx={{backgroundColor:"#007DFA" , float:"right"}} endIcon={<GoogleIcon></GoogleIcon>}>Signin with Google</Button>
<Button  variant="contained" type="submit" sx={{backgroundColor:"#007DFA" , float:"right"}} endIcon={<GitHubIcon></GitHubIcon>}>Signin with Github</Button>
</Box>
        </Box>
    </Box>
  )
}
