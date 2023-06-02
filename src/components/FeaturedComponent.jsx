import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function FeaturedComponent({posts}){
    return(
        <Box>
        <Card sx={{ display: 'flex' }} elevation={0} style={{backgroundColor:'#023047'}} >
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
        <Typography variant="subtitle1" color="#A3D6EE">
          {posts.category}
        </Typography>
        <br />
        <Typography
          variant="h6"
          color="#ffffff"
          height="65px"
          overflow="hidden"
        >
          {posts.description}
        </Typography>
        <br />
        <Typography variant="subtitle1" color="#A3D6EE">
          {posts.date}
        </Typography>
      </CardContent>
        </Card>
        <hr/>
        </Box>
        

    )
}