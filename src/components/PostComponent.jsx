import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function PostComponent({posts}){
    return(
        <Card style={{borderRadius:'20px'}} >
                    <CardMedia
                        sx={{ height: 200 }}
                        image={posts.image}
                        
                    />
                    <CardContent style={{backgroundColor:'#F0F0F0'}}>
                        <Typography variant="subtitle1" color="#023047">
                            {posts.category}
                        </Typography>
                        <br/>
                        <Typography variant="h6" color="#000000" height="100px" overflow="hidden">
                            {posts.description}
                        </Typography>
                        <br/>
                        <Typography variant="subtitle1" color="#023047">
                            {posts.date}
                        </Typography>
                    </CardContent>
                </Card>
    )
}