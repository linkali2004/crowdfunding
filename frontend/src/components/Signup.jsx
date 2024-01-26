//required imports
import { Box, Button, Typography ,Link , Alert , Snackbar , IconButton} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyIcon from '@mui/icons-material/Key';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from "react-hook-form"
import React, { useContext } from 'react'
import TextFields from './TextFields';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from '../context/UserContext';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../graphqlQueries/UserQueries';


export default function Signup() {
    const {setchangeDisplay}=useContext(UserContext);
    const [createUser , {data,loading,error,reset}] = useMutation(SIGNUP_USER)

    const [open, setOpen] = React.useState(true);
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    const action = (
      <React.Fragment>
        <Button color="secondary" size="small" onClick={handleClose}>
          UNDO
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );

    const onSubmitSignup = async (data)=>{
        console.log(data);
      createUser({
        variables:{
            usrInput:{...data}
        }
      })
      }

    const schema = yup.object({
        Username:yup.string().required("Please provide a username"),
        Password:yup.string().required("Please provide a password"),
        Email:yup.string().required("Please provide a Email").email("Please provide a valid email"),
       })
    
        const { control, handleSubmit,formState:{errors} } = useForm({
            defaultValues: {
              Username: "",
              Email:"",
              Password:"",
            },
            resolver:yupResolver(schema)
          })
  return (
<>
{error && <Alert severity="error">{error.message}</Alert>}
{data && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message="User created Successfully" action={action} />}
<Typography variant='h4'>Signup with an account</Typography>
<Typography variant="body1" sx={{color:"#858585",fontSize:"14px",padding:"6px"}}>Please fill your details below.</Typography>

<form onSubmit={handleSubmit(onSubmitSignup)}>
    <Box  sx={{marginTop:"20px" , display:"flex",flexDirection:"column" , gap:"8px"}}>
         <TextFields control={control} label="Username" name="Username" error={errors} StartIcon = {PersonIcon}></TextFields>
         <TextFields control={control} label="Email" name="Email" error={errors} StartIcon = {PersonIcon}></TextFields>
         <TextFields control={control} label="Password"  name="Password" error={errors} StartIcon = {KeyIcon}></TextFields>
             
</Box>
<Button disabled={loading} variant="contained" type="submit" sx={{backgroundColor:"#007DFA",marginTop:"15px" , float:"right"}} endIcon={<ChevronRightIcon></ChevronRightIcon>}>Create User</Button>
</form>
<Box sx={{backgroundColor:"#858585" ,width:{lg:"50%",xs:"70%"} , height:"1px" , marginTop:"35px"}}></Box>
<Box sx={{width:{lg:"50%",xs:"70%"},display:"flex" , justifyContent:"space-between",marginTop:"15px"}}>
<Typography variant ="body1">Already have an account? </Typography>
<Link onClick={()=> setchangeDisplay(true)}>Login here</Link>
</Box>


</>
  )
}
