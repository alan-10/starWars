import { useState, useEffect} from 'react';
import Grid from "@mui/material/Grid";
import { api } from '../../appi/api';
import { Header } from '../../components/Header';
import { Content, Container, Title } from './styles';

import { VehiculeCard } from '../../components/VehiculeCard';

interface TypeVehicule {
  name: String;
  model: String;
}


export function Vehicles(){
  const [vehicules, setVehicles] = useState<TypeVehicule[]>([])

  useEffect(() => {
    api.get('/vehicles').then(result => {
      setVehicles(result.data.results)
    })
  }, []);

  if (vehicules.length < 1) {
    return(
      <>
        <Header />
       <p>Carregando..</p>
       </>
      )
  }

  return (
   <div>
     <Header />

     <Title>
      <h3>Veículos</h3>
     </Title>

     <Content
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4rem",
          alignItems: "center",
         
        }}
      >
        <Container>
          <Grid container spacing={2}>
            {vehicules.map(({name, model }: TypeVehicule) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <VehiculeCard
                  name={name}
                 model={model}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Content>
   </div>
  )
}