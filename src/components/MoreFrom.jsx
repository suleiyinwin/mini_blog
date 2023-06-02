import Grid from '@mui/material/Unstable_Grid2';
import MoreFromComponent from './MoreFromComponent';
import { Box } from '@mui/material';
export default function MoreFrom(){
    const posts = [
        {
          image: "./assets/2.jpeg",
          category: "Natural Beauty",
          description:
            "Lorem ipsum dolor sit amet consectetur. Risus risus pellentesque dictum pellentesque ornare aenean purus risus facilisi.",
          date: "April 12 2023",
        },
        {
          image: "./assets/3.jpeg",
          category: "Natural Beauty",
          description:
            "Lorem ipsum dolor sit amet consectetur. Risus risus pellentesque dictum pellentesque ornare aenean purus risus facilisi.",
          date: "April 12 2023",
        },
        {
          image: "./assets/4.jpeg",
          category: "Natural Beauty",
          description:
            "Lorem ipsum dolor sit amet consectetur. Risus risus pellentesque dictum pellentesque ornare aenean purus risus facilisi.",
          date: "April 12 2023",
        },
      ];
      return(
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} >
          {posts.map((el, index) => (
            <Grid xs={12} md={6} key={index}>
              <MoreFromComponent posts={el} />
            </Grid>
          ))}
        </Grid>
      </Box>
      )
}