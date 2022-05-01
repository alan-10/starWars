import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { api } from "../../appi/api";
import UserCard from "../../components/UserCard";
import { BodyMain } from "../../components/BodyMain";
import { RobotSad } from '../../animations/robot-sad/RobotSad';
import { Yoada } from '../../animations/yoada/Yoda'
import { Container } from './styles'

interface UserType {
  name: String;
  height: String;
  mass: String;
}

export function Favorites() {
  const [user, setUser] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get("/people").then((result) => {
      const allUsers = result.data.results;
      const isFavorite = allUsers.filter((value: UserType) => {
        let falorit = localStorage.getItem(`${value.name}`);
        if (falorit) {
          return value;
        }
      });

      setUser(isFavorite);
      setIsLoading(false);
    });
  }, []);

  function toggleLoad(){
    setIsLoading(!isLoading)
  }

  if (  user.length < 1 && isLoading ) {
    return (
      <>
        <Header />
         <Yoada /> 
      </>
    )
  }

  console.log('user', user)

  return (
    <>
      <Header />
    <Container>
        { user.length > 0 ? (
          user.map(({ name, height, mass }: UserType, index) => (
            <div key={index} >
              <UserCard name={name} height={height} mass={mass} />
            </div>
          ))
        ) :( 
          <>
            <RobotSad />
            {toggleLoad}
          </>
        ) }
    </Container>
    </>
  );
}
