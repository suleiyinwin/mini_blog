import { Box} from "@mui/material";
import PostComponent from "./PostComponent";
import Grid from '@mui/material/Unstable_Grid2';
export default function Post({posts}){
    // const obj=posts.map((el)=> {
    //         return(
    //             <Box component="div"  sx={{ display: 'inline' }}><PostComponent posts={el} /></Box>
                
                
    //         );
    // })
    // return(
    //     <div>{obj}</div>
    // );

    return (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} >
            {posts.map((el, index) => (
              <Grid xs={12} md={6} key={index}>
                <PostComponent posts={el} />
              </Grid>
            ))}
          </Grid>
        </Box>
      );
}