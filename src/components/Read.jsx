import { Search } from "@mui/icons-material";
import { AppBar, Box, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
export default function Read(){
    
    const title={
        fontSize:{
            md: '36px',
            xs:'22px'
        }
    } 
    const news={
        padding:{
            md:"4% 16%",
            xs:"5% 6%"
        }
      }
    return(
        <Box>
            <AppBar  elevation={0} sx={{ borderBottom: 1, borderColor: "#023047" }}
        style={{ backgroundColor: "#ffffff", padding: "0 0 0 5%" }}
        position="static">
            <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <img src="./assets/logo3.svg" />
            </Box>
            <Box style={{ padding: "0 5% 0 0" }}>
            <IconButton style={{ padding: "0 12px" }}>
                <Search style={{color:'black'}}/>
            </IconButton>
            <IconButton style={{ padding: "0 12px" }}>
                <DriveFileRenameOutlineIcon style={{color:'black'}}/>
            </IconButton>
            <IconButton style={{ padding: "0 0 0 12px" }}>
            <img src="./assets/profile.svg" />
            </IconButton>
            </Box>
            
            </Toolbar>
        </AppBar>
        <Grid container>
        <Box style={{backgroundColor:'#023047', width:'100%'}}>
            <Grid item xs={12} md={12} sx={news}>
               
                    <Typography variant='h4' sx={title} style={{color:'white'}}>
                    This ‘Intelligent Carpet’ Lets You Tiptoe Through VR
                    </Typography>
               
            </Grid>
            </Box>
            <Grid item xs={12} md={12} sx={news}> 
            <Typography variant='h6'>
                Yun Luo
            </Typography>
            <hr></hr>
            <Typography variant='h6'>
                Published 
            </Typography>
            //Category tag have to be called
            </Grid>
            <Grid item>
                //image
            </Grid>
            <Grid item>
                //Posts
            </Grid>
            

        </Grid>
        </Box>
    )
}