import { useEffect } from "react";
import { useUserContext } from "../../contextApi/userContext";
import { api } from "../../appi/api";
import { Header } from "../../components/Header";
import UserCard from "../../components/UserCard";
import Grid from "@mui/material/Grid";
import { ButtonSerch } from "../../components/ButtonSearch";
import { BodyMain } from "../../components/BodyMain";
import { Yoada } from '../../animations/yoada/Yoda';
import { Search, Container } from "./styles";

interface UserType {
  name: String;
  height: String;
  mass: String;
}

export function Home() {
  const { users, includUer } = useUserContext();

  useEffect(() => {
    api.get("/people").then((result) => {
      includUer(result.data.results);
    });
  }, []);

  if (users.length < 1) {
    return (
      <>
        <Header />
        <Yoada />
      </>
    );
  }

  return (
    <>
      <Header />
      <Container>
        <Search>
          <ButtonSerch />
        </Search>
        <BodyMain>
          {users.length === 1 ? (
            <>
              <Grid container spacing={2}>
                {users.map(({ name, height, mass }: UserType, index) => (
                  <Grid item lg={12} md={12} sm={12} xs={12} key={index}>
                    <UserCard name={name} height={height} mass={mass} />
                  </Grid>
                ))}
              </Grid>

            </>
          ) : (
            <Grid container spacing={2} style={{margin: '0'}}>
              {users.map(({ name, height, mass }: UserType) => (
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <UserCard name={name} height={height} mass={mass} />
                </Grid>
              ))}
            </Grid>
          )}
        </BodyMain>
      </Container>
    </>
  );
}
