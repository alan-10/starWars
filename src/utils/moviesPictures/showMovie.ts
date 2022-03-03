
import {
  aNewHope,
  theEmpires,
  ruturnOfJeday,
  thePathon,
  attackOfTheclones,
  revangeOfTheSith,
} from "./linkMovies";


export function showMovie(value: String) {
  switch (value) {
    case "A New Hope": // aqui começa os filmes
      return aNewHope;
    case "The Empire Strikes Back":
      return theEmpires;
    case "Return of the Jedi":
      return ruturnOfJeday;
    case "The Phantom Menace":
      return thePathon;
    case "Attack of the Clones":
      return attackOfTheclones;
    case "Revenge of the Sith":
      return revangeOfTheSith;
    default:
      return "/";
  }
}
