import { Search } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
export default function Navbar(){
    return(
        <AppBar  elevation={0} sx={{ borderBottom: 1, borderColor: "#FB8500" }}
        style={{ backgroundColor: "#023047", padding: "0 0 0 5%" }}
        position="static">
            <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <img src="./assets/logo2.svg" />
            </Box>
            <Box style={{ padding: "0 5% 0 0" }}>
            <IconButton style={{ padding: "0 12px" }}>
                <Search style={{color:'white'}}/>
            </IconButton>
            <IconButton style={{ padding: "0 12px" }}>
                <DriveFileRenameOutlineIcon style={{color:'white'}}/>
            </IconButton>
            <IconButton style={{ padding: "0 0 0 12px" }}>
            <img src="./assets/profile.svg" />
            </IconButton>
            </Box>
            
            </Toolbar>
        </AppBar>
    )
}