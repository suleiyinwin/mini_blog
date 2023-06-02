import { Box,  Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Navbar from "./Navbar";
import Post from "./Post";
import Featured from "./Featured";
import MoreFrom from "./MoreFrom";


export default function Home(){
const postRead={
    
}
  const news={
    padding:{
        md:"3% 16%",
        xs:"5% 6%"
    }
  }
  const title={
    fontSize:{
        md: '36px',
        xs:'22px'
    },
    fontWeight:'500',
    margin:{
        md:'3% 16% 0 16%',
        xs:'3% 6% 3% 6%'

    }
  }
    return(
        
        <>
            <Navbar/>
            <Box>
            <Typography sx={title} variant="h4">
                Latest Posts
            </Typography>
            <Grid container rowSpacing={3} columnSpacing={3}>
                <Grid item md={12} xs={12} sx={news}>
                <Post/>
                </Grid>
            </Grid>
            </Box>
            <Box style={{backgroundColor:"#023047"}}>
            <Typography style={{color:'white', paddingTop:'3%'}} sx={title} variant="h4">
                Featured
            </Typography>
            <Grid container rowSpacing={3} columnSpacing={3}>
                <Grid item md={12} xs={12} sx={news}>
                <Featured />
                </Grid>
            </Grid>
            </Box>
            <Box style={{backgroundColor:"#ffffff"}}>
            <Typography style={{color:'#023047', paddingTop:'3%'}} sx={title} variant="h4">
                More from Through
            </Typography>
            <Grid container rowSpacing={3} columnSpacing={3}>
                <Grid item md={12} xs={12} sx={news}>
                <MoreFrom/>
                </Grid>
            </Grid>
            </Box>
        </>
    )
}