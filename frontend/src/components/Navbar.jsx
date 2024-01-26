import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Modal, Tab, Tabs, useMediaQuery } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Drawer from './Drawer';
import { Link, useNavigate ,useLocation} from 'react-router-dom';
import HouseboatIcon from '@mui/icons-material/Houseboat';
import Account from './Account'
import WalletOptions from "./WalletOptions" ;
import { useAccount} from 'wagmi'
import { UserContext } from '../context/UserContext';

function ConnectWallet() {
  const { isConnected } = useAccount()
  if (isConnected) return <Account />
  return <WalletOptions />
}


export default function Navbar() {
  const location = useLocation();
  const {handleClose,handleOpen,open,loggedIn,setLoggedIn} = React.useContext(UserContext)
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const { address } = useAccount()


  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { lg: 400, xs: 250 },
    backgroundColor: "#3B3B3B",
    boxShadow: 24,
    borderRadius: "14px",
    p: 4,
  };


  function handleLogout() {
    localStorage.removeItem("Authorization");
    setLoggedIn(false);
    navigate("/login");
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 ,position:"absolute" ,top:0,zIndex:1 , width:"100%"}}>
        <AppBar position="static" elevation={0} sx={{ backgroundColor: location.pathname === "/"?"transparent":"#2B2B2B",}}>
          <Toolbar>
            <Typography variant="body1" sx={{ flexGrow: 1, fontFamily: "'Manrope', sans-serif", fontSize: { lg: "20px", xs: "13px", md: "16px", sm: "16px" }, fontWeight: 600 }}>
              <IconButton onClick={() => navigate("/")} ><HouseboatIcon sx={{ color: "#A259FF" }}></HouseboatIcon></IconButton> CrowdFunding
            </Typography>
            {(isSmallDevice || isMediumDevice) ? (
              <Drawer></Drawer>
            ) : (
              <>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Tabs value={value} id="tabs">
                    <Link to="/charity"><Tab label="Charity" sx={{ textTransform: "capitalize", color: 'white' }} onClick={() => setValue(0)} /></Link>
                    <Link to="/disaster"><Tab label="Disaster" sx={{ textTransform: "capitalize", color: 'white' }} onClick={() => setValue(1)} /></Link>
                    <Link to="/events"><Tab label="Events" sx={{ textTransform: "capitalize", color: 'white' }} onClick={() => setValue(2)} /></Link>
                    <Tab label="Connect Wallet" sx={{ textTransform: "capitalize", color: 'white' }} onClick={() => { setValue(3); handleOpen() }} />
                  </Tabs>
                </Box>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="body1" sx={{ fontSize: { lg: "28px", xs: "18px" }, fontWeight: 600 }}>
            Connect Your Crypto Wallet
          </Typography>
          <ConnectWallet></ConnectWallet>
          <Typography id="modal-modal-title" variant="body1" sx={{ marginTop: "15px", fontSize: { xs: "12px", lg: "16px" } }}>
            Your Wallet Address: {(address) ? address : null}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}