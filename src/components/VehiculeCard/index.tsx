import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { resolvePicture } from '../../utils/vehiclesPictures/resolvePicture';

interface TypeVehicule {
 name: String;
 model: String;
}

export  function VehiculeCard({ name, model }: TypeVehicule) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={resolvePicture(name)}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {name}
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
            <strong>Modelo:</strong>{model},
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}