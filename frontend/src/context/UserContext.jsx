import { createContext, useState } from "react";

export const UserContext = createContext();


export const UserContextProvider = ({children})=>
{
    const[changeDisplay,setchangeDisplay] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const[loggedIn,setLoggedIn] = useState(false);
    const[userInfo,setUserInfo] = useState([]);
    return(
        <UserContext.Provider value={{handleClose,handleOpen,open,loggedIn,setLoggedIn,setUserInfo,userInfo,changeDisplay,setchangeDisplay}}>
            {children}
        </UserContext.Provider>
    )
}