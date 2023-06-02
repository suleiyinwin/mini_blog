import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";


export default function MoreFromComponent({posts}){
    return(
        //More from Through
        <Box>
        <Card sx={{ display: 'flex' }} elevation={0} style={{backgroundColor:'white'}} >
            <Box sx={{ display: 'flex', flexDirection: 'column',
            }}
            >
            <CardMedia

            
            sx={{ flex: '1 0 auto' }}
            
            
            component="img"
        image={posts.image}
      />
      
            </Box>
            <CardContent  style={{padding:'5%'}}>
        <Typography variant="subtitle1" color="#023047">
          {posts.category}
        </Typography>
        <br />
        <Typography
          variant="h6"
          color="#000000"
          height="65px"
          overflow="hidden"
        >
          {posts.description}
        </Typography>
        <br/>
        <Typography variant="subtitle1" color="#023047E">
          {posts.date}
        </Typography>
      </CardContent>
        </Card>
        <hr/>
        </Box>


    )
}