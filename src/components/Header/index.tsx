import { Link } from 'react-router-dom';
import { Heade, GroupButtons, Menu } from './styles';



export function Header(){

  return (
    <Heade >
      <Link to="/favorites">Favoritos </Link>
      <GroupButtons>
          <nav>
            <Menu>
            <li> <Link  to="/">Personagens</Link> </li>
             <li> <Link to="/movies">Filmes</Link> </li>
             <li> <Link to="/startShips">Naves Espaciais</Link> </li>
             <li> <Link to="/vehicules">Veículos</Link> </li>
            </Menu>
          </nav>
      
      </GroupButtons>
    </Heade>
  );
}