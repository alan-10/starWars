import lukeSkywalker from "../images/luke-skywalker.jpg";
import darthVader from "../images/darth-vader.jpeg";
import c3Po from "../images/c-3po.jpg";
import leiaOrgana from "../images/leiaOrgana.jpeg";
import owensLars from "../images/owens-lars.jpeg";
import beru from "../images/beru.jpeg";
import r5 from "../images/r5.jpeg";
import biggs from "../images/biggs.jpeg";
import r2d2 from "../images/r2-d2.jpeg";
import obi from "../images/obi-wan-kenobi.jpg";

export function showPicture(value: String) {
  switch (value) {
    case "Luke Skywalker":
      return lukeSkywalker;
    case "C-3PO":
      return c3Po;
    case "Darth Vader":
      return darthVader;
    case "Leia Organa":
      return leiaOrgana;
    case "Owen Lars":
      return owensLars;
    case "Beru Whitesun lars":
      return beru;
    case "R5-D4":
      return r5;
    case "Biggs Darklighter":
      return biggs;
    case "Obi-Wan Kenobi":
      return obi;
    case "R2-D2":
      return r2d2;
    default:
      return "/";
  }
}
