import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { showPicture } from "../../utils/linkPicture";
interface UsertoCard {
  name: String;
  height: String;
  mass: String;
}



export default function UserCard({ height, name, mass }: UsertoCard) {

  const [isFavorit, setIsFavorirte] = useState<String | null>(() => {
    const resultlocalStorage =  localStorage.getItem(`${name}`);

    if(resultlocalStorage){
      return resultlocalStorage;
    }
    return null
  });


  function makeFAvorite(name: String, height: String, mass: String, ){ 
    const bodyFAvority = {name, height, mass} ;
    if(isFavorit){
      localStorage.removeItem(`${name}`);
      setIsFavorirte(null)
    }else {
      localStorage.setItem(`${name}`,JSON.stringify(bodyFAvority));
      setIsFavorirte(name)
    }
  }


  return (
    <Card sx={{ maxWidth: 345 }} style={{margin:'0 auto'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={showPicture(name)}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {name} , {height} de altura e pesa {mass} kilos
          </Typography>
          <IconButton  onClick={() => makeFAvorite(name, height, mass)}
            style={{position:'absolute', marginLeft: '9px',
            right: '2px', bottom: '10px' , padding: '2px', 
            }} 
            aria-label="add to favorites"
          >
            <FavoriteIcon color={isFavorit? 'error' : 'inherit'}  />
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
