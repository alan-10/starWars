import { useEffect, useState } from "react";
import { api } from "../../appi/api";
import Grid from "@mui/material/Grid";
import { Header } from "../../components/Header";
import { MovieCard } from "../../components/StartShipCard";
import { BodyMain } from "../../components/BodyMain";
import {  Title } from "./styles";

interface TypeStartShip {
  name: String;
  model: String;
}

export function StartShips() {
  const [startShip, setStarShip] = useState<TypeStartShip[]>([]);

  useEffect(() => {
    api.get("/starships").then((result) => {
      setStarShip(result.data.results);
    });
  }, []);

  if (startShip.length < 1) {
    return (
      <>
        <Header />
        <p>Carregando..</p>
      </>
    );
  }

  return (
    <div>
      <Header />

      <Title>
        <h3>Naves Espaciais</h3>
      </Title>
      <BodyMain>
        <Grid container spacing={2}>
          {startShip.map(({ model, name }: TypeStartShip) => (
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <MovieCard name={name} model={model} />
            </Grid>
          ))}
        </Grid>
      </BodyMain>
    </div>
  );
}
