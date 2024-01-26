import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Divider } from "@mui/material";
import { useLocation} from 'react-router-dom';
export default function Footer() {
  const location = useLocation();
  if(location.pathname === "/")
  {
    return (
      <Box
        component="footer"
        sx={{backgroundColor:"#3B3B3B",paddingTop:"40px",position:"absolute",top:"535vh",width:"100%"}}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4} sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <Typography variant="h6" sx={{color:"white",fontWeight:"600"}} gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" sx={{color:"#858585"}}>
                Please donate at this crowdfunding application. Your donation can save someones life.
                Try something new.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <Typography variant="h6"sx={{color:"white",fontWeight:"600"}} gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" sx={{color:"#858585"}}>
                Gomti Nagar , Lucknow , Uttar Pradesh ,India
              </Typography>
              <Typography variant="body2" sx={{color:"#858585"}}>
                Email: info@example.com
              </Typography>
              <Typography variant="body2" sx={{color:"#858585"}}>
                Phone: +1 234 567 8901
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <Typography variant="h6" sx={{color:"white",fontWeight:"600"}} gutterBottom>
                Follow Us
              </Typography>
              <Box>
              <Link href="https://www.facebook.com/" sx={{color:"#858585"}}>
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/"
                color="inherit"
                sx={{ pl: 1, pr: 1 ,color:"#858585"}}
              >
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/" sx={{color:"#858585"}}>
                <Twitter />
              </Link>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{m:2,backgroundColor:"white",color:"white"}}></Divider>
          <Box mt={3} pb={2}>
            <Typography variant="body2" sx={{color:"white"}} align="center">
              {"Copyright © "}
              <Link sx={{color:"white"}} href="https://your-website.com/">
                Crowdfunding
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
      </Box>
    )
  }
  if(!location.pathname === "/")
  {
    return (
      <div></div>
    )
  }
}