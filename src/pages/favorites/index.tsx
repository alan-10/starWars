import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { api } from "../../appi/api";
import UserCard from "../../components/UserCard";
import { BodyMain } from "../../components/BodyMain";

import { Container } from './styles'

interface UserType {
  name: String;
  height: String;
  mass: String;
}

export function Favorites() {
  const [user, setUser] = useState<UserType[]>([]);

  useEffect(() => {
    api.get("/people").then((result) => {
      const allUsers = result.data.results;
      const isFavorite = allUsers.filter((value: UserType) => {
        let valorit = localStorage.getItem(`${value.name}`);
        if (valorit) {
          return value;
        }
      });

      setUser(isFavorite);
    });
  }, []);

  return (
    <>
      <Header />
    <Container>

      
        {user.map(({ name, height, mass }: UserType) => (
          <div >
            <UserCard name={name} height={height} mass={mass} />
          </div>
        ))}
      
    </Container>
    </>
  );
}
