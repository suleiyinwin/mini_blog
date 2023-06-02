import { Button } from "@mui/material";
import Category from "./Category";

export default function CategoryComponent({cat,handleClick}){
    const category = {
        backgroundColor: "#F0F0F0",
        "&:hover": {
          //you want this to be the same as the backgroundColor above
          backgroundColor: "#F0F0F0",
        },
        color: "black",
        border: "1px solid #fofofo",
        textTransform: "none",
        borderRadius: "30px",
        padding: "10px ",
        margin:'0 10px 10px 0'
      };
      return(
        <>
            <Button onClick={handleClick}  sx={category}>{cat}</Button>
            
        </>
            
      )
}