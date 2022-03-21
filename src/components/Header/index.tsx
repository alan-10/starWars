import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heade, GroupButtons, Menu, MenuBurger } from './styles';



export function Header(){

  const [visibleMenu, setvisibleMenu] = useState(false);

  function toggleMewnu(){
    setvisibleMenu(!visibleMenu);
  }

  return (
    <Heade >
      <Link to="/favorites">Favoritos </Link>
      <GroupButtons>
        
          <nav>
            <MenuBurger onClick={() => toggleMewnu()}>
                menu
            </MenuBurger>
            <Menu select={visibleMenu}>
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