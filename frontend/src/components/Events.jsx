import React, { useState } from 'react'
import { Box,Typography,Button,TextField ,InputAdornment ,Grid} from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
export default function Events() {
    const imgNames1 = ["41.png","42.png","43.png","44.png","45.png","46.png","41.png","42.png"];
    const names = ["Flood in Lamboa" , "Tsunami in Malika" , "Help african children", ,"Sianka Forest Fire","Soporo Earthquake" , "Lindu land drought" , "Flood in Lamboa" , "Tsunami in Malika"]
    const sub= ["African children need your help to get proper food and water. Prolonged crisis is a real urgency.","Lamboa community needs your help for crisis management from 3 days of non-stop flooding." , "Emergency! A tsunami has just hit Malika, Tarasudi District. Help our affected brothers and sisters." , "The Sianka forest has caught fire and affected the surrounding community. Let's help buy their health facilities!" , "A magnitude 7.3 earthquake has shaken Saporo sub-district, help them recover with food and medicine." , "The people of Tanah Lidu are currently suffering from drought, help them get clean water!","African children need your help to get proper food and water. Prolonged crisis is a real urgency.","Lamboa community needs your help for crisis management from 3 days of non-stop flooding." ]
  return (
    <Box sx={{width:"100%" , position:"absolute" ,top:"0" ,display:"flex" , alignItems:"center",flexDirection:"column" , backgroundColor:"#F3F8F7"}}>
    <Box sx={{display:"flex" , gap:1 ,justifyContent:"center", padding:"40px"}}>
        <Typography variant="h5" sx={{color:"#13ADB7"}}>Open</Typography>
        <Typography variant="h5" sx={{color:"black"}}>Donations</Typography>
    </Box>
    <TextField  InputProps={{ endAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>}} placeholder='Enter to search' size = "small" sx={{backgroundColor: "#F5F5F7",border:0,  borderRadius:"15px" ,fieldset:{borderRadius: "15px"},width: { lg: "50ch", xs: "30ch" } }} ></TextField>

    <Grid container rowSpacing={{ xs: 3 }} sx={{ padding: "60px 0px" }}>
    {imgNames1.map((data, index) => {
    return (
        <Grid key={index} item xs={12} md={4} sm={6} lg={4} sx={{ display: "flex", justifyContent: "center", cursor: "pointer" }}>
            <Box sx={{ display: "flex", flexDirection: "column", width: "300px", height: "400px" }}>
               <Link to = "/nftpage"> <img src={"/public/donations/"+data} width="300px" height="200px"></img></Link> 
                <Box sx={{ width: "280px", height: "200px", backgroundColor: "white", padding: "10px", borderRadius: "0px 0px 10px 10px", display: "flex", flexDirection: "column", gap: 1 }}>
                <Box sx={{ display: "flex", gap: 1,justifyContent:"space-between" }}>
                            <Typography variant="body1" sx={{ fontWeight: "600", color: "#858584", fontSize: "12px" }}>Jun 27,2021</Typography>
                            <Typography variant="body1" sx={{ fontWeight: "600", fontSize: "12px" ,color: "#13ADB7"}}> 2320 donations</Typography>
                        </Box>
                    <Typography variant="body1" sx={{ fontWeight: "600", color: "black", fontSize: "18px" }}>{names.at(index)}</Typography>
                    <Typography variant="body1" sx={{ color: "#858584", fontSize: "14px" }}>{sub.at(index)}</Typography>
                    <Button variant="contained" sx={{ backgroundColor: "#13ADB7", borderRadius: "12px" }} >Donate</Button>
                </Box>
            </Box>
        </Grid>

    )
})}
</Grid>
</Box>
  )
}
