import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import Grid from "@mui/material/Grid";
import { api } from "../../appi/api";
import { MovieCard } from "../../components/MovieCard";
import { BodyMain } from '../../components/BodyMain';
import {  Title, Container } from "./styles";
import { Yoada } from '../../animations/yoada/Yoda';

interface TypeMovies {
  title: String;
  director: String;
  producer: String;
  opening_crawl?: String;
}

export function Movies() {
  const [movies, setMovies] = useState<TypeMovies[]>([]);

  useEffect(() => {
    api.get("/films").then((result) => {
      setMovies(result.data.results);
    });
  }, []);

  if (movies.length < 1) {
    return(
      <>
        <Header />
        <Yoada />
       </>
      )
  }

  return (
    <>
     <Header />
    <Container>
     
     <Title>
       <h3>Filmes</h3>
     </Title>
     <BodyMain>
          <Grid container spacing={2}>
            {movies.map((result: TypeMovies, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                <MovieCard
                  title={result.title}
                  director={result.producer}
                  producer={result.producer}
                />
              </Grid>
            ))}
          </Grid>
          </BodyMain>
        
    </Container>
    </>
  );
}
