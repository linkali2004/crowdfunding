//required imports
import { Box, Button, Typography ,Link , Alert} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyIcon from '@mui/icons-material/Key';
import { useForm } from "react-hook-form"
import React, { useContext } from 'react'
import TextFields from './TextFields';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from '../context/UserContext';
import { SIGNIN_USER } from '../graphqlQueries/UserQueries';
import { useLazyQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const {setchangeDisplay}=useContext(UserContext);
  const navigate = useNavigate();
  const [findUser,{data,loading,error}]= useLazyQuery(SIGNIN_USER)
  const onSubmitLogin = async (data)=>{
    console.log(data);
    findUser({
      variables:{
        usrInput:data.Username
      }
    })
  }
    const schema = yup.object({
        Username:yup.string().required("Please provide a username"),
        Password:yup.string().required("Please provide a password"),
       })
    
        const { control, handleSubmit,formState:{errors} } = useForm({
            defaultValues: {
              Username: "",
              Password:"",
            },
            resolver:yupResolver(schema)
          })
          console.log(data)
          if(data?.findUser?.Username)
          {
            navigate("/");
          }
  return (
    <>
    {error && <Alert severity="error">{error.message}</Alert>}
    <Typography variant='h4'>Login to your account</Typography>
    <Typography variant="body1" sx={{color:"#858585",fontSize:"14px",padding:"6px"}}>Please fill your details below.</Typography>

    <form onSubmit={handleSubmit(onSubmitLogin)}>
        <Box  sx={{marginTop:"20px" , display:"flex",flexDirection:"column" , gap:"8px"}}>
             <TextFields control={control} label="Username" name="Username" error={errors} StartIcon = {PersonIcon}></TextFields>
             <TextFields control={control} label="Password"  name="Password" error={errors} StartIcon = {KeyIcon}></TextFields>
                 
</Box>
<Button disabled={loading} variant="contained" type="submit" sx={{backgroundColor:"#007DFA",marginTop:"15px" , float:"right"}} endIcon={<ChevronRightIcon></ChevronRightIcon>}>Login</Button>
</form>
<Box sx={{backgroundColor:"#858585" ,width:{lg:"50%",xs:"70%"} , height:"1px" , marginTop:"35px"}}></Box>
<Box sx={{width:{lg:"50%",xs:"70%"},display:"flex" , justifyContent:"space-between",marginTop:"15px"}}>
<Typography variant ="body1">Don't have an account? </Typography>
<Link onClick={()=> setchangeDisplay(false)}>Signup here</Link>
</Box>
    
    </>
  )
}
