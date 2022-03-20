import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { showMovie } from '../../utils/moviesPictures/showMovie';

interface TypeMovieCard {
  title: String;
  director: String;
  producer: String;
  opening_crawl?: String;
}

export  function MovieCard({ title, director, producer, opening_crawl }: TypeMovieCard) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{margin:'0 auto'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={showMovie(title)}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {title}
          </Typography>
          <Typography gutterBottom component="div">
          {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Produtor:</strong>{producer},
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}